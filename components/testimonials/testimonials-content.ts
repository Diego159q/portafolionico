/**
 * Contenido de la sección "Testimonios" — Techno-Zen.
 * Cards minimalistas 100% data-driven, preparado para backend/CMS.
 * Avatares opcionales (placeholder).
 */

export interface Testimonial {
  /** Identificador único estable (keys / futuro API). */
  id: string;
  /** Comentario / reseña. */
  quote: string;
  /** Autor del comentario. */
  author: string;
  /** Cargo del autor. */
  role: string;
  /** Empresa o productora del autor. */
  company: string;
  /** Avatar opcional. */
  avatar?: { src: string; alt: string };
}

export interface TestimonialsContent {
  eyebrow: string;
  title: string;
  heading: string;
  description: string;
  items: Testimonial[];
}

const avatar = { src: "/images/software/placeholder.jpg", alt: "Retrato placeholder" };

export const TESTIMONIALS_CONTENT: TestimonialsContent = {
  eyebrow: "Referencias",
  title: "Testimonios",
  heading: "Cita",
  description:
    "Las palabras de marcas y negocios locales que han confiado en mi contenido audiovisual.",
  items: [
    {
      id: "ts-01",
      quote:
        "Nicole le dio a nuestro contenido la calidez que buscábamos. Reels claros, cercanos y con un acabado súper profesional.",
      author: "Marca Wankamotors",
      role: "Cliente — Vehículos",
      company: "Wankamotors",
      avatar: avatar,
    },
    {
      id: "ts-02",
      quote:
        "Su trabajo con los videos promocionales fue impecable: entendió el mensaje y lo convirtió en una pieza que se siente humana y cercana.",
      author: "Sowa Tattoos",
      role: "Cliente — Estudio",
      company: "Sowa Tattoos",
      avatar: avatar,
    },
    {
      id: "ts-03",
      quote:
        "La voz en off y la edición elevaron la cobertura de nuestro evento. El video quedó sentimental, cálido y perfecto para redes.",
      author: "Local Recepciones",
      role: "Cliente — Eventos",
      company: "Local Recepciones",
      avatar: avatar,
    },
  ],
};