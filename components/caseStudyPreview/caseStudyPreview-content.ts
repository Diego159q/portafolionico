/**
 * Contenido del bloque "Proyecto Destacado" (CaseStudy Preview).
 * 100% data-driven y sin duplicación: deriva la tarjeta de los datos
 * EXISTENTES del modelo CaseStudy (components/caseStudy/caseStudy-content.ts).
 * Cuando exista backend, `featuredCaseStudy()` se sustituye por un fetch.
 */
import type { CaseStudy } from "@/components/caseStudy/caseStudy-content";
import { caseStudies, listCaseStudySlugs } from "@/components/caseStudy/caseStudy-content";

export interface CaseStudyPreviewContent {
  eyebrow: string;
  title: string;
  ctaLabel: string;
}

export const CASE_STUDY_PREVIEW_CONTENT: CaseStudyPreviewContent = {
  eyebrow: "Proyecto Destacado",
  title: "Caso de Estudio",
  ctaLabel: "View Case Study",
};

/**
 * Devuelve el case study marcado como featured. Si no hubiera ninguno,
 * cae al primero de la index (fallback determinista, equivalente a la API).
 */
export function featuredCaseStudy(): CaseStudy | undefined {
  const slugs = listCaseStudySlugs();
  const featured = slugs
    .map((slug) => caseStudies[slug])
    .find((study) => study?.featured);
  return featured ?? (slugs.length ? caseStudies[slugs[0]] : undefined);
}