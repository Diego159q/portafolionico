import { PortfolioGrid } from "./PortfolioGrid";

/**
 * Portfolio (Galería) — grid asimétrico de proyectos con filtros.
 * Presenta el portafolio audiovisual bajo el design system Techno-Zen.
 */
export function Portfolio() {
  return (
    <section
      id="portfolio"
      aria-label="Portafolio — Proyectos seleccionados"
      className="relative bg-background px-margin-mobile pb-section-gap md:px-margin-desktop"
    >
      <PortfolioGrid />
    </section>
  );
}
