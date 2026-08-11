import type { ExperienceContent } from "./experience-content";
import { ExperienceRow } from "./ExperienceRow";

interface ExperienceTimelineProps {
  content: ExperienceContent;
}

/**
 * Timeline listado de experiencia. Cada ítem renderizado por ExperienceRow.
 * Axis vertical continuo mediante listas; separación top-border entre entradas.
 */
export function ExperienceTimeline({ content }: ExperienceTimelineProps) {
  return (
    <ul className="flex flex-col">
      {content.items.map((item, index) => (
        <ExperienceRow key={item.id} item={item} index={index} />
      ))}
    </ul>
  );
}