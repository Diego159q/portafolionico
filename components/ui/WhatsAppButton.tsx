"use client";

import { whatsappUrl } from "@/components/content/site-content";

/**
 * Botón flotante de WhatsApp (Techno-Zen).
 * Fijo abajo-derecha, visible en todas las páginas (montado en app/layout.tsx).
 * Ícono SVG propio (sin dependencias externas), acento crimson en hover.
 * Respeta prefers-reduced-motion (sin animación si está activado).
 */
export function WhatsAppButton() {
  const href = whatsappUrl();

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbeme por WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center border border-outline-variant bg-surface-container-low text-on-background shadow-none transition-all duration-300 hover:border-on-tertiary-container hover:bg-on-tertiary-container hover:text-background md:bottom-8 md:right-8"
    >
      <svg
        className="h-7 w-7 fill-current transition-transform duration-300 group-hover:scale-110"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm5.83 14.08c-.25.7-1.45 1.33-2.01 1.38-.51.05-1.16.24-3.88-.84-3.34-1.3-5.43-4.65-5.59-4.87-.16-.22-1.34-1.78-1.34-3.4 0-1.62.85-2.42 1.15-2.75.3-.33.65-.41.87-.41.22 0 .43 0 .62.01.2.01.47-.08.73.56.27.67.92 2.29 1 2.45.08.16.13.35.03.56-.11.22-.16.35-.33.54-.16.19-.35.43-.5.58-.16.16-.33.35-.14.68.19.33.83 1.37 1.79 2.22 1.23 1.09 2.26 1.43 2.58 1.59.32.16.51.13.7-.08.19-.22.8-.93 1.01-1.25.21-.32.43-.27.72-.16.29.11 1.86.88 2.18 1.04.32.16.53.24.61.38.08.13.08.78-.17 1.48Z" />
      </svg>
    </a>
  );
}
