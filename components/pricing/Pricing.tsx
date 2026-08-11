import { PricingHeader } from "./PricingHeader";
import { PricingGrid } from "./PricingGrid";
import { PRICING_CONTENT } from "./pricing-content";
import { Reveal } from "@/components/ui/motion";

/**
 * Pricing (Formatos y Tarifas) — bento grid Techno-Zen.
 * Cabecera editorial + tarjetas de paquete con CTA a WhatsApp.
 */
export function Pricing() {
  return (
    <section
      id="pricing"
      aria-label="Formatos y tarifas — NICOLE ORE"
      className="relative bg-background px-margin-mobile pb-section-gap md:px-margin-desktop"
    >
      <PricingHeader content={PRICING_CONTENT} />
      <PricingGrid />
      <Reveal className="mt-margin-desktop border-t border-outline-variant pt-unit">
        <p className="font-label-mono text-label-mono uppercase tracking-[0.2em] text-on-surface-variant">
          {PRICING_CONTENT.note}
        </p>
      </Reveal>
    </section>
  );
}
