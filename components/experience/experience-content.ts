/**
 * Contenido de la sección "Experiencia" — Techno-Zen.
 * Timeline editorial 100% data-driven, preparado para backend/CMS.
 * Placeholders orientados a audiovisual (edición, producción, post, dirección).
 */

export interface ExperienceItem {
  /** Identificador único estable (keys / futuro API). */
  id: string;
  /** Cargo desempeñado. */
  role: string;
  /** Productora / empresa. */
  company: string;
  /** Periodo textual (p.ej. "2022 — Presente"). */
  period: string;
  /** Descripción breve de responsabilidades. */
  description: string;
  /** Proyectos o piezas relacionadas (títulos placeholder). */
  projects: string[];
}

export interface ExperienceContent {
  eyebrow: string;
  title: string;
  heading: string;
  description: string;
  items: ExperienceItem[];
}

export const EXPERIENCE_CONTENT: ExperienceContent = {
  eyebrow: "Trayectoria",
  title: "Experiencia",
  heading: "Recorrido Profesional",
  description:
    "Creación de contenido audiovisual para marcas y eventos desde 2024. Cada proyecto combina estrategia, calidez y producción para que tu marca se vea cercana y memorable.",
  items: [
    {
      id: "exp-01",
      role: "Creadora de Contenido Audiovisual",
      company: "Freelance — Redes Sociales",
      period: "2024 — Presente",
      description:
        "Producción integral de contenido para Reels, TikTok y Shorts: guion, grabación, edición y voz en off para marcas y negocios.",
      projects: ["Reels para marcas", "Contenido de producto"],
    },
    {
      id: "exp-02",
      role: "Videos Promocionales y de Marca",
      company: "Wankamotors · Unimac · Sowa Tattoos",
      period: "2024 — Presente",
      description:
        "Videos promocionales para vehículos, marcas comerciales y estudios: mensajes claros, estética cálida y enfoque en el detalle.",
      projects: ["Video vehículos Wankamotors", "Contenido Sowa Tattoos"],
    },
    {
      id: "exp-03",
      role: "Cobertura de Eventos",
      company: "Fiestas, Cumpleaños y Recepciones",
      period: "2024 — Presente",
      description:
        "Registro audiovisual de cafeterías, locales de recepciones y celebraciones con voz en off festiva y sentimental.",
      projects: ["Local Recepciones", "Cobertura catering"],
    },
  ],
};