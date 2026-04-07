import { PROBLEM_SOLUTION } from "@/lib/constants";
import {
  CheckCircle,
  XCircle,
  Clock,
  AlertTriangle,
  FileX,
  Zap,
  Shield,
  Download,
} from "lucide-react";

export function ProblemSolution() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Problem */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              {PROBLEM_SOLUTION.problem.title}
            </h2>
            <div className="mt-8 space-y-4">
              {PROBLEM_SOLUTION.problem.points.map((point, idx) => (
                <div key={idx} className="flex gap-4">
                  <XCircle className="h-6 w-6 flex-shrink-0 text-red-500 mt-1" />
                  <p className="text-lg text-gray-600">{point}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Solution */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              {PROBLEM_SOLUTION.solution.title}
            </h2>
            <div className="mt-8 space-y-4">
              {PROBLEM_SOLUTION.solution.points.map((point, idx) => (
                <div key={idx} className="flex gap-4">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 text-green-500 mt-1" />
                  <p className="text-lg text-gray-600">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Before/After comparison */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {/* Before */}
          <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
            <div className="mb-4 text-sm font-semibold uppercase tracking-wider text-red-500">
              Without DocChat
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm">
                <Clock className="h-8 w-8 text-red-400" />
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    3+ hours
                  </div>
                  <div className="text-xs text-gray-500">
                    Reading a 200-page report
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm">
                <AlertTriangle className="h-8 w-8 text-red-400" />
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    Key details missed
                  </div>
                  <div className="text-xs text-gray-500">
                    Critical info buried on page 147
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm">
                <FileX className="h-8 w-8 text-red-400" />
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    Manual copy-paste
                  </div>
                  <div className="text-xs text-gray-500">
                    Extracting data into spreadsheets
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* After */}
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
            <div className="mb-4 text-sm font-semibold uppercase tracking-wider text-green-600">
              With DocChat
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm">
                <Zap className="h-8 w-8 text-green-500" />
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    Under 30 seconds
                  </div>
                  <div className="text-xs text-gray-500">
                    Ask a question, get an instant answer
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm">
                <Shield className="h-8 w-8 text-green-500" />
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    100% accurate citations
                  </div>
                  <div className="text-xs text-gray-500">
                    Every answer linked to source pages
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm">
                <Download className="h-8 w-8 text-green-500" />
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    One-click export
                  </div>
                  <div className="text-xs text-gray-500">
                    Results in PDF, Excel, or JSON
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
