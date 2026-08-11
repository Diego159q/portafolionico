import { PRICING_CONTENT } from "./pricing-content";
import { PricingCard } from "./PricingCard";

/**
 * Grid bento asimétrico de tarifas: patrón 12-col
 * [8 | 4] / [4 | 4] con el paquete grande primero.
 */
export function PricingGrid() {
  return (
    <div className="grid grid-cols-4 gap-gutter md:grid-cols-12">
      {PRICING_CONTENT.tiers.map((tier, index) => (
        <PricingCard key={tier.id} tier={tier} index={index} />
      ))}
    </div>
  );
}
