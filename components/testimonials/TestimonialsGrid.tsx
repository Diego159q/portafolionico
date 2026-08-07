import { TESTIMONIALS_CONTENT } from "./testimonials-content";
import { TestimonialCard } from "./TestimonialCard";
import { Reveal } from "@/components/ui/motion";

/**
 * Grid responsive de testimonios: 1 col móvil / 3 col desktop.
 * Cada tarjeta envuelta en Reveal escalonado.
 */
export function TestimonialsGrid() {
  return (
    <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
      {TESTIMONIALS_CONTENT.items.map((item, index) => (
        <Reveal key={item.id} className="col-span-1" delay={index * 0.1}>
          <TestimonialCard item={item} />
        </Reveal>
      ))}
    </div>
  );
}