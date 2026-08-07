import { ExperienceHeader } from "./ExperienceHeader";
import { ExperienceTimeline } from "./ExperienceTimeline";

/**
 * Sección "Experiencia" (Techno-Zen). Server component.
 * Cabecera editorial + timeline data-driven.
 */
export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="relative px-margin-mobile pb-section-gap md:px-margin-desktop"
    >
      <ExperienceHeader />
      <ExperienceTimeline />
    </section>
  );
}