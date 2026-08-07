import Image from "next/image";
import { categoryLabel, type SoftwareItem, type SkillLevel } from "./software-content";

/** Etiqueta textual del nivel (sin porcentajes ni barras de progreso). */
const LEVEL_LABEL: Record<SkillLevel, string> = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
  expert: "Expert",
  master: "Master",
};

interface SoftwareCardProps {
  item: SoftwareItem;
}

/**
 * Tarjeta minimalista de una herramienta (server component).
 * Logo + nombre + categoría + nivel + descripción.
 * Hover: borde Cyber Crimson, glow sutil y elevación estructural,
 * todo con transiciones suaves y sin sombras exageradas.
 */
export function SoftwareCard({ item }: SoftwareCardProps) {
  return (
    <article
      aria-label={`${item.name}, ${categoryLabel(item.categoryId)}`}
      className="group relative flex flex-col border border-outline-variant bg-surface-container-low p-margin-mobile cyber-glow transition-all duration-300 ease-out md:p-8"
    >
      <div className="mb-margin-mobile overflow-hidden border border-outline-variant bg-surface-container-low md:mb-8">
        <Image
          src={item.logo.src}
          alt={item.logo.alt}
          width={640}
          height={360}
          className="aspect-video h-auto w-full object-cover grayscale transition-all duration-300 ease-out group-hover:scale-[1.02] group-hover:grayscale-0"
        />
      </div>

      <div className="mb-unit flex items-center justify-between gap-unit">
        <h3 className="font-headline text-headline-sm text-on-background">
          {item.name}
        </h3>
        {item.website ? (
          <a
            href={item.website}
            className="font-label-mono text-label-mono uppercase tracking-[0.2em] text-on-surface-variant outline-none transition-colors focus-visible:text-on-tertiary-container focus-visible:underline hover:text-on-tertiary-container"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${item.name} — sitio oficial`}
          >
            ↗
          </a>
        ) : null}
      </div>

      <div className="mb-unit flex flex-wrap items-center gap-unit">
        <span className="font-label-mono text-label-mono uppercase tracking-[0.2em] text-on-surface-variant">
          {categoryLabel(item.categoryId)}
        </span>
        <span
          aria-label={`Nivel: ${LEVEL_LABEL[item.level]}`}
          className="border border-outline-variant px-unit py-1 font-label-mono text-label-mono uppercase tracking-[0.2em] text-on-tertiary-container"
        >
          {LEVEL_LABEL[item.level]}
        </span>
      </div>

      <p className="font-body text-body-md text-on-surface-variant">
        {item.description}
      </p>
    </article>
  );
}