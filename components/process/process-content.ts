/**
 * Contenido de la sección "Cómo Trabajo" (Proceso) — Techno-Zen.
 * 100% data-driven, preparado para backend/CMS.
 */

export interface ProcessStep {
  /** Número del paso en formato "01". */
  index: string;
  /** Nombre del paso. */
  title: string;
  /** Qué ocurre en este paso. */
  description: string;
}

export interface ProcessContent {
  eyebrow: string;
  title: string;
  heading: string;
  description: string;
  steps: ProcessStep[];
}

export const PROCESS_CONTENT: ProcessContent = {
  eyebrow: "Proceso",
  title: "Cómo Trabajo",
  heading: "Cómo Trabajo",
  description:
    "Un flujo claro y transparente de principio a fin. Sabes qué pasa en cada etapa y cuándo tendrás tu video.",
  steps: [
    {
      index: "01",
      title: "Briefing",
      description:
        "Hablamos de tu marca, tu idea y tu objetivo. Me cuentas qué quieres comunicar y para quién.",
    },
    {
      index: "02",
      title: "Guion",
      description:
        "Diseño el mensaje, las tomas y la voz en off. Recibes el guion para aprobar antes de grabar.",
    },
    {
      index: "03",
      title: "Grabación",
      description:
        "Agendamos la fecha y grabamos con calidez y cuidado del detalle, en tu local o locación.",
    },
    {
      index: "04",
      title: "Edición",
      description:
        "Montaje, color, música y voz en off. Cada corte pensado para que la pieza se sienta humana y lista para redes.",
    },
    {
      index: "05",
      title: "Entrega",
      description:
        "Te entrego el video final en los formatos que necesites, listo para publicar en tus redes.",
    },
  ],
};
