export interface Document {
  id: string;
  filename: string;
  storage_path: string;
  file_size: number;
  page_count: number | null;
  extracted_text: string;
  created_at: string;
}

export interface Message {
  id: string;
  document_id: string;
  role: "user" | "assistant";
  content: string;
  created_at: string;
}

export interface UploadResponse {
  documentId: string;
  filename: string;
  pageCount: number;
}

export interface ChatRequest {
  documentId: string;
  message: string;
}

export interface ChatStreamDelta {
  type: "delta";
  content: string;
}

export interface ChatStreamDone {
  type: "done";
  messageId: string;
}

export type ChatStreamEvent = ChatStreamDelta | ChatStreamDone;
