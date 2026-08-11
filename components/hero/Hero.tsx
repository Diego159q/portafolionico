import { HeroContent } from "./HeroContent";
import { HeroVisual } from "./HeroVisual";
import { HeroDecorators } from "./HeroDecorators";
import { HERO_CONTENT } from "./hero-content";

/**
 * Hero Section — primera impresión del portafolio.
 * Layout: grid 4 cols (mobile) / 12 cols (desktop), 6/6 por columna.
 * Fidelidad al design system Techno-Zen (Stitch).
 */
export function Hero() {
  return (
    <section
      id="hero"
      aria-label={HERO_CONTENT.ariaLabel}
      className="relative grid grid-cols-4 items-center gap-gutter overflow-hidden bg-background px-margin-mobile pt-[80px] pb-section-gap md:grid-cols-12 md:px-margin-desktop md:pt-[80px] md:pb-0 md:min-h-[100svh]"
    >
      <HeroDecorators />

      <div className="col-span-4 flex flex-col justify-center md:col-span-6">
        <HeroContent />
      </div>

      <div className="relative col-span-4 h-[420px] md:col-span-6 md:h-[calc(100svh-80px)]">
        <HeroVisual />
      </div>
    </section>
  );
}
