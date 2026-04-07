import type { Message } from "./types";

const MAX_DOCUMENT_CHARS = 600_000; // ~150K tokens
const MAX_HISTORY_MESSAGES = 20;

export function truncateDocumentText(text: string): {
  text: string;
  truncated: boolean;
} {
  if (text.length <= MAX_DOCUMENT_CHARS) {
    return { text, truncated: false };
  }
  return { text: text.slice(0, MAX_DOCUMENT_CHARS), truncated: true };
}

export function buildSystemPrompt(
  documentText: string,
  truncated: boolean,
): string {
  const truncationNote = truncated
    ? "\n\nNote: This document was too large and has been truncated. You only have access to a portion of it. Let the user know if their question might relate to content beyond what you can see."
    : "";

  return `You are DocChat, an AI assistant that answers questions about the provided PDF document.

## Rules:
- Answer ONLY based on the document content below
- Always cite relevant sections or page references when possible
- If the answer is not in the document, say so clearly
- Be concise but thorough
- Use markdown formatting for readability
- Respond in the same language the user writes in

## Document Content:
${documentText}${truncationNote}`;
}

export function trimHistory(messages: Message[]): Message[] {
  if (messages.length <= MAX_HISTORY_MESSAGES) {
    return messages;
  }
  return messages.slice(-MAX_HISTORY_MESSAGES);
}
