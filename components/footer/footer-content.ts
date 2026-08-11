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
  brand: "NICOLE ORE",
  nav: [
    { href: "#portfolio", label: "Portfolio" },
    { href: "#studio", label: "Studio" },
    { href: "#services", label: "Servicios" },
    { href: "#contact", label: "Contacto" },
  ],
  socials: [
    { id: "whatsapp", label: "WhatsApp", url: "https://wa.me/" },
    { id: "instagram", label: "Instagram", url: "https://instagram.com/" },
    { id: "linkedin", label: "LinkedIn", url: "https://linkedin.com/" },
  ],
  tagline:
    "Contenido audiovisual para marcas, eventos y redes sociales con calidez, estrategia y luz propia.",
  copyright: "© 2026 NICOLE ORE. Todos los derechos reservados.",
  legal: [
    { href: "/legal/privacy", label: "Privacidad" },
    { href: "/legal/terms", label: "Términos" },
  ],
};
