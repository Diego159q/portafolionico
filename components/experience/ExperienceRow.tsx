import type { ExperienceItem } from "./experience-content";
import { Reveal } from "@/components/ui/motion";

interface ExperienceRowProps {
  item: ExperienceItem;
  index: number;
}

/**
 * Fila del timeline. Cada entrada se ancla al eje del grid con un marcador
 * crimson (Cyber Crimson como acento) y lineas estructurales `outline-variant`.
 * Server component.
 */
export function ExperienceRow({ item, index }: ExperienceRowProps) {
  return (
<li className="grid grid-cols-4 gap-gutter border-t border-outline-variant pt-margin-mobile pb-margin-mobile md:grid-cols-12">
      {/* Número + periodo */}
      <Reveal className="col-span-4 md:col-span-2" delay={index * 0.08}>
        <div className="flex items-baseline gap-unit pl-unit">
          <span className="font-label-mono text-label-mono uppercase tracking-[0.2em] text-on-tertiary-container">
            0{index + 1}
          </span>
          <span className="font-label-mono text-label-mono uppercase tracking-[0.2em] text-on-surface-variant">
            {item.period}
          </span>
        </div>
      </Reveal>

{/* Rol + empresa */}
      <Reveal className="col-span-4 md:col-span-4 md:col-start-2" delay={index * 0.12 + 0.04}>
        <h3 className="font-headline text-headline-sm text-on-background">
          {item.role}
        </h3>
        <p className="mt-unit font-label-mono text-label-mono uppercase tracking-[0.2em] text-on-surface-variant">
          {item.company}
        </p>
      </Reveal>

      {/* Descripción + proyectos */}
      <Reveal
        className="col-span-4 md:col-span-5 md:col-start-8"
        delay={index * 0.16}
      >
        <p className="font-body text-body-md text-on-surface-variant">
          {item.description}
        </p>
        <ul className="mt-unit flex flex-wrap gap-unit">
          {item.projects.map((project) => (
            <li
              key={project}
              className="border border-outline-variant px-unit py-1 font-label-mono text-label-mono uppercase tracking-[0.2em] text-on-surface-variant"
            >
              {project}
            </li>
          ))}
        </ul>
      </Reveal>
    </li>
  );
}