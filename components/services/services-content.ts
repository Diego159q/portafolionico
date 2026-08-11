/**
 * Contenido de la sección "Services" — Techno-Zen.
 * Datos separados de los componentes, preparados para futura conexión
 * con backend/CMS. Cadenas y estructura fieles al screen
 * "Servicios - Portafolio Premium Techno-Zen" (Stitch).
 */

export type ServiceIconName =
  | "architecture"
  | "design_services"
  | "terminal"
  | "brand_awareness";

export type ServiceSize = "large" | "small";

export interface Service {
  /** Identificador único (estable para keys / futuro API). */
  id: string;
  /** Número de orden mostrado (ej. "01"). */
  index: string;
  /** Tamaño de la tarjeta dentro del bento grid. */
  size: ServiceSize;
  /** Nombre del icono SVG inline (ver ServiceIcon). */
  icon: ServiceIconName;
  title: string;
  description: string;
}

export interface ServicesContent {
  eyebrow: string;
  title: string;
  intro: string;
  services: Service[];
  ctaLabel: string;
}

export const SERVICES_CONTENT: ServicesContent = {
  eyebrow: "Ofertas",
  title: "Servicios",
  intro:
    "Producción de contenido para marcas, eventos y redes sociales. Desde la idea y el guion hasta la voz en off, la grabación y la edición final.",
  services: [
    {
      id: "video-redes",
      index: "01",
      size: "large",
      icon: "architecture",
      title: "Video para Redes",
      description:
        "Producción de Reels, TikTok y Shorts para marcas que quieren conectar con una audiencia real sin perder calidad visual.",
    },
    {
      id: "guion-voz",
      index: "02",
      size: "small",
      icon: "design_services",
      title: "Guion y Voz en Off",
      description:
        "Construcción de mensajes claros, cálidos y estratégicos para videos promocionales, eventos y contenido social.",
    },
    {
      id: "eventos",
      index: "03",
      size: "small",
      icon: "terminal",
      title: "Cobertura de Eventos",
      description:
        "Registro audiovisual para fiestas, celebraciones, activaciones y momentos de marca con una mirada cercana.",
    },
    {
      id: "contenido-marca",
      index: "04",
      size: "large",
      icon: "brand_awareness",
      title: "Contenido de Marca",
      description:
        "Videos promocionales para belleza, clínicas, vehículos, inmobiliarias y negocios que necesitan verse profesionales sin sentirse fríos.",
    },
  ],
  ctaLabel: "Trabajemos Juntas",
};
