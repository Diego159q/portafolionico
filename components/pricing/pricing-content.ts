/**
 * Contenido de la sección "Formatos y Tarifas" — Techno-Zen.
 * 100% data-driven, preparado para backend/CMS.
 * Los precios son placeholders (S/ 00) hasta que NICOLE ORE confirme tarifas reales.
 */

export interface PricingFeature {
  label: string;
}

export interface PricingTier {
  id: string;
  /** Índice visual "01/02/03". */
  index: string;
  /** Nombre del paquete. */
  title: string;
  /** Descripción corta. */
  description: string;
  /** Precio en soles (placeholder). */
  price: string;
  /** Nota del precio (p.ej. "desde", "por pieza"). */
  priceNote: string;
  /** Características incluidas. */
  features: PricingFeature[];
  /** Tamaño de la tarjeta en el bento. */
  size: "large" | "small";
  /** Destacado (acento crimson). */
  highlighted?: boolean;
}

export interface PricingContent {
  eyebrow: string;
  title: string;
  heading: string;
  description: string;
  tiers: PricingTier[];
  ctaLabel: string;
  note: string;
}

export const PRICING_CONTENT: PricingContent = {
  eyebrow: "Tarifas",
  title: "Formatos",
  heading: "Formatos y Tarifas",
  description:
    "Paquetes claros para que sepas exactamente qué incluye cada producción. Si necesitas algo a medida, escríbeme y lo armamos.",
  tiers: [
    {
      id: "reel-express",
      index: "01",
      title: "REEL EXPRESS",
      description:
        "Una pieza vertical lista para Reels, TikTok o Shorts. Ideal para dar a conocer un producto o servicio.",
      price: "S/ 00",
      priceNote: "desde · por pieza",
      size: "large",
      features: [
        { label: "Guion y concepto" },
        { label: "Grabación en locación" },
        { label: "Voz en off (opcional)" },
        { label: "Edición y entrega final" },
      ],
    },
    {
      id: "cobertura-evento",
      index: "02",
      title: "COBERTURA EVENTO",
      description:
        "Cumpleaños, recepciones, activaciones o celebraciones. Registro completo con narrativa emocional.",
      price: "S/ 00",
      priceNote: "desde · por evento",
      size: "small",
      features: [
        { label: "Cobertura en el lugar" },
        { label: "Voz en off festiva" },
        { label: "Edición con ritmo cálido" },
      ],
    },
    {
      id: "contenido-mensual",
      index: "03",
      title: "CONTENIDO MENSUAL",
      description:
        "Plan de contenido recurrente para marcas: varias piezas al mes con estrategia y consistencia visual.",
      price: "S/ 00",
      priceNote: "desde · por mes",
      size: "small",
      highlighted: true,
      features: [
        { label: "Calendario de contenidos" },
        { label: "X piezas mensuales" },
        { label: "Guion y voz en off" },
      ],
    },
  ],
  ctaLabel: "Cotizar por WhatsApp",
  note: "Precios referenciales. El valor final depende del alcance, locación y materiales. ¡Conversemos tu proyecto!",
};
