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
export const CASE_STUDIES_INDEX: string[] = ["kinetic"];

const kinetic = {
  id: "kinetic",
  slug: "kinetic",
  category: "architecture",
  year: 2024,
  featured: true,
  technologies: ["Spatial UX", "Three.js", "WebGL", "React", "Tailwind"],
  repository: "https://github.com/kenji-sato/kinetic",
  demoUrl: "https://kinetic.kenjisato.dev",
  projectTitle: "KINETIC",
  client: "Cliente: Kurokawa Industries",
  tagline:
    "Una exploración definitiva de interfaces de computación espacial aplicadas a entornos arquitectónicos brutalistas.",
  heroImage: {
    src: "/images/case-study/hero-brutalist.jpg",
    alt: "Interior brutalista en alto contraste — luz atravesando geometrías",
    treatment: "grayscale",
    height: "90vh",
  },
  roles: [
    { label: "Disciplina", values: ["UX / UI Espacial", "Dirección Creativa"] },
    { label: "Tecnología", values: ["WebGL / Three.js", "React / Tailwind"] },
    { label: "Cronología", values: ["2023 T4 - 2024 T1"] },
    { label: "Estado", values: ["Desplegado"] },
  ],
  editorialHeading: "El Vacío como Estructura",
  editorialParagraphs: [
    "La filosofía central del Proyecto Kinetic fue tratar el espacio negativo no como una ausencia, sino como un elemento estructural primario. Partiendo en profundidad del concepto de Ma, diseñamos una interfaz que respira, permitiendo que los datos espaciales complejos existan sin abrumar al usuario.",
    "Al adherirse estrictamente a una paleta monocromática puntuada solo por intensos destellos de 'Cyber Crimson' para las interacciones críticas, el ruido visual se redujo a cero. La interfaz resultante se siente menos como software y más como una extensión física de la arquitectura brutalista que habita.",
  ],
  quote: "La precisión en la ejecución exige la eliminación despiadada de lo no esencial.",
  processHeading: "01 // PROCESO Y PROTOTIPOS",
  figures: [
    {
      src: "/images/case-study/fig-wireframes.jpg",
      alt: "Wireframes de la interfaz sobre plano arquitectónico",
      caption: "FIG. 1 / WIREFRAMES",
    },
    {
      src: "/images/case-study/fig-volumes.jpg",
      alt: "Modelo físico en hormigón y resina negra",
      caption: "FIG. 2 / VOLÚMENES",
    },
    {
      src: "/images/case-study/fig-logic.jpg",
      alt: "Captura de código fuente en editor minimalista",
      caption: "FIG. 3 / LÓGICA",
    },
  ],
  videoHeading: "02 // ESTUDIO DE INTERACCIÓN",
  videoLabel: "REC_01_KINETIC",
  metricsTitle: "MÉTRICAS DE IMPACTO",
  metricsIntro:
    "Mejoras de rendimiento cuantificables tras la integración del sistema espacial Kinetic.",
  metrics: [
    { value: "40%", label: "Reducción de la carga cognitiva", accent: "crimson" },
    { value: "12ms", label: "Latencia de renderizado", accent: "neutral" },
    { value: "99.9%", label: "Disponibilidad del sistema", accent: "neutral" },
    { value: "0", label: "Elementos superfluos", accent: "crimson" },
  ],
  finalHeading: "03 // EJECUCIÓN FINAL",
  finals: [
    {
      src: "/images/case-study/exec-portrait.jpg",
      alt: "Retrato del diseñador en habitación de hormigón minimalista",
      treatment: "grayscale",
      height: "80vh",
    },
    {
      src: "/images/case-study/exec-interface.jpg",
      alt: "Interfaz digital proyectada sobre muro de hormigón",
      treatment: "color",
      height: "80vh",
    },
  ],
  next: { title: "OBLIVION", slug: "oblivion" },
} satisfies CaseStudy;

/** Base de datos local de case studies (equivalente a una API determinística). */
export const caseStudies: Record<string, CaseStudy> = {
  [kinetic.id]: kinetic,
};

/** Acceso tipado e idempotente (proxy del backend). */
export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies[slug];
}

/** Resumen reducido, útil para generar estáticamente cada [slug]. */
export function listCaseStudySlugs(): string[] {
  return Object.keys(caseStudies);
}