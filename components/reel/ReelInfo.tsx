import type { Reel } from "./reel-content";
import { Reveal } from "@/components/ui/motion";
import { Button } from "@/components/ui/Button";

/**
 * Columna de texto del Reel: eyebrow + título + descripción + CTA.
 * 100% data-driven desde `reel`. Reutiliza Reveal y Button.
 */
export function ReelInfo({ reel }: { reel: Reel }) {
  return (
    <div className="flex flex-col items-start">
      <Reveal>
        <p className="mb-unit font-label-mono text-label-mono uppercase tracking-widest text-on-surface-variant">
          {reel.eyebrow}
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <h2 className="mt-2 font-headline text-display-lg-mobile tracking-[-0.03em] text-on-background md:text-display-lg">
          {reel.title}
          <br aria-hidden="true" />
          {reel.year}
        </h2>
      </Reveal>

      <Reveal delay={0.2}>
        <p className="mt-6 max-w-md font-body text-body-md text-on-surface-variant">
          {reel.description}
        </p>
      </Reveal>

      <Reveal delay={0.3}>
        <div className="mt-10">
          <Button href={reel.cta.href} variant="primary" size="lg">
            {reel.cta.label}
          </Button>
        </div>
      </Reveal>
    </div>
  );
}