import { FEATURES_PAGE } from "@/lib/constants";

export function FeaturesHero() {
  return (
    <section className="border-b border-gray-200 bg-gradient-to-b from-white to-gray-50 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
          {FEATURES_PAGE.hero.heading}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          {FEATURES_PAGE.hero.subtext}
        </p>
      </div>
    </section>
  );
}
