/**
 * Contenido de la sección "Portfolio" — Techno-Zen.
 * Datos preparados para futura conexión con backend/CMS.
 * Modelo proyectado a crecería (id, slug, technologies, category, ...).
 * Estructura fiel al screen "Portafolio - Galería Premium Techno-Zen" (Stitch).
 */

export type ProjectCategory = "architecture" | "digital" | "branding";

export type ProjectSize = "large" | "small";

export interface Project {
  /** Identificador único estable (keys / futuro API). */
  id: string;
  /** Slug opcional para una futura página de detalle (URL amigable). */
  slug?: string;
  /** Nombre del proyecto. */
  title: string;
  /** Categoría del proyecto, usada por los filtros. */
  category: ProjectCategory;
  /** Año del proyecto (se muestra "CATEGORY // YEAR"). */
  year: number;
  /** Descripción corta. */
  description: string;
  /** Ruta de imagen (next/image) dentro de /public. */
  image: string;
  /** Slug del case study asociado (/case-study/[slug]). Opcional: si no hay case study, la tarjeta no enlaza. */
  caseStudySlug?: string;
  /** Tamaño de la tarjeta en el grid asimétrico. */
  size: ProjectSize;
  /** Tecnologías usadas (opcional, preparado para el futuro). */
  technologies?: string[];
}

export interface PortfolioFilter {
  /** Clave única; "all" = ALL. */
  id: ProjectCategory | "all";
  /** Etiqueta del chip (en mayúsculas en el render). */
  label: string;
}

export interface PortfolioContent {
  title: string;
  subtitle: string;
  filters: PortfolioFilter[];
  projects: Project[];
  ctaLarge: string;
  ctaSmall: string;
}

/** Filtros mostrados. "all" agrupa la vista completa. */
export const PORTFOLIO_FILTERS: PortfolioFilter[] = [
  { id: "all", label: "Todos" },
  { id: "architecture", label: "Arquitectura" },
  { id: "digital", label: "Digital" },
  { id: "branding", label: "Marca" },
];

export const PORTFOLIO_CONTENT: PortfolioContent = {
  title: "Trabajos",
  subtitle: "Seleccionados",
  filters: PORTFOLIO_FILTERS,
  projects: [
    {
      id: "void-structure-01",
      slug: "void-structure-01",
      title: "VOID_STRUCTURE_01",
      category: "architecture",
      year: 2024,
      description:
        "Una exploración del espacio negativo en entornos urbanos de alta densidad. El hormigón y la luz actuando como materiales primarios.",
      image: "/images/portfolio/void-structure.jpg",
      caseStudySlug: "kinetic",
      size: "large",
      technologies: ["Rhino", "V-Ray", "Blender"],
    },
    {
      id: "data-flow-ui",
      slug: "data-flow-ui",
      title: "DATA_FLOW_UI",
      category: "digital",
      year: 2023,
      description:
        "Interfaz de trading de alta frecuencia diseñada para priorizar la legibilidad inmediata de los datos sobre el embellecimiento estético.",
      image: "/images/portfolio/data-flow.jpg",
      size: "small",
      technologies: ["React", "TypeScript", "Figma", "D3"],
    },
  ],
  ctaLarge: "Ver Proyecto",
  ctaSmall: "Explorar",
};

export const CATEGORY_LABELS: Record<ProjectCategory, string> = {
  architecture: "Arquitectura",
  digital: "Digital",
  branding: "Marca",
};