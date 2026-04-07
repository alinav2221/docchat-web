"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Loader2,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import * as pdfjsLib from "pdfjs-dist";

pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

interface PdfViewerProps {
  documentId: string;
  pageCount: number | null;
}

export function PdfViewer({ documentId, pageCount }: PdfViewerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const pdfDocRef = useRef<pdfjsLib.PDFDocumentProxy | null>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(pageCount ?? 0);
  const [scale, setScale] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load PDF document
  useEffect(() => {
    let cancelled = false;

    async function loadPdf() {
      try {
        setIsLoading(true);
        const res = await fetch(`/api/pdf/${documentId}`);
        if (!res.ok) throw new Error("Failed to load PDF");

        const { url } = (await res.json()) as { url: string };
        const doc = await pdfjsLib.getDocument(url).promise;

        if (cancelled) return;

        pdfDocRef.current = doc;
        setTotalPages(doc.numPages);
        setIsLoading(false);
      } catch {
        if (!cancelled) {
          setError("Failed to load PDF");
          setIsLoading(false);
        }
      }
    }

    void loadPdf();
    return () => {
      cancelled = true;
    };
  }, [documentId]);

  // Render current page
  const renderPage = useCallback(async () => {
    const doc = pdfDocRef.current;
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!doc || !canvas || !container) return;

    const page = await doc.getPage(currentPage);
    const containerWidth = container.clientWidth - 32; // padding

    const baseViewport = page.getViewport({ scale: 1 });
    const fitScale = containerWidth / baseViewport.width;
    const viewport = page.getViewport({ scale: fitScale * scale });

    canvas.height = viewport.height;
    canvas.width = viewport.width;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    await page.render({ canvas, canvasContext: ctx, viewport }).promise;
  }, [currentPage, scale]);

  useEffect(() => {
    if (!isLoading && pdfDocRef.current) {
      void renderPage();
    }
  }, [isLoading, renderPage]);

  // Re-render on resize
  useEffect(() => {
    const handleResize = () => {
      if (pdfDocRef.current) void renderPage();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [renderPage]);

  if (error) {
    return (
      <div className="flex h-full items-center justify-center text-sm text-gray-500">
        {error}
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col border-r border-gray-200 bg-gray-50">
      {/* Toolbar */}
      <div className="flex items-center justify-between border-b border-gray-200 bg-white px-3 py-2">
        <div className="flex items-center gap-1">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage <= 1}
            className="rounded p-1 hover:bg-gray-100 disabled:opacity-30"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <span className="min-w-[80px] text-center text-xs text-gray-600">
            {currentPage} / {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage >= totalPages}
            className="rounded p-1 hover:bg-gray-100 disabled:opacity-30"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setScale((s) => Math.max(0.5, s - 0.25))}
            disabled={scale <= 0.5}
            className="rounded p-1 hover:bg-gray-100 disabled:opacity-30"
          >
            <ZoomOut className="h-4 w-4" />
          </button>
          <span className="min-w-[40px] text-center text-xs text-gray-600">
            {Math.round(scale * 100)}%
          </span>
          <button
            onClick={() => setScale((s) => Math.min(2, s + 0.25))}
            disabled={scale >= 2}
            className="rounded p-1 hover:bg-gray-100 disabled:opacity-30"
          >
            <ZoomIn className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* PDF Canvas */}
      <div ref={containerRef} className="flex-1 overflow-auto p-4">
        {isLoading ? (
          <div className="flex h-full items-center justify-center">
            <Loader2 className="h-6 w-6 animate-spin text-blue-600" />
          </div>
        ) : (
          <canvas ref={canvasRef} className="mx-auto shadow-md" />
        )}
      </div>
    </div>
  );
}
