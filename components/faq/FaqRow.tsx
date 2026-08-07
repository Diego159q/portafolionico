import type { FaqItem } from "./faq-content";

interface FaqRowProps {
  item: FaqItem;
}

/**
 * Item del accordion FAQ usando `<details>/<summary>` nativo.
 * - Accesible por defecto (teclado, lectores de pantalla).
 * - Sin `use client`: comportamiento 100% nativo del navegador.
 * - Estilo Techno-Zen: borde `outline-variant`, hover/activo crimson.
 */
export function FaqRow({ item }: FaqRowProps) {
  return (
    <details
      name="faq"
      className="group border-b border-outline-variant first:border-t"
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-unit py-margin-mobile font-headline text-headline-sm text-on-background outline-none transition-colors focus-visible:text-on-tertiary-container hover:text-on-tertiary-container [&::-webkit-details-marker]:hidden">
        <span>{item.question}</span>
        <span
          aria-hidden="true"
          className="font-label-mono text-label-mono text-on-tertiary-container transition-transform duration-300 group-open:rotate-45"
        >
          +
        </span>
      </summary>
      <p className="pb-margin-mobile font-body text-body-md text-on-surface-variant">
        {item.answer}
      </p>
    </details>
  );
}