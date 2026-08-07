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
  title: "Servicios y Expertise",
  intro:
    "Forjando arquitecturas digitales que trascienden la mera funcionalidad. Una síntesis de lógica rigurosa y principios estéticos minimalistas, diseñada para la escala y la precisión.",
  services: [
    {
      id: "digital-architecture",
      index: "01",
      size: "large",
      icon: "architecture",
      title: "Arquitectura Digital",
      description:
        "Planos estructurales para ecosistemas digitales complejos. Aseguramos fundamentos escalables, resilientes y lógicos antes de comenzar la ejecución visual.",
    },
    {
      id: "uiux-strategy",
      index: "02",
      size: "small",
      icon: "design_services",
      title: "Estrategia UI/UX",
      description:
        "Traducimos la intención humana en interfaces sin fricción, guiadas por el concepto de 'Ma'.",
    },
    {
      id: "creative-tech",
      index: "03",
      size: "small",
      icon: "terminal",
      title: "Tecnología Creativa",
      description:
        "Uniendo código y diseño a través de WebGL, generación procedural e interacciones cinéticas.",
    },
    {
      id: "brand-systems",
      index: "04",
      size: "large",
      icon: "brand_awareness",
      title: "Sistemas de Marca",
      description:
        "Desarrollo de lenguajes de diseño cohesivos y algorítmicos. El rigor tipográfico se une a principios de cuadrícula estrictos para formar identidades digitales inconfundibles.",
    },
  ],
  ctaLabel: "Iniciar Proyecto",
};
