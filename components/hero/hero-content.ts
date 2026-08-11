/**
 * Contenido de la sección "Hero" — Techno-Zen.
 * 100% data-driven (patrón *-content.ts del proyecto). Placeholder audiovisual.
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
  eyebrow: "DIRECTORA DE FOTOGRAFÍA & EDITORA",
  brand: "NICO",
  ariaLabel: "Introducción — NICO",
  tagline: "NARRATIVA, RITMO Y LUZ.",
  visual: {
    src: "/images/profile/hero-portrait.jpg",
    alt: "Retrato placeholder de NICO en un ambiente minimalista techno-zen.",
  },
  cta: {
    primary: { label: "VER PORTFOLIO", href: "#portfolio" },
    secondary: { label: "EXPLORAR SERVICIOS", href: "#services" },
  },
};
