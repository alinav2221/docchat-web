import { Button } from "@/components/ui/button";
import { CTA_FOOTER } from "@/lib/constants";

export function CtaFooter() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center text-white">
        <h2 className="text-4xl font-bold sm:text-5xl">{CTA_FOOTER.heading}</h2>

        <p className="mt-6 text-lg opacity-90">{CTA_FOOTER.subtext}</p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" variant="secondary" className="px-8">
            {CTA_FOOTER.primaryCta}
          </Button>
          <button className="text-white hover:underline font-medium transition-colors">
            {CTA_FOOTER.secondaryCta}
          </button>
        </div>
      </div>
    </section>
  );
}
