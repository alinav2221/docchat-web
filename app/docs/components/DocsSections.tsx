import { Rocket, MessageCircle, Code, Users, ChevronRight } from "lucide-react";
import { DOCS_PAGE } from "@/lib/constants";
import type { ComponentType } from "react";

const iconMap: Record<string, ComponentType<{ className: string }>> = {
  Rocket,
  MessageCircle,
  Code,
  Users,
};

export function DocsSections() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {DOCS_PAGE.sections.map((section) => {
            const Icon = iconMap[section.icon];
            return (
              <div
                key={section.title}
                className="rounded-xl border border-gray-200 p-6 transition-all hover:shadow-md"
              >
                {/* Section header */}
                <div className="mb-6 flex items-center gap-3">
                  <div className="rounded-lg bg-blue-100 p-2.5">
                    {Icon && <Icon className="h-5 w-5 text-blue-600" />}
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-gray-900">
                      {section.title}
                    </h2>
                    <p className="text-sm text-gray-500">
                      {section.description}
                    </p>
                  </div>
                </div>

                {/* Articles list */}
                <div className="space-y-1">
                  {section.articles.map((article) => (
                    <div
                      key={article.title}
                      className="group flex cursor-pointer items-center justify-between rounded-lg px-3 py-2.5 transition-colors hover:bg-gray-50"
                    >
                      <div>
                        <h3 className="text-sm font-medium text-gray-900 group-hover:text-blue-600">
                          {article.title}
                        </h3>
                        <p className="text-xs text-gray-500">
                          {article.description}
                        </p>
                      </div>
                      <ChevronRight className="h-4 w-4 flex-shrink-0 text-gray-400 group-hover:text-blue-600" />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
