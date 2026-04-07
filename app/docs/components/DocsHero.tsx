import { DOCS_PAGE } from "@/lib/constants";
import { Search } from "lucide-react";

export function DocsHero() {
  return (
    <section className="border-b border-gray-200 bg-gradient-to-b from-white to-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          {DOCS_PAGE.hero.heading}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
          {DOCS_PAGE.hero.subtext}
        </p>
        <div className="mx-auto mt-8 max-w-md">
          <div className="flex items-center rounded-xl border border-gray-300 bg-white px-4 py-3 shadow-sm">
            <Search className="mr-3 h-5 w-5 text-gray-400" />
            <span className="text-sm text-gray-400">
              Search documentation...
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
