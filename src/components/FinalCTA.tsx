import ScrollReveal from "./ScrollReveal";
import { WHATSAPP_URL } from "@/lib/contact";

export default function FinalCTA() {
  return (
    <section
      id="contacto"
      aria-labelledby="final-cta-heading"
      className="bg-brand px-6 py-14 sm:px-8 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal
          translateY="20px"
          className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-16"
        >
          <div className="max-w-xl">
            <p className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-cream/80">
              Tu momento
            </p>
            <h2
              id="final-cta-heading"
              className="mt-4 font-serif text-3xl leading-[1.1] text-cream sm:text-4xl lg:text-[2.75rem]"
            >
              Regálate un momento para ti.
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-cream/75 sm:text-base">
              Descubre nuestros tratamientos de belleza y bienestar y
              encuentra el cuidado que mejor se adapta a ti.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 border border-cream px-7 py-3 text-xs font-medium uppercase tracking-[0.18em] text-cream transition-colors duration-300 hover:bg-cream hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
            >
              Reservar cita
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
