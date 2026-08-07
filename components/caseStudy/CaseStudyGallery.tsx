import Image from "next/image";
import type { CaseStudy } from "./caseStudy-content";
import { Reveal } from "@/components/ui/motion";

/** Altura a sangre completa según el dato `height` del medio (default 80vh). */
function galleryHeightClass(height?: CaseStudy["finals"][number]["height"]) {
  switch (height) {
    case "70vh":
      return "h-[70vh]";
    case "90vh":
      return "h-[90vh]";
    default:
      return "h-[80vh]";
  }
}

/**
 * "03 // FINAL EXECUTION". Galería de imágenes a sangre completa apiladas,
 * cada una con tratamiento grayscale/color según data.
 */
export function CaseStudyGallery({ study }: { study: CaseStudy }) {
  const { finalHeading, finals } = study;

  return (
    <section id="execution" className="mb-section-gap">
      <h3 className="mb-8 px-margin-mobile font-label-mono text-label-mono uppercase tracking-widest text-on-surface-variant md:px-margin-desktop">
        {finalHeading}
      </h3>
      {finals.map((media, i) => (
        <Reveal key={media.src} delay={i * 0.05}>
          <div className={`relative mb-unit w-full ${galleryHeightClass(media.height)}`}>
            <Image
              src={media.src}
              alt={media.alt}
              fill
              sizes="100vw"
              className={media.treatment === "grayscale" ? "object-cover grayscale" : "object-cover"}
            />
          </div>
        </Reveal>
      ))}
    </section>
  );
}