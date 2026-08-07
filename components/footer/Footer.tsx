import Link from "next/link";
import { FOOTER_CONTENT } from "./footer-content";
import { Reveal } from "@/components/ui/motion";

/**
 * Footer final (Techno-Zen). Server component.
 * Marca + navegación + redes + copyright + links legales. Todo data-driven.
 */
export function Footer() {
  return (
    <footer className="relative border-t border-outline-variant px-margin-mobile pb-margin-desktop pt-section-gap md:px-margin-desktop">
      <Reveal>
        {/* Marca */}
        <div className="grid grid-cols-4 gap-gutter pb-margin-desktop md:grid-cols-12">
          <div className="col-span-4 md:col-span-6">
            <p className="font-headline text-display-lg-mobile tracking-[-0.03em] text-on-background md:text-display-lg">
              {FOOTER_CONTENT.brand}
            </p>
          </div>
          <div className="col-span-4 md:col-span-5 md:col-start-8">
            <p className="font-body text-body-md text-on-surface-variant">
              {FOOTER_CONTENT.tagline}
            </p>
          </div>
        </div>

        {/* Navegación + redes */}
        <div className="grid grid-cols-4 gap-gutter border-t border-outline-variant pt-margin-mobile md:grid-cols-12">
          <nav aria-label="Navegación del pie" className="col-span-4 md:col-span-4">
            <ul className="flex flex-col gap-unit">
              {FOOTER_CONTENT.nav.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="font-label-mono text-label-mono uppercase tracking-[0.2em] text-on-surface-variant transition-colors hover:text-on-tertiary-container"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <ul
            aria-label="Redes sociales"
            className="col-span-4 flex flex-col gap-unit md:col-span-4 md:col-start-9"
          >
            {FOOTER_CONTENT.socials.map((social) => (
              <li key={social.id}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-label-mono text-label-mono uppercase tracking-[0.2em] text-on-surface-variant transition-colors hover:text-on-tertiary-container"
                >
                  {social.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal + copyright */}
        <div className="mt-margin-desktop flex flex-col gap-unit border-t border-outline-variant pt-margin-mobile md:flex-row md:items-center md:justify-between">
          <p className="font-label-mono text-label-mono uppercase tracking-[0.2em] text-on-surface-variant">
            {FOOTER_CONTENT.copyright}
          </p>
          <ul className="flex gap-gutter">
            {FOOTER_CONTENT.legal.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="font-label-mono text-label-mono uppercase tracking-[0.2em] text-on-surface-variant transition-colors hover:text-on-tertiary-container"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </footer>
  );
}