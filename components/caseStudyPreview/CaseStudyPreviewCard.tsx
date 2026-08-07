import Link from "next/link";
import Image from "next/image";
import type { CaseStudy } from "@/components/caseStudy/caseStudy-content";
import { CATEGORY_LABELS } from "@/components/portfolio/portfolio-content";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/motion";
import { CASE_STUDY_PREVIEW_CONTENT } from "./caseStudyPreview-content";

interface CaseStudyPreviewCardProps {
  study: CaseStudy;
}

/**
 * Tarjeta editorial del proyecto destacado (server component).
 * Enlaza dinámicamente a /case-study/[slug]. Usa SOLO los datos del modelo
 * CaseStudy (imagen, categoria, año, tagline, slug) sin duplicar contenido.
 */
export function CaseStudyPreviewCard({ study }: CaseStudyPreviewCardProps) {
  return (
    <Reveal>
      <article
        aria-label={`${study.projectTitle} — caso de estudio`}
        className="grid grid-cols-4 gap-gutter border border-outline-variant p-margin-mobile cyber-glow transition-all duration-300 ease-out md:grid-cols-12 md:p-8"
      >
        {/* Imagen del proyecto */}
        <div className="col-span-4 md:col-span-7">
          <Link href={`/case-study/${study.slug}`} className="block">
            <Image
              src={study.heroImage.src}
              alt={study.heroImage.alt}
              width={1280}
              height={720}
              className="aspect-video h-auto w-full border border-outline-variant object-cover"
            />
          </Link>
        </div>

        {/* Contenido */}
        <div className="col-span-4 flex flex-col justify-between md:col-span-5">
          <div>
            <p className="mb-unit font-label-mono text-label-mono uppercase tracking-[0.2em] text-on-surface-variant">
              {CATEGORY_LABELS[study.category]} // {study.year}
            </p>
            <h3 className="font-headline text-headline-sm text-on-background">
              {study.projectTitle}
            </h3>
            <p className="mt-unit font-body text-body-md text-on-surface-variant">
              {study.tagline}
            </p>
          </div>

          <div className="mt-margin-mobile">
            <Button href={`/case-study/${study.slug}`} variant="secondary" size="lg">
              {CASE_STUDY_PREVIEW_CONTENT.ctaLabel}
            </Button>
          </div>
        </div>
      </article>
    </Reveal>
  );
}