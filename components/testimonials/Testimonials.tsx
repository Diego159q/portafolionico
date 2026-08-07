import { TestimonialsHeader } from "./TestimonialsHeader";
import { TestimonialsGrid } from "./TestimonialsGrid";

/**
 * Sección "Testimonios" (Techno-Zen). Server component.
 */
export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-title"
      className="relative px-margin-mobile pb-section-gap md:px-margin-desktop"
    >
      <TestimonialsHeader />
      <TestimonialsGrid />
    </section>
  );
}