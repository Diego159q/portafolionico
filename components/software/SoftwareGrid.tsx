import { SOFTWARE_CONTENT } from "./software-content";
import { SoftwareCard } from "./SoftwareCard";
import { Reveal } from "@/components/ui/motion";

/**
 * Grid responsive de herramientas: 4 columnas en móvil, 12 en desktop.
 * Cada card envuelta en Reveal con delay escalonado (patrón ServicesGrid).
 */
export function SoftwareGrid() {
  return (
    <div className="grid grid-cols-4 gap-gutter md:grid-cols-12">
      {SOFTWARE_CONTENT.items.map((item, index) => (
        <Reveal key={item.id} className="col-span-4 md:col-span-4" delay={index * 0.06}>
          <SoftwareCard item={item} />
        </Reveal>
      ))}
    </div>
  );
}