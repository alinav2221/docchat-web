import Link from "next/link";
import { FileText, Plus } from "lucide-react";

interface DocumentInfoProps {
  filename: string;
  pageCount: number | null;
}

export function DocumentInfo({ filename, pageCount }: DocumentInfoProps) {
  return (
    <div className="flex items-center justify-between border-b border-gray-200 bg-white px-4 py-3">
      <div className="flex items-center gap-2 text-sm">
        <FileText className="h-4 w-4 text-blue-600" />
        <span className="font-medium text-gray-900">{filename}</span>
        {pageCount !== null && (
          <span className="text-gray-400">
            · {pageCount} {pageCount === 1 ? "page" : "pages"}
          </span>
        )}
      </div>
      <Link
        href="/chat"
        className="flex items-center gap-1 rounded-lg px-3 py-1.5 text-sm text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
      >
        <Plus className="h-4 w-4" />
        New
      </Link>
    </div>
  );
}
