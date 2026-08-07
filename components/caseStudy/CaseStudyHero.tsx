import Image from "next/image";
import type { CaseStudy } from "./caseStudy-content";

/** Altura del hero según el dato `height` del medio (default 90vh). */
function heroHeightClass(height?: CaseStudy["heroImage"]["height"]) {
  switch (height) {
    case "70vh":
      return "h-[70vh]";
    case "80vh":
      return "h-[80vh]";
    default:
      return "h-[70vh] md:h-[90vh]";
  }
}

/**
 * Hero del Case Study: cabecera editorial (grid 12-col, items-end) + imagen
 * a sangre completa con overlay sumi. Data-driven desde `study`.
 */
export function CaseStudyHero({ study }: { study: CaseStudy }) {
  const { projectTitle, client, tagline, heroImage } = study;

  return (
    <>
      <header className="items-end gap-gutter px-margin-mobile pb-0 pt-32 md:px-margin-desktop md:pt-48">
        <div className="grid grid-cols-4 gap-gutter md:grid-cols-12">
          <div className="col-span-4 md:col-span-8">
            <h1 className="font-headline text-display-lg-mobile font-bold uppercase tracking-[-0.04em] text-on-background md:text-display-lg">
              Project
              <br aria-hidden="true" />
              {projectTitle}
            </h1>
          </div>
          <div className="col-span-4 pb-4 md:col-span-3 md:col-start-10">
            <p className="font-label-mono text-label-mono uppercase tracking-widest text-on-surface-variant">
              {client}
            </p>
            <p className="mt-3 font-body text-body-md text-on-surface-variant">{tagline}</p>
          </div>
        </div>
      </header>

      <section className="group relative mb-section-gap overflow-hidden">
        <div className={`relative w-full ${heroHeightClass(heroImage.height)}`}>
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            sizes="100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-sumi/20" />
        </div>
      </section>
    </>
  );
}