import ScrollReveal from "./ScrollReveal";
import TestimonialCard from "./TestimonialCard";
import { TESTIMONIALS } from "@/lib/testimonials";

export default function Testimonials() {
  return (
    <section
      id="opiniones"
      aria-labelledby="testimonials-heading"
      className="bg-cream px-6 py-24 sm:px-8 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal className="mx-auto max-w-xl text-center" translateY="20px">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-brand">
            Opiniones
          </p>
          <h2
            id="testimonials-heading"
            className="mt-4 font-serif text-4xl leading-[1.05] text-ink sm:text-5xl"
          >
            Lo que dicen quienes ya han venido.
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <ScrollReveal
              key={testimonial.id}
              delayMs={(index % 3) * 90}
              translateY="24px"
            >
              <TestimonialCard testimonial={testimonial} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
