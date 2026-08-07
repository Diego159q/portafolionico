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
  editorial: "Editorial",
  digital: "Digital",
};

const logo = { src: "/images/clients/placeholder.jpg", alt: "Logo placeholder del cliente" };

export const CLIENTS_CONTENT: ClientContent = {
  eyebrow: "Clientes",
  title: "Marcas",
  heading: "Marca",
  description:
    "Una seleccion de marcas y productoras con las que he colaborado en campana, contenido editorial y piezas audiovisuales. Logos de ejemplo.",
  categories: ["branding", "production", "editorial", "digital"],
  items: [
    { id: "cl-01", name: "Marca Uno Placeholder", categoryId: "branding", year: 2024, logo },
    { id: "cl-02", name: "Productora Hello", categoryId: "production", year: 2023, logo },
    { id: "cl-03", name: "Revista Void", categoryId: "editorial", year: 2023, logo },
    { id: "cl-04", name: "Beta Digital", categoryId: "digital", year: 2022, logo },
    { id: "cl-05", name: "Plaza Media", categoryId: "production", year: 2022, logo },
    { id: "cl-06", name: "Studio Norte", categoryId: "branding", year: 2021, logo },
    { id: "cl-07", name: "Focus Lab", categoryId: "digital", year: 2021, logo },
    { id: "cl-08", name: "Tinta Content", categoryId: "editorial", year: 2020, logo },
  ],
};