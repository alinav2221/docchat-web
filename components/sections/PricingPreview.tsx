import { Button } from "@/components/ui/button";
import { PRICING_TIERS } from "@/lib/constants";
import { Check } from "lucide-react";

export function PricingPreview() {
  return (
    <section className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            No hidden fees. Cancel anytime.
          </p>
        </div>

        {/* Pricing Tiers */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PRICING_TIERS.map((tier, idx) => (
            <div
              key={idx}
              className={`rounded-xl border p-8 transition-all ${
                tier.highlighted
                  ? "border-blue-300 bg-white shadow-xl ring-2 ring-blue-100"
                  : "border-gray-200 bg-white"
              }`}
            >
              {/* Most Popular Badge */}
              {tier.highlighted && (
                <div className="mb-4 inline-block rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                  MOST POPULAR
                </div>
              )}

              {/* Tier Name */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {tier.name}
              </h3>
              <p className="text-sm text-gray-600 mb-6">{tier.description}</p>

              {/* Price */}
              <div className="mb-6">
                {tier.price !== null ? (
                  <>
                    <span className="text-4xl font-bold text-gray-900">
                      ${tier.price}
                    </span>
                    <span className="text-gray-600">/month</span>
                  </>
                ) : (
                  <span className="text-2xl font-bold text-gray-900">
                    Custom pricing
                  </span>
                )}
              </div>

              {/* CTA Button */}
              <Button
                className="w-full mb-8"
                variant={tier.highlighted ? "default" : "outline"}
              >
                {tier.cta}
              </Button>

              {/* Features */}
              <div className="space-y-3">
                {tier.features.map((feature, featureIdx) => (
                  <div key={featureIdx} className="flex items-start gap-3">
                    <Check className="h-5 w-5 flex-shrink-0 text-green-500 mt-0.5" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Link to full pricing */}
        <div className="text-center mt-12">
          <a
            href="/pricing"
            className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            See full pricing →
          </a>
        </div>
      </div>
    </section>
  );
}
