"use client";

import { useState } from "react";
import type { CSSProperties } from "react";
import Image from "next/image";
import { SOCIAL_LINKS, WHATSAPP_URL } from "@/lib/contact";
import { NAV_LINKS } from "@/lib/navigation";
import { FacebookIcon, InstagramIcon } from "./icons";

const ctaClasses =
  "inline-flex items-center gap-2 border border-white/70 px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-white hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

const socialIconClasses = "h-[17px] w-[17px] text-white/85 transition-colors duration-300 hover:text-white";

function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-5 ${className}`}>
      <a
        href={SOCIAL_LINKS.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Brisa de Mar en Facebook"
      >
        <FacebookIcon className={socialIconClasses} />
      </a>
      <a
        href={SOCIAL_LINKS.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Brisa de Mar en Instagram"
      >
        <InstagramIcon className={socialIconClasses} />
      </a>
    </div>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="reveal absolute inset-x-0 top-0 z-20 px-5 py-6 sm:px-8 md:px-12 md:py-8 lg:px-16"
      style={{ "--reveal-y": "-8px", "--reveal-delay": "0ms" } as CSSProperties}
    >
      {/* 1fr / auto / 1fr keeps the nav truly viewport-centered no matter
          how the logo and the icons+CTA group differ in width. */}
      <div className="flex items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr]">
        <a href="#top" className="inline-flex items-center">
          <Image
            src="/images/logo.png"
            alt="Brisa de Mar"
            width={214}
            height={44}
            priority
            className="h-8 w-auto sm:h-9"
          />
        </a>

        <nav aria-label="Navegación principal" className="hidden md:block">
          <ul className="flex items-center gap-8 font-sans text-[13px] uppercase tracking-[0.14em] text-white">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition-colors duration-300 hover:text-white/70"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-6 justify-self-end md:flex">
          <SocialLinks />
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={ctaClasses}>
            Reservar cita
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          className="flex h-8 w-8 flex-col items-start justify-center gap-[5px] md:hidden"
        >
          <span className="sr-only">
            {menuOpen ? "Cerrar menú" : "Abrir menú"}
          </span>
          <span
            className={`h-px w-6 bg-white transition-transform duration-300 ${
              menuOpen ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-white transition-transform duration-300 ${
              menuOpen ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Navegación móvil"
        className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out md:hidden ${
          menuOpen ? "mt-6 max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-5 border-t border-white/20 pt-6 font-sans text-sm uppercase tracking-[0.14em] text-white">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="transition-colors duration-300 hover:text-white/70"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-1">
            <SocialLinks />
          </li>
        </ul>
      </nav>
    </header>
  );
}
