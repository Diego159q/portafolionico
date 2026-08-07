import { StudioStatement } from "./StudioStatement";
import { StudioQuote } from "./StudioQuote";
import { StudioVisual } from "./StudioVisual";
import { StudioDisciplines } from "./StudioDisciplines";

/**
 * Studio (Sobre mí) — layout asimétrico siguiendo el design system Techno-Zen.
 * Replica la estructura del screen "Sobre mí - Estilo Editorial Japones" (Stitch):
 *   1. Intro Statement (eyebrow + headline)
 *   2. Imagen asimétrica + cita flotante
 *   3. Capabilities Grid (Specialties / Skills / Values)
 */
export function Studio() {
  return (
    <section
      id="studio"
      aria-label="Sobre mí — Kenji Sato"
      className="relative bg-background px-margin-mobile pb-section-gap md:px-margin-desktop"
    >
      {/* 1. Intro Statement */}
      <div className="grid grid-cols-4 gap-gutter pt-24 md:grid-cols-12 md:pt-32">
        <StudioStatement />
      </div>

      {/* 2. Imagen asimétrica + cita flotante */}
      <div className="mt-section-gap grid grid-cols-4 gap-gutter md:grid-cols-12">
        <div className="relative col-span-4 md:col-span-7 md:col-start-6">
          <StudioVisual />
        </div>
        <div className="col-span-4 mt-12 md:col-span-3 md:col-start-2 md:mt-0 md:flex md:flex-col md:justify-end md:pb-12">
          <StudioQuote />
        </div>
      </div>

      {/* 3. Capabilities Grid */}
      <StudioDisciplines />
    </section>
  );
}