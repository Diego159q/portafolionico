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
    "Producción, edición y postproducción audiovisual. Una síntesis de narrativa rigurosa y estética minimalista, diseñada para que cada pieza comunique con ritmo y precisión.",
  services: [
    {
      id: "direccion-fotografia",
      index: "01",
      size: "large",
      icon: "architecture",
      title: "Dirección de Fotografía",
      description:
        "Planeación de luz, encuadre y cámara para construir la atmósfera visual de cada escena. Cuidamos la imagen desde el guion hasta el set.",
    },
    {
      id: "edicion-montaje",
      index: "02",
      size: "small",
      icon: "design_services",
      title: "Edición y Montaje",
      description:
        "Construcción del ritmo y la narrativa en postproducción, guiada por el concepto del montaje invisible.",
    },
    {
      id: "color-post",
      index: "03",
      size: "small",
      icon: "terminal",
      title: "Color y Postproducción",
      description:
        "Etalonaje, composición y acabado de imagen para dar coherencia y temperatura a cada proyecto.",
    },
    {
      id: "motion-graphics",
      index: "04",
      size: "large",
      icon: "brand_awareness",
      title: "Motion Graphics",
      description:
        "Diseño y animación de gráficos en movimiento para títulos, contenido digital y publicidad. La tipografía y la geometría al servicio de la narrativa.",
    },
  ],
  ctaLabel: "Iniciar Proyecto",
};
