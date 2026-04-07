"use client";

import { USE_CASES } from "@/lib/constants";
import * as Icons from "lucide-react";

type IconName = (typeof USE_CASES)[number]["icon"];

function getIcon(iconName: IconName) {
  const iconMap: Record<
    IconName,
    React.ComponentType<{ className: string }>
  > = {
    Briefcase: Icons.Briefcase,
    BarChart3: Icons.BarChart3,
    BookOpen: Icons.BookOpen,
    Users2: Icons.Users2,
    Pen: Icons.Pen,
  };
  const Icon = iconMap[iconName];
  return Icon ? <Icon className="h-8 w-8" /> : null;
}

export function UseCases() {
  return (
    <section className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Built for Every Industry
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            DocChat works for any use case
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {USE_CASES.map((useCase, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-gray-200 bg-white p-6 text-center transition-all hover:border-blue-300 hover:shadow-lg"
            >
              <div className="mb-4 inline-flex items-center justify-center rounded-full bg-blue-100 p-3 text-blue-600">
                {getIcon(useCase.icon as IconName)}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {useCase.title}
              </h3>
              <p className="text-sm text-gray-600">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
