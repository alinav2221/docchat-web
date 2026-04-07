import { createServerClient } from "@/lib/supabase/server";
import { anthropic } from "@/lib/anthropic";
import {
  buildSystemPrompt,
  truncateDocumentText,
  trimHistory,
} from "@/lib/chat";
import type { ChatRequest, Message } from "@/lib/types";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ChatRequest;
    const { documentId, message } = body;

    if (!documentId || !message?.trim()) {
      return Response.json(
        { error: "documentId and message are required" },
        { status: 400 },
      );
    }

    const supabase = createServerClient();

    // Fetch document
    const { data: document, error: docError } = await supabase
      .from("documents")
      .select("extracted_text")
      .eq("id", documentId)
      .single();

    if (docError || !document) {
      return Response.json({ error: "Document not found" }, { status: 404 });
    }

    // Fetch conversation history
    const { data: existingMessages } = await supabase
      .from("messages")
      .select("*")
      .eq("document_id", documentId)
      .order("created_at", { ascending: true });

    const history = trimHistory((existingMessages as Message[]) ?? []);

    // Save user message
    await supabase.from("messages").insert({
      document_id: documentId,
      role: "user",
      content: message.trim(),
    });

    // Build Claude request
    const { text: docText, truncated } = truncateDocumentText(
      document.extracted_text,
    );
    const systemPrompt = buildSystemPrompt(docText, truncated);

    const claudeMessages = [
      ...history.map((m) => ({
        role: m.role as "user" | "assistant",
        content: m.content,
      })),
      { role: "user" as const, content: message.trim() },
    ];

    // Stream response
    const stream = anthropic.messages.stream({
      model: "claude-sonnet-4-20250514",
      max_tokens: 4096,
      system: systemPrompt,
      messages: claudeMessages,
    });

    let fullResponse = "";

    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const event of stream) {
            if (
              event.type === "content_block_delta" &&
              event.delta.type === "text_delta"
            ) {
              const chunk = event.delta.text;
              fullResponse += chunk;
              controller.enqueue(
                encoder.encode(
                  `data: ${JSON.stringify({ type: "delta", content: chunk })}\n\n`,
                ),
              );
            }
          }

          // Save assistant message
          const { data: savedMessage } = await supabase
            .from("messages")
            .insert({
              document_id: documentId,
              role: "assistant",
              content: fullResponse,
            })
            .select("id")
            .single();

          controller.enqueue(
            encoder.encode(
              `data: ${JSON.stringify({ type: "done", messageId: savedMessage?.id ?? "" })}\n\n`,
            ),
          );
          controller.close();
        } catch (error) {
          console.error("Stream error:", error);
          controller.enqueue(
            encoder.encode(
              `data: ${JSON.stringify({ type: "error", content: "Failed to generate response" })}\n\n`,
            ),
          );
          controller.close();
        }
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (error) {
    console.error("Chat error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
