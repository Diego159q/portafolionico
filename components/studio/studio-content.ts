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
    "Cine, edición y dirección de fotografía con sensibilidad narrativa y precisión técnica.",
  quote:
    "La imagen es lenguaje. Cada plano, cada corte y cada luz sostienen el ritmo de la historia. Mi práctica busca eliminar lo superfluo para que la intención de cada pieza se revele con claridad.",
  disciplinesTitle: "Disciplinas Principales",
  valuesLabel: "Valores",
  specialties: {
    label: "Especialidades",
    arrow: true,
    items: [
      "Dirección de Fotografía",
      "Edición y Montaje",
      "Producción Audiovisual",
    ],
  },
  skills: {
    label: "Habilidades",
    items: [
      "Etalonaje y Color",
      "Diseño Sonoro",
      "Motion Graphics",
      "Contenido Digital",
    ],
  },
  values: [
    { index: "01", label: "Ritmo" },
    { index: "02", label: "Intencionalidad" },
    { index: "03", label: "Silencio" },
    { index: "04", label: "Precisión" },
  ],
};

/** Imagen del estudio (descargada de Stitch, /public/images/studio). */
export const STUDIO_IMAGE = {
  src: "/images/studio/studio-workspace.jpg",
  alt: "Estudio de trabajo en blanco y negro, estilo techno-zen, con equipos de postproducción.",
  /** Width/height del asset original (1408x768), para next/image. */
  width: 1408,
  height: 768,
} as const;
