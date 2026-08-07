import { SoftwareHeader } from "./SoftwareHeader";
import { SoftwareGrid } from "./SoftwareGrid";

/**
 * Sección "Software y Herramientas" (Techno-Zen).
 * Server component: cabecera editorial + grid data-driven.
 */
export function Software() {
  return (
    <section id="software" aria-labelledby="software-title" className="w-full">
      <SoftwareHeader />
      <SoftwareGrid />
    </section>
  );
}