import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "optional",
});

export const metadata: Metadata = {
  title: "DocChat - Chat with Your PDF Documents",
  description:
    "Upload PDFs and chat with them using AI. Extract insights, ask questions, and get instant answers from your documents.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL || "http://localhost:3000"),
  openGraph: {
    title: "DocChat - Chat with Your PDF Documents",
    description:
      "Upload PDFs and chat with them using AI. Extract insights, ask questions, and get instant answers from your documents.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DocChat - Chat with Your PDF Documents",
    description:
      "Upload PDFs and chat with them using AI. Extract insights, ask questions, and get instant answers from your documents.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="flex min-h-full flex-col bg-white font-sans text-gray-900">
        {children}
      </body>
    </html>
  );
}
