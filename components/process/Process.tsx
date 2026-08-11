import { ProcessHeader } from "./ProcessHeader";
import { PROCESS_CONTENT } from "./process-content";
import { ProcessStepRow } from "./ProcessStepRow";

/**
 * Proceso (Cómo Trabajo) — timeline editorial Techno-Zen.
 * Cabecera + pasos numerados con separadores estructurales.
 */
export function Process() {
  const { steps } = PROCESS_CONTENT;

  return (
    <section
      id="process"
      aria-label="Cómo trabajo — NICOLE ORE"
      className="relative px-margin-mobile pb-section-gap md:px-margin-desktop"
    >
      <ProcessHeader content={PROCESS_CONTENT} />

      <ul className="flex flex-col">
        {steps.map((step, index) => (
          <ProcessStepRow
            key={step.index}
            step={step}
            index={index}
            total={steps.length}
          />
        ))}
      </ul>
    </section>
  );
}
