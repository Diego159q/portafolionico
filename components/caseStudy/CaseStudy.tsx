import type { CaseStudy } from "./caseStudy-content";
import { caseStudies } from "./caseStudy-content";
import { CaseStudyHero } from "./CaseStudyHero";
import { CaseStudyEditorial } from "./CaseStudyEditorial";
import { CaseStudyProcess } from "./CaseStudyProcess";
import { CaseStudyVideo } from "./CaseStudyVideo";
import { CaseStudyMetrics } from "./CaseStudyMetrics";
import { CaseStudyGallery } from "./CaseStudyGallery";
import { CaseStudyNext } from "./CaseStudyNext";

/**
 * Contenedor del Case Study. Completamente data-driven: renderiza cada bloque
 * a partir del objeto `CaseStudy`. Este componente es agnóstico al número de
 * proyectos — recibe uno y lo dibuja.
 *
 * La nav "Próximo Proyecto" solo se renderiza si el slug destino existe entre los
 * case studies registrados (evita enlazar a un 404 cuando aún no se ha creado).
 */
export function CaseStudy({ study }: { study: CaseStudy }) {
  const hasNext = Boolean(caseStudies[study.next.slug]);

  return (
    <>
      <CaseStudyHero study={study} />
      <CaseStudyEditorial study={study} />
      <CaseStudyProcess study={study} />
      <CaseStudyVideo study={study} />
      <CaseStudyMetrics study={study} />
      <CaseStudyGallery study={study} />
      {hasNext && <CaseStudyNext study={study} />}
    </>
  );
}