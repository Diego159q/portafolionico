import { CASE_STUDY_PREVIEW_CONTENT, featuredCaseStudy } from "./caseStudyPreview-content";
import { CaseStudyPreviewCard } from "./CaseStudyPreviewCard";
import { Reveal } from "@/components/ui/motion";

/**
 * Bloque "Proyecto Destacado" (Case Study Preview) — Techno-Zen.
 * Cabecera editorial breve + tarjeta enlazada al case study dinámico.
 * Si no existe ningún case study, no se renderiza nada (SSR defensivo).
 */
export function CaseStudyPreview() {
  const study = featuredCaseStudy();

  if (!study) {
    return null;
  }

  return (
    <section
      id="featured-project"
      aria-label={CASE_STUDY_PREVIEW_CONTENT.title}
      className="relative px-margin-mobile pb-section-gap md:px-margin-desktop"
    >
      <header className="mb-[80px]">
        <Reveal>
          <p className="mb-unit font-label-mono text-label-mono uppercase tracking-[0.2em] text-on-surface-variant">
            {CASE_STUDY_PREVIEW_CONTENT.eyebrow}
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <h2
            id="featured-project-title"
            className="font-headline text-display-lg-mobile tracking-[-0.03em] text-on-background md:text-display-lg"
          >
            {CASE_STUDY_PREVIEW_CONTENT.title}
          </h2>
        </Reveal>
      </header>

      <CaseStudyPreviewCard study={study} />
    </section>
  );
}