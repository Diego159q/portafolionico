/**
 * Contenido de la sección "Contacto" — Techno-Zen.
 * 100% data-driven, preparado para backend/CMS.
 * Email y redes sociales placeholder. Formulario sin conectar a servicios externos.
 */

export interface SocialLink {
  id: string;
  label: string;
  /** URL de la red social (placeholder). */
  url: string;
}

export interface ContactContent {
  eyebrow: string;
  title: string;
  heading: string;
  description: string;
  email: string;
  socials: SocialLink[];
  form: {
    /** Etiqueta del botón de envío. */
    submitLabel: string;
    /** Nombre y aria-label del campo nombre. */
    nameLabel: string;
    /** Nombre y aria-label del campo email. */
    emailLabel: string;
    /** Nombre y aria-label del campo mensaje. */
    messageLabel: string;
  };
}

export const CONTACT_CONTENT: ContactContent = {
  eyebrow: "Contacto",
  title: "Contacto",
  heading: "Trabajemos",
  description:
    "¿Tienes un proyecto audiovisual en mente? Escríbeme y hablemos de ritmo, imagen y narrativa.",
  email: "hola@tuportafolio.com",
  socials: [
    { id: "vimeo", label: "Vimeo", url: "https://vimeo.com/" },
    { id: "instagram", label: "Instagram", url: "https://instagram.com/" },
    { id: "linkedin", label: "LinkedIn", url: "https://linkedin.com/" },
  ],
  form: {
    submitLabel: "Enviar mensaje",
    nameLabel: "Nombre",
    emailLabel: "Email",
    messageLabel: "Mensaje",
  },
};