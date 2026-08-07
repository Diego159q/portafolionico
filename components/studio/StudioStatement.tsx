import { STUDIO_CONTENT } from "./studio-content";
import { Reveal } from "@/components/ui/motion";

/**
 * Intro Statement: eyebrow (Professional History) + headline.
 * Columna de 8/12 con offset 1 (col-start-2) en desktop, full en mobile.
 */
export function StudioStatement() {
  return (
    <div className="md:col-span-8 md:col-start-2">
      <Reveal>
        <p className="border-l border-on-tertiary-container pl-4 text-label-mono text-on-surface-variant">
          {STUDIO_CONTENT.eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.15}>
        <h2 className="mt-6 font-headline text-headline-xl leading-[1.1] tracking-[-0.02em] text-on-background md:mt-8">
          {STUDIO_CONTENT.statement}
        </h2>
      </Reveal>
    </div>
  );
}