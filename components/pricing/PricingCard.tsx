"use client";

import type { PricingTier } from "./pricing-content";
import { whatsappUrl } from "@/components/content/site-content";
import { Reveal } from "@/components/ui/motion";

interface PricingCardProps {
  tier: PricingTier;
  index: number;
}

/**
 * Tarjeta de paquete (Techno-Zen). Variantes large/small resueltas desde la data.
 * La tarjeta destacada usa acento crimson. CTA "Cotizar" abre WhatsApp
 * con el nombre del paquete precargado.
 */
export function PricingCard({ tier, index }: PricingCardProps) {
  const large = tier.size === "large";

  const columnSpan = large ? "col-span-4 md:col-span-8" : "col-span-4 md:col-span-4";
  const padding = large ? "p-margin-mobile md:p-[64px]" : "p-margin-mobile md:p-8";
  const priceSize = large ? "text-headline-xl" : "text-headline-sm";

  const ctaHref = whatsappUrl(
    `Hola Nicole, quiero cotizar el paquete "${tier.title}".`,
  );

  return (
    <Reveal className={columnSpan} delay={index * 0.08}>
      <article
        className={`group relative flex h-full flex-col justify-between overflow-hidden border bg-surface-container-low cyber-glow transition-all duration-300 ${
          tier.highlighted
            ? "border-on-tertiary-container"
            : "border-outline-variant"
        }`}
      >
        {/* Overlay glass reveal en hover */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-white/5 opacity-0 transition-opacity duration-500 backdrop-blur-[2px] group-hover:opacity-100"
        />

        {/* Cabecera: índice + etiqueta destacado */}
        <div className={`relative z-10 flex w-full items-start justify-between ${padding}`}>
          <span
            className={`font-label-mono text-label-mono uppercase tracking-[0.2em] ${
              tier.highlighted ? "text-on-tertiary-container" : "text-on-surface-variant"
            }`}
          >
            {tier.index} / {tier.title}
          </span>
          {tier.highlighted ? (
            <span className="border border-on-tertiary-container px-2 py-1 font-label-mono text-label-mono uppercase tracking-[0.2em] text-on-tertiary-container">
              Popular
            </span>
          ) : null}
        </div>

        {/* Contenido */}
        <div className={`relative z-10 w-full ${padding}`}>
          <p className={`font-headline tracking-[-0.02em] text-on-background ${priceSize}`}>
            {tier.price}
          </p>
          <p className="mt-unit font-label-mono text-label-mono uppercase tracking-[0.2em] text-on-surface-variant">
            {tier.priceNote}
          </p>

          <p className="mt-margin-mobile font-body text-body-md text-on-surface-variant">
            {tier.description}
          </p>

          <ul className="mt-margin-mobile flex flex-col">
            {tier.features.map((feature) => (
              <li
                key={feature.label}
                className="flex items-center justify-between border-b border-outline-variant py-2 last:border-b-0"
              >
                <span className="font-body text-body-md text-on-background">
                  {feature.label}
                </span>
                <span aria-hidden="true" className="font-label-mono text-label-mono text-on-tertiary-container">
                  +
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className={`relative z-10 w-full ${padding} ${large ? "pb-[64px]" : "pb-8"} pt-0`}>
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-outline-variant px-6 py-3 font-label-mono text-label-mono text-on-background transition-colors duration-300 hover:border-on-tertiary-container hover:text-on-tertiary-container"
          >
            COTIZAR ↗
          </a>
        </div>
      </article>
    </Reveal>
  );
}
