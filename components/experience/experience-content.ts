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
    "Una cronologia de trabajo en produccion, edicion y postproduccion audiovisual. Cada etapa construyo la sensibilidad de ritmo e imagen con la que hoy abordo cada pieza.",
  items: [
    {
      id: "exp-01",
      role: "Editora y Postproductora",
      company: "Estudio Audiovisual Placeholder",
      period: "2023 — Presente",
      description:
        "Montaje y postproduccion de piezas de marca, documental breve y contenido digital multiplataforma.",
      projects: ["Spot placeholder 03", "Serie documental 07"],
    },
    {
      id: "exp-02",
      role: "Motion & VFX Lead",
      company: "Productora Independente Placeholder",
      period: "2021 — 2023",
      description:
        "Direccion de motion graphics, composicion y acabado de color para contenido publicitario y cinematografico.",
      projects: ["Campana 02", "Videoclip 05"],
    },
    {
      id: "exp-03",
      role: "Asistente de Direccion y Fotografia",
      company: "Estudio Audiovisual Placeholder",
      period: "2019 — 2021",
      description:
        "Apoyo en rodaje, directa de fotografia, luz y continuidad en cortometrajes y piezas corporativas.",
      projects: ["Corto 01", "Editorial 04"],
    },
  ],
};