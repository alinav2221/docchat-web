"use client";

import { FEATURES } from "@/lib/constants";
import * as Icons from "lucide-react";

type IconName = (typeof FEATURES)[number]["icon"];

function getIcon(iconName: IconName) {
  const iconMap: Record<
    IconName,
    React.ComponentType<{ className: string }>
  > = {
    Zap: Icons.Zap,
    Globe: Icons.Globe,
    Search: Icons.Search,
    Download: Icons.Download,
    Lock: Icons.Lock,
    Bot: Icons.Bot,
    Users: Icons.Users,
    Plug: Icons.Plug,
    Settings: Icons.Settings,
  };
  const Icon = iconMap[iconName];
  return Icon ? <Icon className="h-6 w-6" /> : null;
}

export function FeaturesGrid() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Powerful Features
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to work smarter with PDFs
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-blue-300 hover:shadow-lg"
            >
              <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-blue-100 p-3 text-blue-600">
                {getIcon(feature.icon as IconName)}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
