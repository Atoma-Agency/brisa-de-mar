import Image from "next/image";
import { CONTACT_DETAILS, SOCIAL_LINKS, WHATSAPP_URL } from "@/lib/contact";
import { NAV_LINKS } from "@/lib/navigation";
import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "./icons";

const socialIconClasses =
  "inline-flex h-9 w-9 items-center justify-center rounded-md border border-footer-border text-footer-fg transition-colors duration-300 hover:border-footer-accent hover:text-footer-accent";

const contactRowClasses = "flex items-start gap-3 text-[15px] text-footer-fg";
const contactIconClasses = "mt-0.5 h-[18px] w-[18px] shrink-0 text-footer-accent";

export default function Footer() {
  return (
    <footer className="bg-footer-bg px-6 pt-16 sm:px-8 sm:pt-20 lg:pt-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr] lg:gap-8">
          <div>
            <Image
              src="/images/logo.png"
              alt="Brisa de Mar"
              width={214}
              height={44}
              className="h-8 w-auto"
            />
            <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-footer-muted">
              Centro de belleza y bienestar en Cunit, donde cuidamos de ti con
              tratamientos personalizados en un espacio tranquilo y cercano
              al mar.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Brisa de Mar en Facebook"
                className={socialIconClasses}
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Brisa de Mar en Instagram"
                className={socialIconClasses}
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <nav aria-label="Navegación del pie de página">
            <p className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-footer-accent">
              Navegación
            </p>
            <ul className="mt-5 flex flex-col gap-3 text-[15px] text-footer-fg">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="transition-colors duration-300 hover:text-footer-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-footer-accent">
              Contacto
            </p>
            <ul className="mt-5 flex flex-col gap-4">
              <li className={contactRowClasses}>
                <MapPinIcon className={contactIconClasses} />
                <span>{CONTACT_DETAILS.address}</span>
              </li>
              <li className={contactRowClasses}>
                <WhatsAppIcon className={contactIconClasses} />
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300 hover:text-footer-accent"
                >
                  WhatsApp
                </a>
              </li>
              <li className={contactRowClasses}>
                <PhoneIcon className={contactIconClasses} />
                <a
                  href={CONTACT_DETAILS.phoneHref}
                  className="transition-colors duration-300 hover:text-footer-accent"
                >
                  {CONTACT_DETAILS.phoneDisplay}
                </a>
              </li>
              <li className={contactRowClasses}>
                <MailIcon className={contactIconClasses} />
                <a
                  href={`mailto:${CONTACT_DETAILS.email}`}
                  className="transition-colors duration-300 hover:text-footer-accent"
                >
                  {CONTACT_DETAILS.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-footer-border py-6 text-[13px] text-footer-muted sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Brisa de Mar. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
