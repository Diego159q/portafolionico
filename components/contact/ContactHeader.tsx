import { CONTACT_CONTENT } from "./contact-content";
import { Reveal } from "@/components/ui/motion";

/**
 * Cabecera editorial de "Contacto".
 * Misma estética que el resto de headers del sistema.
 */
export function ContactHeader() {
  const [first, ...rest] = CONTACT_CONTENT.title.split(" ");

  return (
    <header className="mb-[120px] grid grid-cols-4 gap-gutter md:grid-cols-12">
      <div className="col-span-4 md:col-span-12">
        <Reveal>
          <p className="mb-unit font-label-mono text-label-mono uppercase tracking-[0.2em] text-on-surface-variant">
            {CONTACT_CONTENT.eyebrow}
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <h2
            id="contact-title"
            className="font-headline text-display-lg-mobile tracking-[-0.03em] text-on-background md:text-display-lg"
          >
            {first}
            <br aria-hidden="true" /> {rest.join(" ")}
          </h2>
        </Reveal>
      </div>
    </header>
  );
}