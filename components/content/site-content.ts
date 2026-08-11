/**
 * Configuración global del sitio — NICOLE ORE.
 * Datos transversales usados por varios componentes (WhatsApp, redes, SEO).
 * TODO: sustituir WHATSAPP_NUMBER por el número real (formato internacional sin '+')
 * cuando el cliente lo proporcione.
 */

/** Número de WhatsApp en formato internacional, sin '+' ni espacios. */
export const WHATSAPP_NUMBER = "51999999999";

/** Mensaje precargado por defecto en el botón flotante. */
export const WHATSAPP_DEFAULT_MESSAGE =
  "Hola Nicole, vi tu portafolio y me interesa un video.";

/** Construye la URL de WhatsApp con mensaje precargado (encodeURIComponent). */
export function whatsappUrl(
  message: string = WHATSAPP_DEFAULT_MESSAGE,
): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Links de redes sociales con URLs reales cuando estén disponibles. */
export const SITE_SOCIALS = {
  instagram: "https://instagram.com/",
  tiktok: "https://tiktok.com/",
  linkedin: "https://linkedin.com/",
} as const;

/** Ubicación principal (SEO local). */
export const SITE_LOCATION = "Huancayo, Perú";
