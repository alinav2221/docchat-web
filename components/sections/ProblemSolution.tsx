import { PROBLEM_SOLUTION } from "@/lib/constants";
import { CheckCircle, XCircle } from "lucide-react";

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

        {/* Image placeholder */}
        <div className="mt-16 rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300 h-96" />
      </div>
    </section>
  );
}
