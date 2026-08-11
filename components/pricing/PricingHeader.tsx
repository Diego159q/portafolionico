import type { PricingContent } from "./pricing-content";
import { Reveal } from "@/components/ui/motion";

interface PricingHeaderProps {
  content: PricingContent;
}

/**
 * Cabecera editorial de "Formatos y Tarifas".
 * Misma estética que ServicesHeader/ExperienceHeader: eyebrow + display título
 * full-width e intro asimétrica con borde superior estructural.
 */
export function PricingHeader({ content }: PricingHeaderProps) {
  const [first, ...rest] = content.heading.split(" ");

  return (
    <header className="mb-[120px] grid grid-cols-4 gap-gutter md:grid-cols-12">
      <div className="col-span-4 md:col-span-12">
        <Reveal>
          <p className="mb-unit font-label-mono text-label-mono uppercase tracking-[0.2em] text-on-surface-variant">
            {content.eyebrow} // {content.title}
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <h2 className="font-headline text-display-lg-mobile tracking-[-0.03em] text-on-background md:text-display-lg">
            {first}
            <br aria-hidden="true" /> {rest.join(" ")}
          </h2>
        </Reveal>
      </div>

      <div className="col-span-4 mt-margin-mobile flex flex-col justify-end border-t border-outline-variant pt-unit md:col-span-5 md:col-start-8 md:mt-0">
        <Reveal delay={0.24}>
          <p className="font-body text-body-md text-on-surface-variant">
            {content.description}
          </p>
        </Reveal>
      </div>
    </header>
  );
}
