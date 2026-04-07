import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { SocialProofBar } from "@/components/sections/SocialProofBar";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { FeaturesGrid } from "@/components/sections/FeaturesGrid";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { UseCases } from "@/components/sections/UseCases";
import { Testimonials } from "@/components/sections/Testimonials";
import { PricingPreview } from "@/components/sections/PricingPreview";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { CtaFooter } from "@/components/sections/CtaFooter";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SocialProofBar />
        <ProblemSolution />
        <FeaturesGrid />
        <HowItWorks />
        <UseCases />
        <Testimonials />
        <PricingPreview />
        <FaqAccordion />
        <CtaFooter />
      </main>
      <Footer />
    </>
  );
}
