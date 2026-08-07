import { CLIENTS_CONTENT } from "./clients-content";
import { ClientCard } from "./ClientCard";
import { Reveal } from "@/components/ui/motion";

/**
 * Grid responsive de clientes: 2 col móvil / 4 col desktop.
 * Cada tarjeta envuelta en Reveal escalonado.
 */
export function ClientsGrid() {
  return (
    <div className="grid grid-cols-2 gap-gutter md:grid-cols-4">
      {CLIENTS_CONTENT.items.map((item, index) => (
        <Reveal key={item.id} className="col-span-1" delay={index * 0.06}>
          <ClientCard item={item} />
        </Reveal>
      ))}
    </div>
  );
}