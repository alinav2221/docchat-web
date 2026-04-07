import { SOCIAL_PROOF } from "@/lib/constants";
import Image from "next/image";

export function SocialProofBar() {
  return (
    <section className="border-y border-gray-200 bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-center text-sm font-medium text-gray-600 mb-6">
          {SOCIAL_PROOF.text}
        </p>

        {/* Logo grid */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {SOCIAL_PROOF.logos.map((logo) => (
            <div key={logo.name} className="h-10 w-24 relative">
              <Image
                src={logo.src}
                alt={logo.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
