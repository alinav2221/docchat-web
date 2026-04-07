"use client";

import { useState, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Upload, FileText, Loader2 } from "lucide-react";

export function UploadZone() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleUpload = useCallback(
    async (file: File) => {
      if (file.type !== "application/pdf") {
        setError("Please upload a PDF file");
        return;
      }

      if (file.size > 10 * 1024 * 1024) {
        setError("File must be under 10MB");
        return;
      }

      setError(null);
      setFileName(file.name);
      setIsUploading(true);

      try {
        const formData = new FormData();
        formData.append("file", file);

        const response = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          let errorMessage = "Upload failed";
          try {
            const data = (await response.json()) as { error: string };
            errorMessage = data.error || errorMessage;
          } catch {
            errorMessage = `Server error (${response.status})`;
          }
          throw new Error(errorMessage);
        }

        const data = (await response.json()) as {
          documentId: string;
        };
        router.push(`/chat/${data.documentId}`);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Upload failed");
        setIsUploading(false);
        setFileName(null);
      }
    },
    [router],
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);

      const file = e.dataTransfer.files[0];
      if (file) {
        void handleUpload(file);
      }
    },
    [handleUpload],
  );

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        void handleUpload(file);
      }
    },
    [handleUpload],
  );

  return (
    <div className="flex min-h-[calc(100vh-80px)] items-center justify-center px-4">
      <div className="w-full max-w-xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Chat with your PDF
          </h1>
          <p className="mt-2 text-gray-600">
            Upload a document and start asking questions
          </p>
        </div>

        <div
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
          className={`flex flex-col items-center justify-center rounded-2xl border-2 border-dashed p-12 transition-all ${
            isDragging
              ? "border-blue-600 bg-blue-50"
              : "border-gray-300 bg-gray-50 hover:border-gray-400"
          } ${isUploading ? "pointer-events-none opacity-60" : "cursor-pointer"}`}
          onClick={() => !isUploading && fileInputRef.current?.click()}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="application/pdf"
            onChange={handleFileSelect}
            className="hidden"
          />

          {isUploading ? (
            <>
              <Loader2 className="mb-4 h-12 w-12 animate-spin text-blue-600" />
              <p className="text-sm font-medium text-gray-900">
                Processing {fileName}...
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Extracting text and indexing
              </p>
            </>
          ) : (
            <>
              <div className="mb-4 rounded-full bg-blue-100 p-4">
                <Upload className="h-8 w-8 text-blue-600" />
              </div>
              <p className="text-sm font-medium text-gray-900">
                Drop your PDF here or click to browse
              </p>
              <p className="mt-1 text-xs text-gray-500">PDF files up to 10MB</p>
            </>
          )}
        </div>

        {error && (
          <div className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        <div className="mt-8 flex items-center justify-center gap-6 text-xs text-gray-400">
          <div className="flex items-center gap-1.5">
            <FileText className="h-4 w-4" />
            <span>PDF only</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Upload className="h-4 w-4" />
            <span>Max 10MB</span>
          </div>
        </div>
      </div>
    </div>
  );
}
