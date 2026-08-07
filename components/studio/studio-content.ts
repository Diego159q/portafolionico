/**
 * Contenido de la sección "Sobre mí" (Studio) — Techno-Zen.
 * Datos separados de los componentes para facilitar edición o conexión
 * futura con backend/CMS. Todas las cadenas provienen del screen
 * "Sobre mí - Estilo Editorial Japones" de Stitch.
 */

export interface Discipline {
  /** Título del bloque en label-mono (ej. "SPECIALTIES"). */
  label: string;
  /** Ítems de la lista, en orden. */
  items: string[];
  /** Si true, cada fila muestra un indicador de flecha en hover (Stitch). */
  arrow?: boolean;
}

export interface Value {
  /** Número secuencial en formato "01". */
  index: string;
  /** Nombre del valor. */
  label: string;
}

export interface StudioContent {
  eyebrow: string;
  statement: string;
  quote: string;
  disciplinesTitle: string;
  valuesLabel: string;
  specialties: Discipline;
  skills: Discipline;
  values: Value[];
}

export const STUDIO_CONTENT: StudioContent = {
  eyebrow: "Trayectoria Profesional",
  statement:
    "Fusionando la precisión arquitectónica con la fluidez digital durante más de una década.",
  quote:
    "El diseño no es meramente visual; es estructural. El vacío es tan fundamental como la masa. Mi práctica se centra en crear experiencias que perduran, eliminando la fricción para revelar la intención pura.",
  disciplinesTitle: "Disciplinas Principales",
  valuesLabel: "Valores",
  specialties: {
    label: "Especialidades",
    arrow: true,
    items: [
      "Diseño de Experiencias",
      "Arquitectura Técnica",
      "Estrategia Digital",
    ],
  },
  skills: {
    label: "Habilidades",
    items: [
      "UI/UX Moderno",
      "Codificación Creativa",
      "Diseño de Sistemas",
      "Gráficos en Movimiento",
    ],
  },
  values: [
    { index: "01", label: "Precisión" },
    { index: "02", label: "Intencionalidad" },
    { index: "03", label: "Silencio" },
    { index: "04", label: "Innovación" },
  ],
};

/** Imagen del estudio (descargada de Stitch, /public/images/studio). */
export const STUDIO_IMAGE = {
  src: "/images/studio/studio-workspace.jpg",
  alt: "Estudio de trabajo arquitectónico en blanco y negro, estilo techno-zen.",
  /** Width/height del asset original (1408x768), para next/image. */
  width: 1408,
  height: 768,
} as const;
