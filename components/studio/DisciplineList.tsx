import type { Discipline } from "./studio-content";
import { Reveal } from "@/components/ui/motion";

/**
 * Lista de disciplina (Specialties / Skills).
 * Cada bloque: identificador label-mono con marcador crimson + lista debajo.
 * Cada fila: borde inferior 1px; en hover se desplaza a la izquierda (pl-2)
 * y, si la disciplina lleva arrow, el indicador se tiñe de crimson.
 * Fiel al patrón de listado del design system Techno-Zen (Stitch).
 */
export function DisciplineList({ discipline }: { discipline: Discipline }) {
  return (
    <div className="flex flex-col gap-8">
      <Reveal>
        <h3 className="flex items-center gap-2 font-label-mono text-label-mono text-on-tertiary-container">
          <span
            aria-hidden="true"
            className="inline-block h-px w-2 bg-on-tertiary-container"
          />
          {discipline.label}
        </h3>
      </Reveal>

      <Reveal delay={0.1}>
        <ul className="flex flex-col border-t border-outline-variant">
          {discipline.items.map((item) => (
            <li
              key={item}
              className="group flex cursor-default items-center justify-between border-b border-outline-variant/30 py-4 transition-all duration-300 hover:pl-2"
            >
              <span className="font-body text-body-md text-on-background">{item}</span>
              {discipline.arrow && (
                <span
                  aria-hidden="true"
                  className="text-outline transition-colors duration-300 group-hover:text-on-tertiary-container"
                >
                  →
                </span>
              )}
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}