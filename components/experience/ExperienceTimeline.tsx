import { EXPERIENCE_CONTENT } from "./experience-content";
import { ExperienceRow } from "./ExperienceRow";

/**
 * Timeline listado de experiencia. Cada ítem renderizado por ExperienceRow.
 * Axis vertical continuo mediante listas; separación top-border entre entradas.
 */
export function ExperienceTimeline() {
  return (
    <ul className="flex flex-col">
      {EXPERIENCE_CONTENT.items.map((item, index) => (
        <ExperienceRow key={item.id} item={item} index={index} />
      ))}
    </ul>
  );
}