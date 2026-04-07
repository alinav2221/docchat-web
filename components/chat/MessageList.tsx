"use client";

import { useEffect, useRef } from "react";
import { MessageCircle } from "lucide-react";
import { ChatMessage } from "./ChatMessage";
import type { Message } from "@/lib/types";

interface MessageListProps {
  messages: Message[];
}

export function MessageList({ messages }: MessageListProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (messages.length === 0) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <div className="rounded-full bg-blue-100 p-4">
          <MessageCircle className="h-8 w-8 text-blue-600" />
        </div>
        <h3 className="mt-4 text-lg font-semibold text-gray-900">
          Ask me anything about this document
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          I can summarize, find details, extract data, and more
        </p>
      </div>
    );
  }

  return (
    <div className="flex-1 space-y-4 overflow-y-auto p-4">
      {messages.map((msg) => (
        <ChatMessage key={msg.id} message={msg} />
      ))}
      <div ref={bottomRef} />
    </div>
  );
}
