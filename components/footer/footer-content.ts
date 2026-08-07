/**
 * Contenido del "Footer" final — Techno-Zen.
 * 100% data-driven, preparado para backend/CMS.
 */

export interface FooterNavItem {
  href: string;
  label: string;
}

export interface FooterSocial {
  id: string;
  label: string;
  url: string;
}

export interface FooterContent {
  /** Nombre / marca de la profesional. */
  brand: string;
  /** Navegación principal (anclas a secciones reales de la home). */
  nav: FooterNavItem[];
  /** Redes sociales. */
  socials: FooterSocial[];
  /** Línea de copyright (placeholder). */
  copyright: string;
  /** Links legales opcionales. */
  legal: FooterNavItem[];
  /** Micro texto de apoyo (opcional). */
  tagline: string;
}

export const FOOTER_CONTENT: FooterContent = {
  brand: "Estudio Audiovisual",
  nav: [
    { href: "#portfolio", label: "Portfolio" },
    { href: "#studio", label: "Studio" },
    { href: "#services", label: "Servicios" },
    { href: "#contact", label: "Contacto" },
  ],
  socials: [
    { id: "vimeo", label: "Vimeo", url: "https://vimeo.com/" },
    { id: "instagram", label: "Instagram", url: "https://instagram.com/" },
    { id: "linkedin", label: "LinkedIn", url: "https://linkedin.com/" },
  ],
  tagline:
    "Dirección, edición y postproducción audiovisual con foco en el ritmo y la imagen.",
  copyright: "© 2026 Estudio Audiovisual. Todos los derechos reservados.",
  legal: [
    { href: "/legal/privacy", label: "Privacidad" },
    { href: "/legal/terms", label: "Términos" },
  ],
};