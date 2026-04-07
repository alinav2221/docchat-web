import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PricingHero } from "./components/PricingHero";
import { PricingCards } from "./components/PricingCards";
import { PricingFaq } from "./components/PricingFaq";

export const metadata: Metadata = {
  title: "Pricing — DocChat",
  description:
    "Transparent pricing for DocChat. Free plan included. Pro and Enterprise options for growing teams. No hidden fees. Cancel anytime.",
  openGraph: {
    title: "Pricing — DocChat",
    description:
      "Transparent pricing for DocChat. Free plan included. Pro and Enterprise options for growing teams. No hidden fees. Cancel anytime.",
    type: "website",
  },
};

export default function PricingPage() {
  return (
    <>
      <Header />
      <main>
        <PricingHero />
        <PricingCards />
        <PricingFaq />
      </main>
      <Footer />
    </>
  );
}
