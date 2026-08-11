/**
 * Contenido de la sección "Clientes" — Techno-Zen.
 * Grid de logos 100% data-driven, preparado para CMS.
 * Logos placeholder reemplazables por PNG/SVG reales (sin dependencias externas).
 */

export type ClientCategory =
  | "branding"
  | "production"
  | "editorial"
  | "digital";

export interface Client {
  /** Identificador único estable (keys / futuro CMS). */
  id: string;
  /** Nombre del cliente / marca. */
  name: string;
  /** Logo placeholder; se sustituye por SVG/PNG real. */
  logo: { src: string; alt: string };
  categoryId: ClientCategory;
  year: number;
}

export interface ClientContent {
  eyebrow: string;
  title: string;
  heading: string;
  description: string;
  categories: ClientCategory[];
  items: Client[];
}

export const CLIENT_CATEGORY_LABELS: Record<ClientCategory, string> = {
  branding: "Marca",
  production: "Producción",
  editorial: "Eventos",
  digital: "Redes",
};

const logo = { src: "/images/clients/placeholder.jpg", alt: "Logo placeholder de la marca" };

export const CLIENTS_CONTENT: ClientContent = {
  eyebrow: "Clientes",
  title: "Marcas",
  heading: "Marcas",
  description:
    "Marcas y negocios locales que confían en mi contenido audiovisual: con calidez, estrategia y luz propia.",
  categories: ["branding", "production", "editorial", "digital"],
  items: [
    { id: "cl-01", name: "Wankamotors", categoryId: "branding", year: 2024, logo },
    { id: "cl-02", name: "Unimac", categoryId: "production", year: 2024, logo },
    { id: "cl-03", name: "Sowa Tattoos", categoryId: "digital", year: 2024, logo },
    { id: "cl-04", name: "RYU Store", categoryId: "branding", year: 2024, logo },
    { id: "cl-05", name: "Adidas La Salle", categoryId: "production", year: 2024, logo },
    { id: "cl-06", name: "Local Recepciones", categoryId: "editorial", year: 2024, logo },
  ],
};