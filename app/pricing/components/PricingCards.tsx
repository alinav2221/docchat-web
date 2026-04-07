"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PRICING_TIERS } from "@/lib/constants";
import { getAnnualPrice } from "@/lib/utils";

export function PricingCards() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="bg-white py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Billing Toggle */}
        <div className="mb-12 flex justify-center">
          <div className="inline-flex items-center rounded-full border border-gray-200 bg-gray-100 p-1">
            <button
              onClick={() => setIsAnnual(false)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                !isAnnual
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                isAnnual
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Annual
            </button>
            {isAnnual && (
              <span className="ml-2 rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-700">
                Save 20%
              </span>
            )}
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PRICING_TIERS.map((tier) => {
            const displayPrice =
              isAnnual && tier.price !== null
                ? getAnnualPrice(tier.price)
                : tier.price;

            const showStrikethrough =
              isAnnual && tier.price !== null && tier.price > 0;

            return (
              <div
                key={tier.name}
                className={`rounded-xl p-8 transition-all ${
                  tier.highlighted
                    ? "ring-2 ring-blue-600 shadow-xl bg-white border-0"
                    : "border border-gray-200 bg-white"
                }`}
              >
                {/* Most Popular Badge */}
                {tier.highlighted && (
                  <div className="mb-4 inline-block rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                    MOST POPULAR
                  </div>
                )}

                {/* Tier Name & Description */}
                <h3 className="text-lg font-bold text-gray-900">{tier.name}</h3>
                <p className="mt-2 text-sm text-gray-600">{tier.description}</p>

                {/* Pricing */}
                <div className="mt-6">
                  {tier.price === null ? (
                    <p className="text-3xl font-bold text-gray-900">
                      Custom pricing
                    </p>
                  ) : (
                    <div>
                      <div className="flex items-baseline">
                        <span className="text-5xl font-bold text-gray-900">
                          ${displayPrice}
                        </span>
                        <span className="ml-2 text-gray-600">/month</span>
                      </div>
                      {showStrikethrough && (
                        <p className="mt-1 text-sm text-gray-500">
                          <span className="line-through">
                            ${tier.price}/month
                          </span>{" "}
                          when billed annually
                        </p>
                      )}
                    </div>
                  )}
                </div>

                {/* CTA Button */}
                <Button
                  className="mt-8 w-full"
                  variant={tier.highlighted ? "default" : "outline"}
                >
                  {tier.cta}
                </Button>

                {/* Features List */}
                <div className="mt-8 space-y-4">
                  {tier.features.map((feature) => (
                    <div key={feature} className="flex items-start">
                      <Check className="mr-3 h-5 w-5 flex-shrink-0 text-green-500" />
                      <span className="text-sm text-gray-700">{feature}</span>
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
