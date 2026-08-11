/**
 * Contenido de la navegación (TopNav) — Techno-Zen.
 * 100% data-driven, preparado para backend/CMS.
 * Los anchors coinciden con los ids reales de las secciones de la home.
 */
import type { NavItem } from "@/components/layout/TopNav";

/** Marca mostrada en el TopNav (logo texto). */
export const BRAND = "NICO";

export interface NavigationEntry {
  /** Etiqueta del ítem (en mayúsculas en el render). */
  label: string;
  /** Anchor a la sección real. */
  href: string;
  /** Orden de aparición en el menú. */
  order: number;
}

/**
 * Navegación final del portafolio audiovisual.
 * WORKS -> #portfolio · STUDIO -> #studio · SERVICES -> #services
 * PROCESS -> #experience · CONTACT -> #contact
 */
export const NAVIGATION: NavigationEntry[] = [
  { label: "TRABAJOS", href: "#portfolio", order: 0 },
  { label: "ESTUDIO", href: "#studio", order: 1 },
  { label: "SERVICIOS", href: "#services", order: 2 },
  { label: "PROCESO", href: "#experience", order: 3 },
  { label: "CONTACTO", href: "#contact", order: 4 },
];

/** Ítems de navegación ordenados y adaptados al tipo NavItem de TopNav. */
export const NAV_ITEMS: NavItem[] = [...NAVIGATION]
  .sort((a, b) => a.order - b.order)
  .map(({ label, href }) => ({ label, href }));