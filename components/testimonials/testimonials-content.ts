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
    "Las palabras de productoras, directores y marcas que han confiado en mi trabajo audiovisual.",
  items: [
    {
      id: "ts-01",
      quote:
        "Su ojo para el ritmo y el color llevó la pieza a un nivel que no habíamos imaginado. El resultado habló por si solo.",
      author: "Nombre Apellido Placeholder",
      role: "Directora de Fotografía",
      company: "Productora Citric",
      avatar: avatar,
    },
    {
      id: "ts-02",
      quote:
        "Rápida, precisa y con una sensibilidad enorme para la narración. Nuestras campañas nunca lucieron tan bien.",
      author: "Nombre Apellido Placeholder",
      role: "Productor Ejecutivo",
      company: "Estudio Kyoto",
      avatar: avatar,
    },
    {
      id: "ts-03",
      quote:
        "Del guion a la postproducción, cada decisión tuvo propósito. Una colaboración impecable de principio a fin.",
      author: "Nombre Apellido Placeholder",
      role: "Directora de Marca",
      company: "Agencia Kuro",
      avatar: avatar,
    },
  ],
};