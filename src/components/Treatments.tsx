import ScrollReveal from "./ScrollReveal";
import TreatmentCard from "./TreatmentCard";
import { TREATMENTS } from "@/lib/treatments";

export default function Treatments() {
  return (
    <section
      id="tratamientos"
      aria-labelledby="treatments-heading"
      className="bg-cream px-6 py-24 sm:px-8 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal className="mx-auto max-w-xl text-center" translateY="20px">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-brand">
            Tratamientos
          </p>
          <h2
            id="treatments-heading"
            className="mt-4 font-serif text-4xl leading-[1.05] text-ink sm:text-5xl"
          >
            Un momento para cuidarte.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-ink/70 sm:text-base">
            Tratamientos de belleza y bienestar pensados para cuidar tu piel,
            realzar tu belleza y regalarte algo que a menudo dejamos para
            después: un momento solo para ti.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-x-8 gap-y-20 sm:mt-20 sm:grid-cols-2 sm:gap-y-24 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-14">
          {TREATMENTS.map((treatment, index) => (
            <ScrollReveal
              key={treatment.id}
              delayMs={(index % 3) * 90}
              className={index >= 3 ? "lg:mt-6" : ""}
            >
              <TreatmentCard treatment={treatment} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
