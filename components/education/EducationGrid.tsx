import { EDUCATION_CONTENT } from "./education-content";
import { EducationCard } from "./EducationCard";
import { Reveal } from "@/components/ui/motion";

/**
 * Grid responsive de educación: 4 col móvil / 12 desktop.
 * Cada tarjeta envuelta en Reveal escalonado.
 */
export function EducationGrid() {
  return (
    <div className="grid grid-cols-4 gap-gutter md:grid-cols-12">
      {EDUCATION_CONTENT.items.map((item, index) => (
        <Reveal
          key={item.id}
          className="col-span-4 md:col-span-4"
          delay={index * 0.1}
        >
          <EducationCard item={item} index={index} />
        </Reveal>
      ))}
    </div>
  );
}