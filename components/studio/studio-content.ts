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
    "Contenido audiovisual para marcas que buscan verse cercanas, cálidas y memorables.",
  quote:
    "No solo grabo: pienso la estrategia detrás de cada video. Combino negocios, marketing y producción creativa para construir piezas que se sienten humanas, luminosas y listas para redes.",
  disciplinesTitle: "Disciplinas Principales",
  valuesLabel: "Valores",
  specialties: {
    label: "Especialidades",
    arrow: true,
    items: [
      "Contenido para Marcas",
      "Reels / TikTok / Shorts",
      "Cobertura de Eventos",
    ],
  },
  skills: {
    label: "Habilidades",
    items: [
      "Guion y Voz en Off",
      "Grabación y Edición",
      "Marketing de Contenidos",
      "Estética Cozy / Cálida",
    ],
  },
  values: [
    { index: "01", label: "Calidez" },
    { index: "02", label: "Cercanía" },
    { index: "03", label: "Autenticidad" },
    { index: "04", label: "Creatividad" },
  ],
};

/** Imagen del estudio (descargada de Stitch, /public/images/studio). */
export const STUDIO_IMAGE = {
  src: "/images/studio/studio-workspace.jpg",
  alt: "Espacio de producción audiovisual con estética cálida y enfoque de contenido.",
  /** Width/height del asset original (1408x768), para next/image. */
  width: 1408,
  height: 768,
} as const;
