import { PDFParse } from "pdf-parse";

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

interface PdfResult {
  text: string;
  pageCount: number;
}

export async function extractTextFromPdf(buffer: Buffer): Promise<PdfResult> {
  if (buffer.length > MAX_FILE_SIZE) {
    throw new Error("File exceeds 10MB limit");
  }

  const parser = new PDFParse({ data: new Uint8Array(buffer) });

  try {
    const textResult = await parser.getText();
    return {
      text: textResult.text,
      pageCount: textResult.total,
    };
  } finally {
    await parser.destroy();
  }
}
