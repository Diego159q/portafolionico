import type { PortfolioFilter, ProjectCategory } from "./portfolio-content";

/**
 * Chip de filtro del portfolio.
 * Estado activo: borde crimson + texto crimson. Inactivo: outline-variant
 * con hover crimson (cyber-border). Fiel al patrón de chips Techno-Zen.
 */
export function FilterChip({
  filter,
  active,
  onSelect,
}: {
  filter: PortfolioFilter;
  active: boolean;
  onSelect: (id: ProjectCategory | "all") => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={() => onSelect(filter.id)}
      className={`border px-4 py-2 font-label-mono text-label-mono transition-all duration-300 ${
        active
          ? "border-on-tertiary-container text-on-tertiary-container"
          : "cyber-border border-outline-variant text-on-surface-variant hover:text-on-background"
      }`}
    >
      {filter.label.toUpperCase()}
    </button>
  );
}