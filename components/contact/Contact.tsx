import type { ReactNode } from "react";
import { ContactHeader } from "./ContactHeader";
import { ContactForm } from "./ContactForm";
import { CONTACT_CONTENT } from "./contact-content";
import { Reveal } from "@/components/ui/motion";

interface ContactColumnProps {
  children: ReactNode;
}

/** Columna del grid de contacto. */
function ContactColumn({ children }: ContactColumnProps) {
  return (
    <div className="col-span-4 md:col-span-5">{children}</div>
  );
}

/**
 * Sección "Contacto" (Techno-Zen). Server component.
 * Composicion: cabecera + grid de información (email/sociales) y formulario.
 */
export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative px-margin-mobile pb-section-gap md:px-margin-desktop"
    >
      <ContactHeader />

      <div className="grid grid-cols-4 gap-gutter md:grid-cols-12">
        <ContactColumn>
          <Reveal>
            <p className="font-body text-body-md text-on-surface-variant">
              {CONTACT_CONTENT.description}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <a
              href={`mailto:${CONTACT_CONTENT.email}`}
              className="mt-margin-mobile inline-block font-headline text-headline-sm text-on-background outline-none transition-colors hover:text-on-tertiary-container focus-visible:text-on-tertiary-container"
            >
              {CONTACT_CONTENT.email}
            </a>
          </Reveal>

          <Reveal delay={0.2}>
            <ul className="mt-margin-mobile flex flex-col gap-unit">
              {CONTACT_CONTENT.socials.map((social) => (
                <li key={social.id}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-label-mono text-label-mono uppercase tracking-[0.2em] text-on-surface-variant outline-none transition-colors hover:text-on-tertiary-container focus-visible:text-on-tertiary-container"
                  >
                    {social.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </ContactColumn>

        <div className="col-span-4 md:col-span-6 md:col-start-7">
          <Reveal>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}