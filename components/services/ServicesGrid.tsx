import { SERVICES_CONTENT } from "./services-content";
import { ServiceCard } from "./ServiceCard";

/**
 * Grid bento asimétrico de servicios: patrón 12-col
 * [8 | 4] / [4 | 8] con las tarjetas anchas alternadas.
 */
export function ServicesGrid() {
  return (
    <div className="grid grid-cols-4 gap-gutter md:grid-cols-12">
      {SERVICES_CONTENT.services.map((service, index) => (
        <ServiceCard key={service.id} service={service} index={index} />
      ))}
    </div>
  );
}