import { Button } from "@/components/ui/button";
import { HERO } from "@/lib/constants";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-white px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-blue-100 opacity-50 blur-3xl" />
        <div className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-blue-100 opacity-30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5">
          <span className="h-2 w-2 rounded-full bg-blue-600" />
          <span className="text-sm font-medium text-blue-900">
            Trusted by 5000+ companies
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
          {HERO.headline}
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 sm:text-xl">
          {HERO.subheadline}
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="gap-2 px-8">
            {HERO.primaryCta}
            <ArrowRight className="h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline">
            {HERO.secondaryCta}
          </Button>
        </div>

        {/* Demo placeholder */}
        <div className="mt-16 rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300 p-1 shadow-2xl">
          <Image
            src="/images/demo.svg"
            alt="DocChat Demo"
            width={800}
            height={500}
            className="rounded-xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
