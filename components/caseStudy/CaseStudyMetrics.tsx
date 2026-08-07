import type { CaseStudy } from "./caseStudy-content";
import { Reveal } from "@/components/ui/motion";

/**
 * "IMPACT METRICS". Intro col-4 + grid 2-col de métricas con separador
 * vertical (border-l). Números con acento crimson o neutral según data.
 */
export function CaseStudyMetrics({ study }: { study: CaseStudy }) {
  const { metricsTitle, metricsIntro, metrics } = study;

  return (
    <section id="metrics" className="mb-section-gap px-margin-mobile md:px-margin-desktop">
      <Reveal className="grid grid-cols-4 gap-gutter border-t border-slate-zen pt-16 md:grid-cols-12">
        <div className="col-span-4 md:col-span-4">
          <span className="font-label-mono text-label-mono uppercase tracking-widest text-cyber-crimson">
            {metricsTitle}
          </span>
          <p className="mt-unit font-body text-body-md text-on-surface-variant">{metricsIntro}</p>
        </div>
        <div className="col-span-4 mt-8 grid grid-cols-1 gap-x-gutter gap-y-12 md:col-span-8 md:mt-0 md:grid-cols-2">
          {metrics.map((metric) => (
            <div key={metric.label} className="border-l border-slate-zen pl-6">
              <div
                className={`mb-2 font-headline text-display-lg-mobile ${
                  metric.accent === "crimson" ? "text-cyber-crimson" : "text-washi"
                }`}
              >
                {metric.value}
              </div>
              <span className="font-label-mono text-label-mono uppercase tracking-widest text-on-surface-variant">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}