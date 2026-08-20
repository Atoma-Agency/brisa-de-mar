import Image from "next/image";
import type { Treatment } from "@/lib/treatments";

export default function TreatmentCard({ treatment }: { treatment: Treatment }) {
  return (
    <article className="group flex h-full flex-col items-center">
      <div className="relative z-10 h-28 w-28 overflow-hidden rounded-full ring-4 ring-cream transition-transform duration-500 ease-out group-hover:-translate-y-1.5 sm:h-32 sm:w-32">
        <Image
          src={treatment.image}
          alt={treatment.imageAlt}
          fill
          sizes="128px"
          className="object-cover"
        />
      </div>

      <div className="-mt-14 flex h-full w-full flex-1 flex-col items-center rounded-2xl border border-ink/10 bg-white px-7 pb-9 pt-16 text-center transition-colors duration-500 ease-out group-hover:bg-pale-blue sm:-mt-16 sm:px-8 sm:pt-[4.5rem]">
        <h3 className="font-serif text-2xl text-ink">{treatment.title}</h3>

        <p className="mt-3 text-[15px] leading-relaxed text-ink/70">
          {treatment.description}
        </p>

        <span className="mt-6 font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-brand">
          {treatment.label}
        </span>
      </div>
    </article>
  );
}
