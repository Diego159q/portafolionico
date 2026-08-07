import type { ServiceIconName } from "./services-content";

/**
 * Iconos SVG inline propios (1px stroke, geométricos, sin librerías).
 * Estilo: trazo strict, sin rounded caps/joins (Techno-Zen).
 * Cada icono se dibuja en un viewBox 24x24 con `currentColor`.
 */
export function ServiceIcon({
  name,
  className,
}: {
  name: ServiceIconName;
  className?: string;
}) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1,
    strokeLinecap: "square" as const,
    strokeLinejoin: "miter" as const,
    className,
    "aria-hidden": true,
  };

  switch (name) {
    case "architecture":
      return (
        <svg {...common}>
          <path d="M3 21h18" />
          <path d="M12 3 4 8v13" />
          <path d="M12 3l8 5v13" />
          <path d="M8 21v-8h8v8" />
        </svg>
      );
    case "design_services":
      return (
        <svg {...common}>
          <path d="M4 20l4-1 9-9-3-3-9 9-1 4z" />
          <path d="M13 7l3 3" />
          <path d="M9 21h12" />
        </svg>
      );
    case "terminal":
      return (
        <svg {...common}>
          <path d="M4 4l8 8-8 8" />
          <path d="M14 20h6" />
        </svg>
      );
    case "brand_awareness":
      return (
        <svg {...common}>
          <path d="M3 10v4h3l7 4V6L6 10H3z" />
          <path d="M17 9c2 1.5 2 4.5 0 6" />
          <path d="M20 7c3 2.5 3 7.5 0 10" />
        </svg>
      );
  }
}
