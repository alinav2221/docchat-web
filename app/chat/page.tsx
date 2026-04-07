import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { UploadZone } from "@/components/chat/UploadZone";

export const metadata: Metadata = {
  title: "Upload PDF — DocChat",
  description: "Upload a PDF document and chat with it using AI.",
};

export default function ChatPage() {
  return (
    <>
      <Header />
      <main>
        <UploadZone />
      </main>
    </>
  );
}
