import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FeaturesCta() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-cyan-600 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Ready to transform how you work with PDFs?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
          Join 5000+ companies already using DocChat to save hours every day.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
            Start Free Trial
          </Button>
          <Link href="/pricing">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              View Pricing
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
