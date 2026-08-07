"use client";

import type { Service } from "./services-content";
import { ServiceIcon } from "./ServiceIcon";
import { Reveal } from "@/components/ui/motion";

/**
 * Tarjeta de servicio del bento grid (Techno-Zen). Componente único.
 * Las variantes large/small se resuelven desde los datos del servicio.
 * Hover elegante: borde crimson + glow sutil + escala ligera del icono
 * (sin elevaciones bruscas, conforme al Design System).
 */
export function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const large = service.size === "large";

  const columnSpan = large ? "col-span-4 md:col-span-8" : "col-span-4 md:col-span-4";
  const padding = large ? "p-margin-mobile md:p-[64px]" : "p-margin-mobile md:p-8";
  const iconSize = large ? "h-10 w-10" : "h-8 w-8";
  const badgePad = large ? "px-3 py-1" : "px-2 py-0.5";

  return (
    <Reveal className={columnSpan} delay={index * 0.08}>
      <article className="group relative flex h-[400px] cursor-pointer flex-col justify-between overflow-hidden border border-outline-variant bg-surface-container-low cyber-glow transition-all duration-300">
        {/* Overlay glass reveal en hover */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-white/5 opacity-0 transition-opacity duration-500 backdrop-blur-[2px] group-hover:opacity-100"
        />

        {/* Cabecera: icono + badge numérico */}
        <div className={`relative z-10 flex w-full items-start justify-between ${padding}`}>
          <ServiceIcon
            name={service.icon}
            className={`${iconSize} text-on-surface-variant transition-all duration-300 group-hover:scale-110`}
          />
          <span
            className={`font-label-mono text-label-mono border border-outline-variant text-on-surface-variant ${badgePad}`}
          >
            {service.index}
          </span>
        </div>

        {/* Contenido */}
        <div
          className={`relative z-10 w-full ${padding} ${large ? "md:w-3/4" : ""} ${large ? "pb-[64px]" : "pb-8"} mt-auto`}
        >
          <h3
            className={`mb-2 font-headline text-on-background transition-colors duration-300 group-hover:text-on-tertiary-container ${
              large ? "text-headline-sm" : "text-quote-text font-bold"
            }`}
          >
            {service.title}
          </h3>
          <p
            className={`font-body text-on-surface-variant ${
              large ? "text-body-md" : "text-sm"
            }`}
          >
            {service.description}
          </p>
        </div>
      </article>
    </Reveal>
  );
}