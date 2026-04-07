"use client";

import { HOW_IT_WORKS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import * as Icons from "lucide-react";

type IconName = (typeof HOW_IT_WORKS)[number]["icon"];

function getIcon(iconName: IconName) {
  const iconMap: Record<
    IconName,
    React.ComponentType<{ className: string }>
  > = {
    Upload: Icons.Upload,
    MessageCircle: Icons.MessageCircle,
    CheckCircle: Icons.CheckCircle,
  };
  const Icon = iconMap[iconName];
  return Icon ? <Icon className="h-12 w-12" /> : null;
}

export function HowItWorks() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Get started in three simple steps
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid gap-8 sm:grid-cols-3 mb-12">
          {HOW_IT_WORKS.map((item, idx) => (
            <div key={idx} className="text-center">
              <div className="mb-6 inline-flex items-center justify-center rounded-full bg-blue-100 p-4 text-blue-600">
                {getIcon(item.icon as IconName)}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Step {item.step}: {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg">Get Started Free</Button>
        </div>
      </div>
    </section>
  );
}
