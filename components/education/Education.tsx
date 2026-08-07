import { EducationHeader } from "./EducationHeader";
import { EducationGrid } from "./EducationGrid";

/**
 * Sección "Educación" (Techno-Zen). Server component.
 */
export function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-title"
      className="relative px-margin-mobile pb-section-gap md:px-margin-desktop"
    >
      <EducationHeader />
      <EducationGrid />
    </section>
  );
}