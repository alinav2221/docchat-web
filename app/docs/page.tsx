import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { DocsHero } from "./components/DocsHero";
import { DocsSections } from "./components/DocsSections";

export const metadata: Metadata = {
  title: "Documentation — DocChat",
  description:
    "DocChat documentation: getting started guides, API reference, team features, and best practices for AI-powered PDF chat.",
  openGraph: {
    title: "Documentation — DocChat",
    description:
      "DocChat documentation: getting started guides, API reference, team features, and best practices.",
    type: "website",
  },
};

export default function DocsPage() {
  return (
    <>
      <Header />
      <main>
        <DocsHero />
        <DocsSections />
      </main>
      <Footer />
    </>
  );
}
