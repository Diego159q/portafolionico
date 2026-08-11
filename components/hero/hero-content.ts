/**
 * Contenido de la sección "Hero" — Techno-Zen.
 * 100% data-driven (patrón *-content.ts del proyecto). Marca NICOLE ORE.
 */

export interface HeroContentType {
  eyebrow: string;
  /** Nombre / appellation mostrada en el h1 (se divide en dos líneas). */
  brand: string;
  ariaLabel: string;
  tagline: string;
  visual: {
    src: string;
    alt: string;
  };
  cta: {
    primary: { label: string; href: string };
    secondary: { label: string; href: string };
  };
}

export const HERO_CONTENT: HeroContentType = {
  eyebrow: "CREADORA DE CONTENIDO AUDIOVISUAL",
  brand: "NICOLE ORE",
  ariaLabel: "Introducción — NICOLE ORE",
  tagline: "CONTENIDO CON CALIDEZ Y LUZ PROPIA.",
  visual: {
    src: "/images/profile/hero-portrait.jpg",
    alt: "Retrato placeholder de Nicole Ore en un ambiente cálido y audiovisual.",
  },
  cta: {
    primary: { label: "VER PORTFOLIO", href: "#portfolio" },
    secondary: { label: "TRABAJEMOS JUNTAS", href: "#contact" },
  },
};
