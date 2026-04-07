import { extractText, getDocumentProxy } from "unpdf";

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

interface PdfResult {
  text: string;
  pageCount: number;
}

export async function extractTextFromPdf(buffer: Buffer): Promise<PdfResult> {
  if (buffer.length > MAX_FILE_SIZE) {
    throw new Error("File exceeds 10MB limit");
  }

  const pdf = await getDocumentProxy(new Uint8Array(buffer));
  const { text, totalPages } = await extractText(pdf, {
    mergePages: true,
  });

  return {
    text: Array.isArray(text) ? text.join("\n") : text,
    pageCount: totalPages,
  };
}
