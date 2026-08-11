/**
 * Contenido de la sección "Portfolio" — Techno-Zen.
 * Datos preparados para futura conexión con backend/CMS.
 * Modelo proyectado a crecería (id, slug, technologies, category, ...).
 * Estructura fiel al screen "Portafolio - Galería Premium Techno-Zen" (Stitch).
 */

export type ProjectCategory = "vehicles" | "brands" | "studios" | "events";

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
  /** Video opcional: en hover reproduce el clip real (autoplay muted). */
  video?: { src: string; poster: string };
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
  { id: "vehicles", label: "Vehículos" },
  { id: "brands", label: "Marcas" },
  { id: "studios", label: "Estudios / Belleza" },
  { id: "events", label: "Eventos" },
];

export const PORTFOLIO_CONTENT: PortfolioContent = {
  title: "Trabajos",
  subtitle: "Seleccionados",
  filters: PORTFOLIO_FILTERS,
  projects: [
    {
      id: "sowa-tattoos",
      slug: "sowa-tattoos",
      title: "SOWA TATTOOS",
      category: "studios",
      year: 2024,
      description:
        "Librería de contenido corto para Reels, TikTok y Shorts. Piezas pensadas para mostrar proceso, detalle y personalidad de marca. Huancayo, Perú.",
      image: "/images/portfolio/void-structure.jpg",
      caseStudySlug: "sowa-tattoos",
      size: "large",
      technologies: ["Guion", "Grabación", "Edición", "Reels"],
    },
    {
      id: "wankamotors",
      slug: "wankamotors",
      title: "WANKAMOTORS",
      category: "vehicles",
      year: 2024,
      description:
        "Videos promocionales de vehículos con mensajes claros y una estética cálida que conecta con compradores locales.",
      image: "/images/portfolio/data-flow.jpg",
      size: "small",
      technologies: ["Video promocional", "Voz en off", "Edición"],
    },
    {
      id: "adidas-la-salle",
      slug: "adidas-la-salle",
      title: "ADIDAS LA SALLE",
      category: "brands",
      year: 2024,
      description:
        "Video por el Día del Medio Ambiente con guion y voz en off. Contenido institucional con tono humano y claro.",
      image: "/images/portfolio/void-structure.jpg",
      size: "small",
      technologies: ["Guion", "Voz en off", "Edición"],
    },
    {
      id: "ryu-store",
      slug: "ryu-store",
      title: "RYU STORE",
      category: "brands",
      year: 2023,
      description:
        "Video promocional de producto con enfoque cálido, cercano y dinámico para redes sociales.",
      image: "/images/portfolio/data-flow.jpg",
      size: "large",
      technologies: ["Video producto", "Edición", "Social media"],
    },
    {
      id: "unimac",
      slug: "unimac",
      title: "UNIMAC",
      category: "brands",
      year: 2024,
      description:
        "Contenido audiovisual para marca comercial: piezas claras, profesionales y con calidez.",
      image: "/images/portfolio/void-structure.jpg",
      size: "small",
      technologies: ["Contenido de marca", "Edición"],
    },
    {
      id: "recepciones-evento",
      slug: "recepciones-evento",
      title: "LOCAL RECEPCIONES",
      category: "events",
      year: 2024,
      description:
        "Cobertura de catering y decoración para cumpleaños con voz en off festiva, sentimental y cálida.",
      image: "/images/portfolio/data-flow.jpg",
      size: "large",
      technologies: ["Cobertura", "Voz en off", "Eventos"],
    },
  ],
  ctaLarge: "Ver Proyecto",
  ctaSmall: "Explorar",
};

export const CATEGORY_LABELS: Record<ProjectCategory, string> = {
  vehicles: "Vehículos",
  brands: "Marcas",
  studios: "Estudios / Belleza",
  events: "Eventos",
};
