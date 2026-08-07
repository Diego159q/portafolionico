import type { Value } from "./studio-content";
import { STUDIO_CONTENT } from "./studio-content";
import { Reveal } from "@/components/ui/motion";

/**
 * Tarjetas de valores (Values) — 4 tarjetas numeradas con borde 1px.
 * Hover: el borde cambia a crimson (cyber-border). Fiel a Stitch.
 */
export function ValueCards({ values }: { values: Value[] }) {
  return (
    <div className="flex flex-col gap-8">
      <Reveal>
        <h3 className="flex items-center gap-2 font-label-mono text-label-mono text-on-tertiary-container">
          <span
            aria-hidden="true"
            className="inline-block h-px w-2 bg-on-tertiary-container"
          />
          {STUDIO_CONTENT.valuesLabel}
        </h3>
      </Reveal>

      <div className="flex flex-col gap-4">
        {values.map((value, index) => (
          <Reveal key={value.index} delay={index * 0.08}>
            <div className="cyber-border border border-outline-variant p-4">
              <span className="mb-1 block font-label-mono text-label-mono text-on-surface-variant">
                {value.index}
              </span>
              <span className="block font-body text-body-md text-on-background">
                {value.label}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}