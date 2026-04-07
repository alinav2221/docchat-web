import { NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase/server";
import { extractTextFromPdf } from "@/lib/pdf";
import type { UploadResponse } from "@/lib/types";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!file || !(file instanceof File)) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    if (file.type !== "application/pdf") {
      return NextResponse.json(
        { error: "File must be a PDF" },
        { status: 400 },
      );
    }

    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json(
        { error: "File exceeds 10MB limit" },
        { status: 400 },
      );
    }

    // Extract text from PDF
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const { text, pageCount } = await extractTextFromPdf(buffer);

    if (!text.trim()) {
      return NextResponse.json(
        {
          error:
            "Could not extract text from PDF. The file may be scanned or image-based.",
        },
        { status: 400 },
      );
    }

    const supabase = createServerClient();

    // Upload PDF to Supabase Storage (ASCII-only path for compatibility)
    const safeFilename = `${crypto.randomUUID()}.pdf`;
    const storagePath = `${safeFilename}`;
    const { error: storageError } = await supabase.storage
      .from("pdfs")
      .upload(storagePath, buffer, {
        contentType: "application/pdf",
      });

    if (storageError) {
      console.error("Storage upload error:", storageError);
      return NextResponse.json(
        { error: "Failed to store file" },
        { status: 500 },
      );
    }

    // Save document metadata + extracted text
    const { data: document, error: dbError } = await supabase
      .from("documents")
      .insert({
        filename: file.name,
        storage_path: storagePath,
        file_size: file.size,
        page_count: pageCount,
        extracted_text: text,
      })
      .select("id")
      .single();

    if (dbError || !document) {
      console.error("Database insert error:", dbError);
      return NextResponse.json(
        { error: "Failed to save document" },
        { status: 500 },
      );
    }

    const response: UploadResponse = {
      documentId: document.id,
      filename: file.name,
      pageCount,
    };

    return NextResponse.json(response, { status: 201 });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { error: "Failed to process PDF" },
      { status: 500 },
    );
  }
}
