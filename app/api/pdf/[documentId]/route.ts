import { NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase/server";

interface RouteParams {
  params: Promise<{ documentId: string }>;
}

export async function GET(_request: Request, { params }: RouteParams) {
  const { documentId } = await params;
  const supabase = createServerClient();

  // Fetch document to get storage path
  const { data: document, error } = await supabase
    .from("documents")
    .select("storage_path")
    .eq("id", documentId)
    .single();

  if (error || !document) {
    return NextResponse.json({ error: "Document not found" }, { status: 404 });
  }

  // Get signed URL (valid for 1 hour)
  const { data: signedUrl, error: urlError } = await supabase.storage
    .from("pdfs")
    .createSignedUrl(document.storage_path, 3600);

  if (urlError || !signedUrl) {
    return NextResponse.json(
      { error: "Failed to get file URL" },
      { status: 500 },
    );
  }

  return NextResponse.json({ url: signedUrl.signedUrl });
}
