import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import {
  SPACE_PRIMARY_IMAGE,
  SPACE_SECONDARY_IMAGE,
  SPACE_GALLERY,
  SPACE_FACILITIES,
} from "@/lib/space";

export default function OurSpace() {
  return (
    <section
      id="el-centro"
      aria-labelledby="space-heading"
      className="bg-pale-blue px-6 py-24 sm:px-8 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal className="max-w-xl" translateY="20px">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-brand">
            El Centro
          </p>
          <h2
            id="space-heading"
            className="mt-4 font-serif text-4xl leading-[1.05] text-ink sm:text-5xl"
          >
            Un lugar para bajar el ritmo.
          </h2>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-ink/70 sm:text-base">
            En Brisa de Mar hemos creado un espacio íntimo y tranquilo donde
            cada tratamiento puede disfrutarse con calma, privacidad y la
            atención que mereces.
          </p>
          <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-ink/70 sm:text-base">
            Contamos con dos cabinas independientes, adaptadas a cada tipo de
            tratamiento. Una de ellas dispone además de ducha, para que
            puedas continuar cómodamente con tus planes después de la
            visita.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:mt-20 sm:grid-cols-2 sm:gap-6 lg:mt-24 lg:grid-cols-[1.6fr_1fr] lg:items-start lg:gap-8">
          <ScrollReveal translateY="24px">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={SPACE_PRIMARY_IMAGE.src}
                alt={SPACE_PRIMARY_IMAGE.alt}
                fill
                sizes="(min-width: 1024px) 60vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal translateY="24px" delayMs={120} className="lg:mt-10">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={SPACE_SECONDARY_IMAGE.src}
                alt={SPACE_SECONDARY_IMAGE.alt}
                fill
                sizes="(min-width: 1024px) 35vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:mt-20 sm:grid-cols-2 sm:gap-12 lg:max-w-3xl">
          {SPACE_FACILITIES.map((facility, index) => (
            <ScrollReveal
              key={facility.title}
              delayMs={index * 100}
              translateY="18px"
              className={
                index === 1
                  ? "border-t border-ink/10 pt-8 sm:border-t-0 sm:border-l sm:pl-12 sm:pt-0"
                  : ""
              }
            >
              <h3 className="font-sans text-sm font-semibold uppercase tracking-[0.08em] text-ink">
                {facility.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink/70">
                {facility.description}
              </p>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:mt-20 sm:grid-cols-3 lg:mt-24">
          {SPACE_GALLERY.map((image, index) => (
            <ScrollReveal key={image.id} delayMs={index * 90} translateY="20px">
              <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  loading="lazy"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
