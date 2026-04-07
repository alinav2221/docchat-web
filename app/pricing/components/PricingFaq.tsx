"use client";

import { FAQ } from "@/lib/constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function PricingFaq() {
  const pricingFaqCategory = FAQ.find(
    (cat) => cat.category === "Pricing & Billing",
  );

  if (!pricingFaqCategory) {
    return null;
  }

  return (
    <section className="border-t border-gray-200 bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Questions about pricing, billing, and plans
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion className="space-y-3">
          {pricingFaqCategory.questions.map((item, idx) => (
            <AccordionItem
              key={idx}
              className="border border-gray-200 rounded-lg px-4"
            >
              <AccordionTrigger className="py-4 hover:no-underline hover:text-blue-600">
                <span className="text-left font-medium text-gray-900">
                  {item.q}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-4">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
