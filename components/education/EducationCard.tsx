import type { EducationItem } from "./education-content";
import { Reveal } from "@/components/ui/motion";

interface EducationCardProps {
  item: EducationItem;
  index: number;
}

/**
 * Tarjeta académica minimalista (Techno-Zen).
 * Periodo + institución + carrera + cursos y certificaciones como listas
 * etiquetadas con chips `label-mono`.
 */
export function EducationCard({ item }: EducationCardProps) {
  return (
    <article
      aria-label={`${item.degree} — ${item.institution}`}
      className="flex h-full flex-col border border-outline-variant p-margin-mobile cyber-glow transition-all duration-300 ease-out md:p-8"
    >
      <p className="mb-unit font-label-mono text-label-mono uppercase tracking-[0.2em] text-on-tertiary-container">
        {item.period}
      </p>
      <h3 className="font-headline text-headline-sm text-on-background">
        {item.degree}
      </h3>
      <p className="mt-unit font-label-mono text-label-mono uppercase tracking-[0.2em] text-on-surface-variant">
        {item.institution}
      </p>

      <div className="mt-margin-mobile flex flex-1 flex-col justify-end gap-3 md:mt-8">
        <ul className="flex flex-col gap-unit">
          {item.courses.map((course) => (
            <li
              key={course}
              className="font-body text-body-md text-on-surface-variant"
            >
              {course}
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap gap-unit">
          {item.certifications.map((cert) => (
            <li
              key={cert}
              className="border border-outline-variant px-unit py-1 font-label-mono text-label-mono uppercase tracking-[0.2em] text-on-surface-variant"
            >
              {cert}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}