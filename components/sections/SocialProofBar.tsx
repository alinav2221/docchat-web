import { SOCIAL_PROOF } from "@/lib/constants";

export function SocialProofBar() {
  return (
    <section className="border-y border-gray-200 bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-center text-sm font-medium text-gray-600 mb-6">
          {SOCIAL_PROOF.text}
        </p>

        {/* Logo placeholder grid */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {SOCIAL_PROOF.logos.map((logo) => (
            <div
              key={logo.name}
              className="h-10 w-24 rounded-lg bg-gray-200 flex items-center justify-center text-xs font-medium text-gray-500"
              title={logo.name}
            >
              {logo.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
