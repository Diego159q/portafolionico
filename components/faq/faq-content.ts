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
    "Respuestas a las dudas más habituales sobre producción, plazos, formatos y colaboracion.",
  items: [
    {
      id: "faq-01",
      order: 1,
      question: "¿En qué formatos y plataformas trabajas?",
      answer:
        "Trabajo desde piezas para redes sociales y contenido digital hasta largometraje, documental y publicidad. El entregable se adapta al medio.",
    },
    {
      id: "faq-02",
      order: 2,
      question: "¿Cuál es el tiempo estimado de entrega?",
      answer:
        "Depende del alcance y la plataforma. Un spot suele requerir de 2 a 4 semanas y un documental de 4 a 8. Lo acordamos todo antes de empezar.",
    },
    {
      id: "faq-03",
      order: 3,
      question: "¿Trabajas con clientes remotos?",
      answer:
        "Sí. Colaboro de forma remota con productoras, agencias y marcas en todo el mundo, coordinando procesos por medios digitales.",
    },
    {
      id: "faq-04",
      order: 4,
      question: "¿Entregas los archivos de proyecto editables?",
      answer:
        "Sí. Puedo entregar proyectos editables para que el equipo continúe la postproduccion, ademas de los entregables finales en alta calidad.",
    },
  ],
};