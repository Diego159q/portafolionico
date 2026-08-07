/**
 * Contenido de la sección "Software y Herramientas" — Techno-Zen.
 * 100% data-driven: los datos viven aquí como si fueran la respuesta de una API.
 * Para conectar con un backend/CMS basta sustituir SOFTWARE_CONTENT (o un fetch)
 * sin modificar ningún componente. Placeholders únicamente.
 */

/** Nivel de dominio, mostrado textualmente (sin porcentajes ni barras). */
export type SkillLevel =
  | "beginner"
  | "intermediate"
  | "advanced"
  | "expert"
  | "master";

export interface SoftwareCategory {
  id: string;
  label: string;
}

export interface SoftwareItem {
  id: string;
  name: string;
  /** Referencia a SoftwareCategory.id. */
  categoryId: string;
  description: string;
  logo: {
    src: string;
    alt: string;
  };
  level: SkillLevel;
  featured: boolean;
  /** URL opcional del sitio de la herramienta. */
  website?: string;
  /** Orden de visualización (sirve al backend). */
  order: number;
}

export interface SoftwareContent {
  eyebrow: string;
  title: string;
  description: string;
  categories: SoftwareCategory[];
  items: SoftwareItem[];
}

/** Categorías dinámicas (etiquetas separadas de los ítems). */
export const SOFTWARE_CATEGORIES: SoftwareCategory[] = [
  { id: "video-editing", label: "Edición de video" },
  { id: "motion-graphics", label: "Motion Graphics" },
  { id: "color", label: "Color" },
  { id: "design", label: "Diseño" },
  { id: "audio", label: "Audio" },
  { id: "3d", label: "Modelado 3D" },
  { id: "organization", label: "Organización" },
  { id: "other", label: "Otros" },
];

/** Resolución categoryId -> label (evita duplicar strings en cada ítem). */
export function categoryLabel(categoryId: string): string {
  return (
    SOFTWARE_CATEGORIES.find((c) => c.id === categoryId)?.label ??
    "Otros"
  );
}

const LOGO_ALT = "Logo placeholder de la herramienta";

export const SOFTWARE_CONTENT: SoftwareContent = {
  eyebrow: "Software y Herramientas",
  title: "Stack Creativo",
  description:
    "Las herramientas con las que produzo, edito y postproduzco. Un entorno de trabajo pensado para la precision, el ritmo y la narrativa audiovisual.",
  categories: SOFTWARE_CATEGORIES,
  items: [
    {
      id: "premiere",
      name: "Adobe Premiere Pro",
      categoryId: "video-editing",
      description: "Edición y montaje de video profesional.",
      logo: { src: "/images/software/placeholder.jpg", alt: LOGO_ALT },
      level: "expert",
      featured: true,
      website: "https://www.adobe.com/premiere",
      order: 0,
    },
    {
      id: "resolve",
      name: "DaVinci Resolve",
      categoryId: "color",
      description: "Etalonaje, corrección de color y edición avanzada.",
      logo: { src: "/images/software/placeholder.jpg", alt: LOGO_ALT },
      level: "advanced",
      featured: true,
      website: "https://www.blackmagicdesign.com/products/davinciresolve",
      order: 1,
    },
    {
      id: "after-effects",
      name: "After Effects",
      categoryId: "motion-graphics",
      description: "Motion graphics, animación y composición.",
      logo: { src: "/images/software/placeholder.jpg", alt: LOGO_ALT },
      level: "expert",
      featured: true,
      website: "https://www.adobe.com/aftereffects",
      order: 2,
    },
    {
      id: "photoshop",
      name: "Photoshop",
      categoryId: "design",
      description: "Edición de imagen, retoque y composición digital.",
      logo: { src: "/images/software/placeholder.jpg", alt: LOGO_ALT },
      level: "advanced",
      featured: false,
      website: "https://www.adobe.com/photoshop",
      order: 3,
    },
    {
      id: "audition",
      name: "Adobe Audition",
      categoryId: "audio",
      description: "Diseño sonoro y edición de audio.",
      logo: { src: "/images/software/placeholder.jpg", alt: LOGO_ALT },
      level: "intermediate",
      featured: false,
      website: "https://www.adobe.com/audition",
      order: 4,
    },
    {
      id: "blender",
      name: "Blender",
      categoryId: "3d",
      description: "Modelado 3D, animación y renderizado.",
      logo: { src: "/images/software/placeholder.jpg", alt: LOGO_ALT },
      level: "beginner",
      featured: false,
      website: "https://www.blender.org",
      order: 5,
    },
    {
      id: "illustrator",
      name: "Illustrator",
      categoryId: "design",
      description: "Ilustración vectorial y diseño gráfico.",
      logo: { src: "/images/software/placeholder.jpg", alt: LOGO_ALT },
      level: "intermediate",
      featured: false,
      website: "https://www.adobe.com/illustrator",
      order: 6,
    },
    {
      id: "lightroom",
      name: "Lightroom",
      categoryId: "color",
      description: "Procesado y gestión de fotografías.",
      logo: { src: "/images/software/placeholder.jpg", alt: LOGO_ALT },
      level: "intermediate",
      featured: false,
      website: "https://www.adobe.com/lightroom",
      order: 7,
    },
  ],
};