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
export const CASE_STUDIES_INDEX: string[] = ["sowa-tattoos"];

const sowaTattoos = {
  id: "sowa-tattoos",
  slug: "sowa-tattoos",
  category: "architecture",
  year: 2024,
  featured: true,
  technologies: ["Guion", "Grabación", "Edición", "Reels", "TikTok", "Shorts"],
  demoUrl: "https://instagram.com/",
  projectTitle: "SOWA TATTOOS",
  client: "Cliente: Sowa Tattoos (Huancayo)",
  tagline:
    "Una librería de contenido corto para mostrar proceso, detalle y personalidad de marca en redes sociales.",
  heroImage: {
    src: "/images/case-study/hero-brutalist.jpg",
    alt: "Detalle visual en alto contraste para contenido corto de tatuajes",
    treatment: "grayscale",
    height: "90vh",
  },
  roles: [
    { label: "Disciplina", values: ["Contenido para redes", "Grabación y edición"] },
    { label: "Formatos", values: ["Reels", "TikTok", "Shorts"] },
    { label: "Cronología", values: ["2024"] },
    { label: "Estado", values: ["Publicado"] },
  ],
  editorialHeading: "Una Marca Vista de Cerca",
  editorialParagraphs: [
    "El objetivo fue construir una biblioteca de piezas cortas que mostraran el trabajo de Sowa Tattoos sin sentirse como publicidad fría. La prioridad fue capturar proceso, textura, manos, detalles y momentos reales del estudio.",
    "Desde la planificación del guion visual hasta la edición final, el contenido se pensó para funcionar en redes: clips claros, ritmo rápido, estética cálida y mensajes fáciles de entender en pocos segundos.",
  ],
  quote: "Cada marca tiene una historia. Mi trabajo es encontrar la luz adecuada para grabarla.",
  processHeading: "01 // PROCESO DE CONTENIDO",
  figures: [
    {
      src: "/images/case-study/fig-wireframes.jpg",
      alt: "Planificación de tomas y guion visual para contenido corto",
      caption: "FIG. 1 / GUION VISUAL",
    },
    {
      src: "/images/case-study/fig-volumes.jpg",
      alt: "Captura de detalles, proceso y textura durante la grabación",
      caption: "FIG. 2 / GRABACIÓN",
    },
    {
      src: "/images/case-study/fig-logic.jpg",
      alt: "Línea de tiempo de edición para versiones verticales de redes",
      caption: "FIG. 3 / EDICIÓN",
    },
  ],
  videoHeading: "02 // PIEZAS PARA REDES",
  videoLabel: "REC_01_SOWA",
  metricsTitle: "MÉTRICAS DE IMPACTO",
  metricsIntro:
    "Métricas placeholder para dejar el caso listo cuando lleguen resultados reales.",
  metrics: [
    { value: "12", label: "Piezas cortas planificadas", accent: "crimson" },
    { value: "3", label: "Formatos de redes", accent: "neutral" },
    { value: "1", label: "Sesión de grabación", accent: "neutral" },
    { value: "0", label: "Plantillas genéricas", accent: "crimson" },
  ],
  finalHeading: "03 // ENTREGABLES FINALES",
  finals: [
    {
      src: "/images/case-study/exec-portrait.jpg",
      alt: "Retrato placeholder de Nicole Ore durante una producción audiovisual",
      treatment: "grayscale",
      height: "80vh",
    },
    {
      src: "/images/case-study/exec-interface.jpg",
      alt: "Preview de contenido vertical para redes sociales",
      treatment: "color",
      height: "80vh",
    },
  ],
  next: { title: "RYU STORE", slug: "ryu-store" },
} satisfies CaseStudy;

/** Base de datos local de case studies (equivalente a una API determinística). */
export const caseStudies: Record<string, CaseStudy> = {
  [sowaTattoos.id]: sowaTattoos,
};

/** Acceso tipado e idempotente (proxy del backend). */
export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies[slug];
}

/** Resumen reducido, útil para generar estáticamente cada [slug]. */
export function listCaseStudySlugs(): string[] {
  return Object.keys(caseStudies);
}
