import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BlogHero } from "./components/BlogHero";
import { BlogGrid } from "./components/BlogGrid";

export const metadata: Metadata = {
  title: "Blog — DocChat",
  description:
    "Insights on AI document processing, productivity tips, and DocChat product updates.",
  openGraph: {
    title: "Blog — DocChat",
    description:
      "Insights on AI document processing, productivity tips, and DocChat product updates.",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        <BlogHero />
        <BlogGrid />
      </main>
      <Footer />
    </>
  );
}
