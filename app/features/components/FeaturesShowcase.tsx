"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";
import * as Icons from "lucide-react";
import { FEATURES_DETAILED } from "@/lib/constants";

type IconName = (typeof FEATURES_DETAILED)[number]["icon"];

const iconMap: Record<IconName, React.ComponentType<{ className: string }>> = {
  Zap: Icons.Zap,
  Search: Icons.Search,
  Globe: Icons.Globe,
  Lock: Icons.Lock,
  Users: Icons.Users,
  Download: Icons.Download,
  Bot: Icons.Bot,
  Plug: Icons.Plug,
  Settings: Icons.Settings,
};

export function FeaturesShowcase() {
  return (
    <section className="bg-white py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {FEATURES_DETAILED.map((feature, idx) => {
            const Icon = iconMap[feature.icon];
            const isReversed = idx % 2 === 1;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col items-center gap-12 lg:flex-row ${
                  isReversed ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Text Content */}
                <div className="flex-1">
                  <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-blue-100 p-3 text-blue-600">
                    {Icon && <Icon className="h-6 w-6" />}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    {feature.title}
                  </h2>
                  <p className="mt-4 text-lg text-gray-600">
                    {feature.longDescription}
                  </p>
                  <ul className="mt-8 space-y-3">
                    {feature.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start">
                        <Check className="mr-3 h-5 w-5 flex-shrink-0 text-green-500" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual Placeholder */}
                <div className="flex flex-1 items-center justify-center">
                  <div className="flex h-64 w-full max-w-md items-center justify-center rounded-2xl border border-gray-200 bg-gradient-to-br from-blue-50 to-cyan-50">
                    {Icon && <Icon className="h-16 w-16 text-blue-300" />}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
