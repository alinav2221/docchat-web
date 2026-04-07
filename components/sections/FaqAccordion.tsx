"use client";

import { FAQ } from "@/lib/constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqAccordion() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to know about DocChat
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {FAQ.map((category, catIdx) => (
            <div key={catIdx}>
              <h3 className="mb-6 text-xl font-semibold text-gray-900">
                {category.category}
              </h3>

              <Accordion className="space-y-3">
                {category.questions.map((item, qIdx) => (
                  <AccordionItem
                    key={qIdx}
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
          ))}
        </div>
      </div>
    </section>
  );
}
