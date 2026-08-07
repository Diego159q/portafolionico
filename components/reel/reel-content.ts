/**
 * Contenido de la sección "Reel Destacado" (Showreel) — Techno-Zen.
 * 100% data-driven: los datos viven aquí como si fueran la respuesta de una API.
 * Para conectar con un backend/CMS en el futuro basta sustituir REELS_CONTENT
 * o getReels() por un fetch — sin modificar ningún componente.
 */

/** Proveedor de video soportado por el player. */
export type ReelProvider = "youtube" | "vimeo" | "mp4";

export interface ReelVideo {
  provider: ReelProvider;
  /** URL del video. Vacío = placeholder (solo se muestra el póster). */
  url: string;
  autoplay: boolean;
}

export interface ReelPoster {
  src: string;
  alt: string;
}

export interface ReelCta {
  label: string;
  href: string;
}

export interface Reel {
  /** Identificador único estable (keys / futuro API). */
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  poster: ReelPoster;
  video: ReelVideo;
  /** Duración en segundos de la pieza. */
  duration: number;
  year: number;
  /** Marca para futura lógica de destacado/orden. */
  featured: boolean;
  cta: ReelCta;
}

/** Reel destacado de la sección (un solo elemento visible por el momento). */
export const REEL: Reel = {
  id: "showreel-2026",
  eyebrow: "Reel Destacado",
  title: "Showreel 2026",
  description:
    "Dirección, edición, post-producción y diseño sonoro. Una mirada a mi lenguaje audiovisual: narrativa, ritmo y estética. Conoce el trabajo a través de una selección de mis piezas más recientes.",
  poster: {
    src: "/images/reel/reel-poster.jpg",
    alt: "Póster del showreel 2026",
  },
  video: {
    provider: "youtube",
    url: "",
    autoplay: false,
  },
  duration: 90,
  year: 2026,
  featured: true,
  cta: {
    label: "Ver Portfolio",
    href: "#portfolio",
  },
};

/** Lista de reels disponibles. Hoy solo uno; en el futuro puede crecer desde la API. */
export const REELS: Reel[] = [REEL];

/** Acceso tipado (proxy del backend) al reel destacado. */
export function getFeaturedReel(): Reel {
  return REELS.find((r) => r.featured) ?? REELS[0];
}