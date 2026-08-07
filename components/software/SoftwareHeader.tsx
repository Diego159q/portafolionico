import { SOFTWARE_CONTENT } from "./software-content";
import { Reveal } from "@/components/ui/motion";

/**
 * Cabecera editorial de "Software y Herramientas".
 * Misma estética que ServicesHeader: eyebrow + display título full-width
 * e intro asimétrica (col 5/12, col-start-8) con borde superior estructural.
 * 100% data-driven.
 */
export function SoftwareHeader() {
  const [first, ...rest] = SOFTWARE_CONTENT.title.split(" ");

  return (
    <header className="mb-[120px] grid grid-cols-4 gap-gutter md:grid-cols-12">
      <div className="col-span-4 md:col-span-12">
        <Reveal>
          <p className="mb-unit font-label-mono text-label-mono uppercase tracking-[0.2em] text-on-surface-variant">
            {SOFTWARE_CONTENT.eyebrow}
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <h2 id="software-title" className="font-headline text-display-lg-mobile tracking-[-0.03em] text-on-background md:text-display-lg">
            {first}
            <br aria-hidden="true" /> {rest.join(" ")}
          </h2>
        </Reveal>
      </div>

      <div className="col-span-4 mt-margin-mobile flex flex-col justify-end border-t border-outline-variant pt-unit md:col-span-5 md:col-start-8 md:mt-0">
        <Reveal delay={0.24}>
          <p className="font-body text-body-md text-on-surface-variant">
            {SOFTWARE_CONTENT.description}
          </p>
        </Reveal>
      </div>
    </header>
  );
}