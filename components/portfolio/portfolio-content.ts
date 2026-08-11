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
  { id: "architecture", label: "Ficción" },
  { id: "digital", label: "Digital" },
  { id: "branding", label: "Comercial" },
];

export const PORTFOLIO_CONTENT: PortfolioContent = {
  title: "Trabajos",
  subtitle: "Seleccionados",
  filters: PORTFOLIO_FILTERS,
  projects: [
    {
      id: "short-film-01",
      slug: "short-film-01",
      title: "LUMEN_01",
      category: "digital",
      year: 2024,
      description:
        "Cortometraje de ficción: luz y encuadre como material narrativo. Dirección de fotografía y montaje de una historia minimalista.",
      image: "/images/portfolio/void-structure.jpg",
      caseStudySlug: "lumen-01",
      size: "large",
      technologies: ["Sony Cinema", "DaVinci Resolve", "Premiere"],
    },
    {
      id: "music-video-01",
      slug: "music-video-01",
      title: "SIGNAL_04",
      category: "digital",
      year: 2023,
      description:
        "Videoclip de alta energía: ritmo de corte, color radical y motion graphics integrados en la imagen.",
      image: "/images/portfolio/data-flow.jpg",
      size: "small",
      technologies: ["After Effects", "DaVinci Resolve"],
    },
  ],
  ctaLarge: "Ver Proyecto",
  ctaSmall: "Explorar",
};

export const CATEGORY_LABELS: Record<ProjectCategory, string> = {
  architecture: "Ficción",
  digital: "Digital",
  branding: "Comercial",
};
