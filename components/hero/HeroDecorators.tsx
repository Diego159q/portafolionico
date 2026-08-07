/**
 * Elementos decorativos del Hero (definidos en Stitch):
 * - línea estructural vertical 1px (izquierda)
 * - cuadrado crimson 8x8 (abajo-derecha)
 * - línea deco 8x1px (arriba-derecha)
 * Solo visibles en desktop.
 */
export function HeroDecorators() {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-margin-desktop top-0 hidden h-full w-px bg-outline-variant opacity-30 md:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-12 right-12 hidden h-2 w-2 bg-on-tertiary-container md:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/4 hidden h-px w-8 bg-outline-variant md:block"
      />
    </>
  );
}