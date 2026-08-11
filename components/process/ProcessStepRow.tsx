import type { ProcessStep } from "./process-content";
import { Reveal } from "@/components/ui/motion";

interface ProcessStepRowProps {
  step: ProcessStep;
  index: number;
  total: number;
}

/**
 * Fila del timeline de proceso. Cada paso se ancla al grid con un número
 * crimson y líneas estructurales `outline-variant`. Server component.
 */
export function ProcessStepRow({ step, index, total }: ProcessStepRowProps) {
  const isLast = index === total - 1;

  return (
    <li
      className={`grid grid-cols-4 gap-gutter md:grid-cols-12 ${
        isLast ? "border-t border-outline-variant pt-margin-mobile" : "border-t border-outline-variant py-margin-mobile"
      }`}
    >
      <Reveal className="col-span-4 md:col-span-2" delay={index * 0.08}>
        <div className="flex items-baseline gap-unit pl-unit">
          <span className="font-label-mono text-label-mono uppercase tracking-[0.2em] text-on-tertiary-container">
            {step.index}
          </span>
          <span aria-hidden="true" className="font-label-mono text-label-mono uppercase tracking-[0.2em] text-on-surface-variant">
            / {String(total).padStart(2, "0")}
          </span>
        </div>
      </Reveal>

      <Reveal className="col-span-4 md:col-span-4 md:col-start-2" delay={index * 0.12 + 0.04}>
        <h3 className="font-headline text-headline-sm text-on-background">
          {step.title}
        </h3>
      </Reveal>

      <Reveal className="col-span-4 md:col-span-5 md:col-start-8" delay={index * 0.16}>
        <p className="font-body text-body-md text-on-surface-variant">
          {step.description}
        </p>
      </Reveal>
    </li>
  );
}
