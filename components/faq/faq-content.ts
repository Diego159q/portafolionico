/**
 * Contenido de la sección "FAQ" — Techno-Zen.
 * Accordion 100% data-driven, preparado para backend/CMS.
 * Preguntas orientadas a servicios audiovisuales.
 */

export interface FaqItem {
  /** Identificador único estable (keys / futuro API). */
  id: string;
  question: string;
  answer: string;
  /** Orden de visualización (sirve al backend). */
  order: number;
}

export interface FaqContent {
  eyebrow: string;
  title: string;
  heading: string;
  description: string;
  items: FaqItem[];
}

export const FAQ_CONTENT: FaqContent = {
  eyebrow: "FAQ",
  title: "Preguntas",
  heading: "Preguntas Frecuentes",
  description:
    "Respuestas a las dudas más habituales sobre producción de contenido, plazos, formatos y colaboración.",
  items: [
    {
      id: "faq-01",
      order: 1,
      question: "¿En qué formatos y plataformas trabajas?",
      answer:
        "Produzco contenido para Reels, TikTok y Shorts, además de videos promocionales para marcas, cumplen mejor con lo que tu negocio necesita.",
    },
    {
      id: "faq-02",
      order: 2,
      question: "¿Cuánto tiempo toma un proyecto?",
      answer:
        "Depende del alcance. Un Reel o video corto suele estar listo en pocos días y un proyecto completo de marca de 1 a 2 semanas. Lo acordamos todo antes de empezar.",
    },
    {
      id: "faq-03",
      order: 3,
      question: "¿Trabajas con clientes de otras ciudades?",
      answer:
        "Sí. Coordino guiones e ideas por mensaje y videollamada; si la grabación es presencial y yo no puedo trasladarme, el cliente me envía el material y me encargo de la línea creativa y la edición.",
    },
    {
      id: "faq-04",
      order: 4,
      question: "¿Qué necesito para empezar?",
      answer:
        "Solo contarme tu idea o tu marca. Yo me encargo del guion, la grabación (si es en Huancayo), la voz en off y la edición final lista para publicar.",
    },
  ],
};