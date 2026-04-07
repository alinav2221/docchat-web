import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { DocumentInfo } from "@/components/chat/DocumentInfo";
import { ChatInterface } from "@/components/chat/ChatInterface";
import { PdfViewer } from "@/components/chat/PdfViewer";
import { createServerClient } from "@/lib/supabase/server";
import type { Message } from "@/lib/types";

interface ChatDocumentPageProps {
  params: Promise<{ documentId: string }>;
}

export async function generateMetadata({
  params,
}: ChatDocumentPageProps): Promise<Metadata> {
  const { documentId } = await params;
  const supabase = createServerClient();
  const { data: document } = await supabase
    .from("documents")
    .select("filename")
    .eq("id", documentId)
    .single();

  return {
    title: document ? `${document.filename} — DocChat` : "Chat — DocChat",
  };
}

export default async function ChatDocumentPage({
  params,
}: ChatDocumentPageProps) {
  const { documentId } = await params;
  const supabase = createServerClient();

  // Fetch document
  const { data: document, error } = await supabase
    .from("documents")
    .select("id, filename, page_count")
    .eq("id", documentId)
    .single();

  if (error || !document) {
    notFound();
  }

  // Fetch existing messages
  const { data: messages } = await supabase
    .from("messages")
    .select("*")
    .eq("document_id", documentId)
    .order("created_at", { ascending: true });

  return (
    <div className="flex h-screen flex-col">
      <Header />
      <DocumentInfo
        filename={document.filename}
        pageCount={document.page_count}
      />
      <div className="flex flex-1 overflow-hidden">
        {/* PDF Viewer — left side (hidden on mobile) */}
        <div className="hidden w-1/2 lg:block">
          <PdfViewer documentId={documentId} pageCount={document.page_count} />
        </div>

        {/* Chat — right side (full on mobile) */}
        <div className="flex min-h-0 flex-1 flex-col">
          <ChatInterface
            documentId={documentId}
            initialMessages={(messages as Message[]) ?? []}
          />
        </div>
      </div>
    </div>
  );
}
