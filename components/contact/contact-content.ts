/**
 * Contenido de la sección "Contacto" — Techno-Zen.
 * 100% data-driven, preparado para backend/CMS.
 * Email y redes sociales por confirmar. Formulario conectado a Supabase (Server Action).
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

import { whatsappUrl, SITE_SOCIALS } from "@/components/content/site-content";

export const CONTACT_CONTENT: ContactContent = {
  eyebrow: "Contacto",
  title: "Contacto",
  heading: "Trabajemos",
  description:
    "¿Tienes una marca, un evento o una idea en mente? Escríbeme y hagámoslo brillar con calidez y luz propia.",
  email: "hola@nicoleore.com",
  socials: [
    { id: "instagram", label: "Instagram", url: SITE_SOCIALS.instagram },
    { id: "whatsapp", label: "WhatsApp", url: whatsappUrl() },
    { id: "tiktok", label: "TikTok", url: SITE_SOCIALS.tiktok },
  ],
  form: {
    submitLabel: "Enviar mensaje",
    nameLabel: "Nombre",
    emailLabel: "Email",
    messageLabel: "Mensaje",
  },
};