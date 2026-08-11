/**
 * Modelo de datos del Case Study (detalle de proyecto).
 * 100% data-driven: los componentes renderizan desde ESTAS interfaces, jamás
 * texto hardcodeado. Preparado para conectarse a un backend futuro:
 * hoy los datos viven en este archivo como si fueran la respuesta de una API;
 * mañana cada `caseStudies[slug].getBySlug()` se sustituye por `fetch`.
 */
import type { ProjectCategory } from "@/components/portfolio/portfolio-content";

/** Tratamiento visual aplicable a una imagen del case study. */
export type CaseMediaTreatment = "grayscale" | "color";

/** Medio (imagen) usada en hero / galería / figuras. */
export interface CaseMedia {
  src: string;
  alt: string;
  treatment: CaseMediaTreatment;
  /** Altura opcional para imágenes a sangre completa (hero / finals). */
  height?: "70vh" | "90vh" | "80vh";
}

/** Bloque de metadata del sidebar: p.ej. DISCIPLINE -> ["Spatial UX / UI", "Creative Direction"]. */
export interface CaseRole {
  /** Etiqueta del bloque (id concatenado de la data). */
  label: string;
  values: string[];
}

/** Métrica de impacto. */
export interface CaseMetric {
  value: string;
  label: string;
  /** Si true el número se tiñe de Cyber Crimson; si no, Washi White. */
  accent: "crimson" | "neutral";
}

/** Figura del grid "PROCESS & PROTOTYPES". */
export interface CaseFigure {
  src: string;
  alt: string;
  /** Etiqueta esquina inferior-izquierda, p.ej. "FIG. 1 / WIREFRAMES". */
  caption: string;
}

/** Proyecto siguiente (nav al final). */
export interface CaseNext {
  title: string;
  slug: string;
}

/**
 * Modelo completo de un caso de estudio.
 * Campos centrales + los extras pedidos para servir al backend futuro.
 */
export interface CaseStudy {
  id: string;
  slug: string;

  /* ---- Campos para backend / filtros / tarjetas ---- */
  category: ProjectCategory;
  year: number;
  /** Proyecto destacado (featured en home / portfolio). */
  featured: boolean;
  technologies: string[];
  /** URL opcional del repositorio. */
  repository?: string;
  /** URL opcional de demo en vivo. */
  demoUrl?: string;

  /* ---- Contenido editorial ---- */
  projectTitle: string;
  client: string;
  tagline: string;
  heroImage: CaseMedia;
  /** Metadatos del sidebar. */
  roles: CaseRole[];
  editorialHeading: string;
  editorialParagraphs: string[];
  quote: string;
  /** "01 // PROCESS & PROTOTYPES" */
  processHeading: string;
  figures: CaseFigure[];
  /** "02 // INTERACTION STUDY" */
  videoHeading: string;
  videoLabel: string;
  metricsTitle: string;
  metricsIntro: string;
  metrics: CaseMetric[];
  finalHeading: string;
  finals: CaseMedia[];
  next: CaseNext;
}

/** Lista y orden de slugs disponibles (permite enumerar proyectos). */
export const CASE_STUDIES_INDEX: string[] = ["lumen-01"];

const lumen = {
  id: "lumen-01",
  slug: "lumen-01",
  category: "architecture",
  year: 2024,
  featured: true,
  technologies: ["Sony Cinema", "DaVinci Resolve", "Premiere Pro", "Lighting"],
  repository: "https://github.com/nico-audiovisual/lumen",
  demoUrl: "https://vimeo.com/lumen01",
  projectTitle: "LUMEN_01",
  client: "Cliente: Productora Placeholder",
  tagline:
    "Un cortometraje de ficción donde la luz y el encuadre actúan como materiales narrativos primarios.",
  heroImage: {
    src: "/images/case-study/hero-brutalist.jpg",
    alt: "Escena en alto contraste — luz atravesando geometrías",
    treatment: "grayscale",
    height: "90vh",
  },
  roles: [
    { label: "Disciplina", values: ["Dirección de Fotografía", "Edición"] },
    { label: "Equipo", values: ["Cámara Sony", "Iluminación"] },
    { label: "Cronología", values: ["2023 T4 - 2024 T1"] },
    { label: "Estado", values: ["Estrenado"] },
  ],
  editorialHeading: "La Luz como Estructura",
  editorialParagraphs: [
    "La filosofía central del proyecto fue tratar la luz no como una simple iluminación, sino como un elemento estructural primario. Partiendo del concepto de vacío escénico, construimos una imagen que respira y deja que la emoción exista sin saturar al espectador.",
    "Manteniendo una paleta monocromática puntuada solo por el calor del atardecer, el ruido visual se redujo al mínimo. El resultado se siente menos como una pieza producida y más como una extensión física del espacio que habita.",
  ],
  quote: "La precisión en la ejecución exige la eliminación despiadada de lo no esencial.",
  processHeading: "01 // PROCESO Y STORYBOARD",
  figures: [
    {
      src: "/images/case-study/fig-wireframes.jpg",
      alt: "Storyboard de los planos principales sobre esquema de luces",
      caption: "FIG. 1 / STORYBOARD",
    },
    {
      src: "/images/case-study/fig-volumes.jpg",
      alt: "Croquis de volumen y encuadre de la locación",
      caption: "FIG. 2 / ENCUADRES",
    },
    {
      src: "/images/case-study/fig-logic.jpg",
      alt: "Línea de tiempo de edición en software minimalista",
      caption: "FIG. 3 / MONTAJE",
    },
  ],
  videoHeading: "02 // ESTUDIO DE IMAGEN",
  videoLabel: "REC_01_LUMEN",
  metricsTitle: "MÉTRICAS DE IMPACTO",
  metricsIntro:
    "Resultados de producción y montaje del cortometraje tras su estreno.",
  metrics: [
    { value: "9", label: "Días de rodaje", accent: "crimson" },
    { value: "4K", label: "Resolución de imagen", accent: "neutral" },
    { value: "12", label: "Minutos de duración", accent: "neutral" },
    { value: "0", label: "Elementos superfluos", accent: "crimson" },
  ],
  finalHeading: "03 // IMÁGENES FINALES",
  finals: [
    {
      src: "/images/case-study/exec-portrait.jpg",
      alt: "Retrato de la realizadora en locación minimalista",
      treatment: "grayscale",
      height: "80vh",
    },
    {
      src: "/images/case-study/exec-interface.jpg",
      alt: "Imagen del cortometraje proyectada sobre un muro",
      treatment: "color",
      height: "80vh",
    },
  ],
  next: { title: "SIGNAL_04", slug: "signal-04" },
} satisfies CaseStudy;

/** Base de datos local de case studies (equivalente a una API determinística). */
export const caseStudies: Record<string, CaseStudy> = {
  [lumen.id]: lumen,
};

/** Acceso tipado e idempotente (proxy del backend). */
export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies[slug];
}

/** Resumen reducido, útil para generar estáticamente cada [slug]. */
export function listCaseStudySlugs(): string[] {
  return Object.keys(caseStudies);
}