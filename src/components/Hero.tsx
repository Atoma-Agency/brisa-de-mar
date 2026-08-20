import type { CSSProperties } from "react";
import { WHATSAPP_URL } from "@/lib/contact";

function reveal(y: string, delayMs: number): CSSProperties {
  return { "--reveal-y": y, "--reveal-delay": `${delayMs}ms` } as CSSProperties;
}

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="flex flex-col items-center text-center"
    >
      <p
        className="reveal font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-white/85 sm:text-xs"
        style={reveal("16px", 150)}
      >
        Centro de belleza y bienestar · Cunit
      </p>

      <h1
        id="hero-heading"
        className="reveal mt-5 font-serif text-[2.75rem] leading-[0.98] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[6rem]"
        style={reveal("24px", 280)}
      >
        Belleza
        <br />
        con calma.
      </h1>

      <h2
        className="reveal mt-6 max-w-md font-sans text-base font-light leading-relaxed text-white/90 sm:text-lg"
        style={reveal("18px", 430)}
      >
        Tu espacio de bienestar, frente al Mediterráneo.
      </h2>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="reveal group mt-10 inline-flex items-center gap-2 border border-white px-7 py-3 text-xs font-medium uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-white hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        style={reveal("16px", 550)}
      >
        Reservar cita
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </a>
    </section>
  );
}
