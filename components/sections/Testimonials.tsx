import { TESTIMONIALS } from "@/lib/constants";
import { Star } from "lucide-react";

export function Testimonials() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Loved by Users Worldwide
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            See what our customers have to say
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-lg"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array(testimonial.rating)
                  .fill(null)
                  .map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
              </div>

              {/* Quote */}
              <p className="text-gray-900 font-medium mb-6">
                &quot;{testimonial.quote}&quot;
              </p>

              {/* Author */}
              <div>
                <p className="font-semibold text-gray-900">
                  {testimonial.author}
                </p>
                <p className="text-sm text-gray-600">
                  {testimonial.role} at {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
