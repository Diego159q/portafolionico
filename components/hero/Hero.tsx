import { HeroContent } from "./HeroContent";
import { HeroVisual } from "./HeroVisual";
import { HeroDecorators } from "./HeroDecorators";
import { HERO_CONTENT } from "./hero-content";

/**
 * Hero Section — primera impresión del portafolio.
 * Layout: grid 4 cols (mobile) / 12 cols (desktop), 6/6 por columna.
 * Ambient Glow Cinematográfico + Badges de Métricas Flotantes.
 */
export function Hero() {
  return (
    <section
      id="hero"
      aria-label={HERO_CONTENT.ariaLabel}
      className="relative grid grid-cols-4 items-center gap-gutter overflow-hidden bg-background px-margin-mobile pt-[80px] pb-section-gap md:grid-cols-12 md:px-margin-desktop md:pt-[80px] md:pb-0 md:min-h-[100svh]"
    >
      {/* Ambient Spotlights Cinematográficos */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 -left-20 z-0 h-[450px] w-[450px] rounded-full bg-on-tertiary-container/10 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 right-0 z-0 h-[500px] w-[500px] rounded-full bg-on-tertiary-container/15 blur-[150px]"
      />

      <HeroDecorators />

      <div className="relative z-10 col-span-4 flex flex-col justify-center md:col-span-6">
        <HeroContent />
      </div>

      <div className="relative z-10 col-span-4 h-[450px] md:col-span-6 md:h-[calc(100svh-80px)]">
        <HeroVisual />
      </div>
    </section>
  );
}
