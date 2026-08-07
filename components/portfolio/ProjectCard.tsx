"use client";

import Image from "next/image";
import Link from "next/link";
import type { Project } from "./portfolio-content";
import { CATEGORY_LABELS } from "./portfolio-content";
import { Reveal } from "@/components/ui/motion";

/**
 * Tarjeta de proyecto del grid asimétrico. Componente único.
 * Variantes large / small resueltas desde la data del proyecto.
 * Hover elegante (Techno-Zen): imagen grayscale->color + escala sutil,
 * borde crimson, overlay tonal y CTA con reveal slide (large) / arrow (small).
 */
export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const large = project.size === "large";

  const colSpan = large ? "col-span-4 md:col-span-8" : "col-span-4 md:col-span-4";
  const imageHeight = large ? "h-[420px] md:h-[600px]" : "h-[420px] md:h-[400px]";
  const titleSize = large ? "text-headline-sm" : "text-[24px]";
  const offset = !large ? "md:mt-32" : "";

  return (
    <Reveal className={`${colSpan} ${offset}`} delay={index * 0.08}>
      {project.caseStudySlug ? (
        <Link
          href={`/case-study/${project.caseStudySlug}`}
          className="group relative block overflow-hidden border border-outline-variant bg-surface-container-high p-4 transition-colors duration-500 hover:border-on-tertiary-container"
        >
          <ProjectCardInner project={project} large={large} imageHeight={imageHeight} titleSize={titleSize} />
        </Link>
      ) : (
        <div className="group relative block overflow-hidden border border-outline-variant bg-surface-container-high p-4">
          <ProjectCardInner project={project} large={large} imageHeight={imageHeight} titleSize={titleSize} linked={false} />
        </div>
      )}
    </Reveal>
  );
}

function ProjectCardInner({
  project,
  large,
  imageHeight,
  titleSize,
  linked = true,
}: {
  project: Project;
  large: boolean;
  imageHeight: string;
  titleSize: string;
  linked?: boolean;
}) {
  return (
    <>
        {/* Imagen */}
        <div className={`relative mb-6 overflow-hidden ${imageHeight}`}>
          <Image
            src={project.image}
            alt={`${project.title} — ${CATEGORY_LABELS[project.category]}`}
            fill
            sizes={large ? "(min-width: 768px) 62vw, 100vw" : "(min-width: 768px) 31vw, 100vw"}
            className="object-cover transition-transform duration-700 will-change-transform grayscale group-hover:scale-105 group-hover:grayscale-0"
          />
          {/* Overlay crimson suave en hover */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-on-tertiary-container/10 opacity-0 transition-opacity duration-500 mix-blend-overlay group-hover:opacity-100"
          />
        </div>

        {/* Contenido */}
        <div className="flex items-end justify-between gap-6">
          <div className="min-w-0">
            <p className="mb-2 font-label-mono text-label-mono text-on-tertiary-container">
              {CATEGORY_LABELS[project.category].toUpperCase()} // {project.year}
            </p>
            <h3 className={`mb-2 font-headline text-on-background ${titleSize}`}>
              {project.title}
            </h3>
            <p className={`max-w-md font-body text-on-surface-variant ${large ? "text-body-md" : "text-sm"}`}>
              {project.description}
            </p>
          </div>

          {/* CTA según variante */}
          {large ? (
            <span
              className="group/btn relative hidden shrink-0 overflow-hidden border border-outline-variant px-6 py-3 font-label-mono text-label-mono transition-colors duration-300 group-hover:border-on-tertiary-container md:inline-flex"
            >
              <span className="slide-fill absolute inset-0 bg-on-tertiary-container" aria-hidden="true" />
              <span className="relative z-10 text-on-background transition-colors duration-300 group-hover/btn:text-background">
                VER PROYECTO
              </span>
            </span>
          ) : (
            <span className="mb-2 hidden shrink-0 items-center gap-2 font-label-mono text-label-mono text-on-tertiary-container transition-all duration-300 group-hover:gap-4 sm:flex">
              EXPLORAR <span aria-hidden="true">→</span>
            </span>
          )}
        </div>
      </>
  );
}