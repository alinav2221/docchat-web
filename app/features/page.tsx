import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FeaturesHero } from "./components/FeaturesHero";
import { FeaturesShowcase } from "./components/FeaturesShowcase";
import { FeaturesCta } from "./components/FeaturesCta";

export const metadata: Metadata = {
  title: "Features — DocChat",
  description:
    "Explore DocChat features: lightning-fast PDF processing, 50+ languages, enterprise security, team collaboration, powerful API, and more.",
  openGraph: {
    title: "Features — DocChat",
    description:
      "Explore DocChat features: lightning-fast PDF processing, 50+ languages, enterprise security, team collaboration, powerful API, and more.",
    type: "website",
  },
};

export default function FeaturesPage() {
  return (
    <>
      <Header />
      <main>
        <FeaturesHero />
        <FeaturesShowcase />
        <FeaturesCta />
      </main>
      <Footer />
    </>
  );
}
