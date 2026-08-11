import { ServicesHeader } from "./ServicesHeader";
import { ServicesGrid } from "./ServicesGrid";
import { Button } from "@/components/ui/Button";
import { SERVICES_CONTENT } from "./services-content";

/**
 * Services (Servicios) — bento grid asimétrico Techno-Zen.
 * Cabecera display + grid 8/4|4/8 + CTA "Initiate Project".
 */
export function Services() {
  return (
    <section
      id="services"
      aria-label="Servicios — NICO"
      className="relative bg-background px-margin-mobile pb-section-gap md:px-margin-desktop"
    >
      <ServicesHeader />
      <ServicesGrid />
      <div className="mt-section-gap flex justify-center">
        <Button variant="primary" size="lg">
          {SERVICES_CONTENT.ctaLabel.toUpperCase()}
        </Button>
      </div>
    </section>
  );
}
