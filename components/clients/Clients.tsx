import { ClientsHeader } from "./ClientsHeader";
import { ClientsGrid } from "./ClientsGrid";

/**
 * Sección "Clientes / Marcas" (Techno-Zen). Server component.
 */
export function Clients() {
  return (
    <section
      id="clients"
      aria-labelledby="clients-title"
      className="relative px-margin-mobile pb-section-gap md:px-margin-desktop"
    >
      <ClientsHeader />
      <ClientsGrid />
    </section>
  );
}