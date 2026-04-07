import { PRICING_PAGE } from "@/lib/constants";

export function PricingHero() {
  return (
    <section className="border-b border-gray-200 bg-white py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          {PRICING_PAGE.hero.heading}
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          {PRICING_PAGE.hero.subtext}
        </p>
      </div>
    </section>
  );
}
