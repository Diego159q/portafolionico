/**
 * Contenido de la sección "Educación" — Techno-Zen.
 * Académico 100% data-driven, preparado para backend/CMS.
 * Placeholders orientados a formación audiovisual (cine, edición, fotografía).
 */

export interface EducationItem {
  /** Identificador único estable (keys / futuro API). */
  id: string;
  /** Institución. */
  institution: string;
  /** Carrera / título. */
  degree: string;
  /** Periodo textual (p.ej. "2015 — 2019"). */
  period: string;
  /** Cursos destacados (placeholder). */
  courses: string[];
  /** Certificaciones obtenidas (placeholder). */
  certifications: string[];
}

export interface EducationContent {
  eyebrow: string;
  title: string;
  heading: string;
  description: string;
  items: EducationItem[];
}

export const EDUCATION_CONTENT: EducationContent = {
  eyebrow: "Formación",
  title: "Educación",
  heading: "Formación Académica",
  description:
    "Estudios y formación continua en direccion audiovisual, edicion y fotografia. Una base academica que sostiene el criterio de imagen y narracion.",
  items: [
    {
      id: "edu-01",
      institution: "Escuela de Cine Placeholder",
      degree: "Licenciatura en Comunicacion Audiovisual",
      period: "2015 — 2019",
      courses: ["Direccion de cine", "Montaje 1 - 2", "Direccion de fotografia"],
      certifications: ["Certificación da Resolve avanzado"],
    },
    {
      id: "edu-02",
      institution: "Instituto de Artes Placeholder",
      degree: "Diplomado en Retoque de Imagen y Color",
      period: "2020",
      courses: ["Etalonaje digital", "Composteo avanzado"],
      certifications: ["Adobe Certified Professional"],
    },
    {
      id: "edu-03",
      institution: "Plataforma de CursosPlaceholder",
      degree: "Especializacion en Produccion de Contenido Digital",
      period: "2021",
      courses: ["Contenido multiplataforma", "Narrativa digital"],
      certifications: ["Certificación en Produccion Digital"],
    },
  ],
};