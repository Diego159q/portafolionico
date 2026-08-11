"use client";

import Image from "next/image";
import type { Project } from "./portfolio-content";
import { CATEGORY_LABELS } from "./portfolio-content";
import { Reveal } from "@/components/ui/motion";

interface ProjectCardProps {
  project: Project;
  index: number;
  onSelect: (project: Project) => void;
}

/**
 * Tarjeta de proyecto interactiva del grid.
 * Soporta hover video preview, badges de formato (REEL 9:16, TIKTOK, 4K)
 * y al hacer clic abre la ventana modal de reproductor de video en HD.
 */
export function ProjectCard({ project, index, onSelect }: ProjectCardProps) {
  const large = project.size === "large";
  const colSpan = large ? "col-span-4 md:col-span-8" : "col-span-4 md:col-span-4";
  const imageHeight = large ? "h-[420px] md:h-[580px]" : "h-[420px] md:h-[380px]";
  const titleSize = large ? "text-headline-sm" : "text-[24px]";
  const offset = !large ? "md:mt-24" : "";

  return (
    <Reveal className={`${colSpan} ${offset}`} delay={index * 0.08}>
      <button
        type="button"
        onClick={() => onSelect(project)}
        className="group relative block w-full text-left overflow-hidden border border-outline-variant bg-surface-container-high p-4 transition-all duration-500 hover:border-on-tertiary-container hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-on-tertiary-container"
      >
        {/* Imagen / video (hover-play) */}
        <div className={`relative mb-6 overflow-hidden bg-black/40 ${imageHeight}`}>
          <Image
            src={project.image}
            alt={`${project.title} — ${CATEGORY_LABELS[project.category]}`}
            fill
            sizes={large ? "(min-width: 768px) 62vw, 100vw" : "(min-width: 768px) 31vw, 100vw"}
            className="object-cover transition-transform duration-700 will-change-transform grayscale group-hover:scale-105 group-hover:grayscale-0"
          />
          
          {project.video ? (
            <video
              className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              src={project.video.src}
              poster={project.video.poster}
              autoPlay
              muted
              loop
              playsInline
              preload="none"
            />
          ) : null}

          {/* Badge de formato de video (esquina superior derecha) */}
          {project.formatTag && (
            <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5 border border-washi/20 bg-sumi/80 px-2.5 py-1 font-label-mono text-[10px] text-washi backdrop-blur-md uppercase tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-on-tertiary-container animate-pulse" />
              {project.formatTag}
            </div>
          )}

          {/* Botón flotante Play en Hover (centro) */}
          <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
            <span className="flex items-center gap-2 border border-on-tertiary-container bg-background/90 px-4 py-2 font-label-mono text-xs uppercase tracking-widest text-on-tertiary-container backdrop-blur-md transition-transform group-hover:scale-105 shadow-2xl">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              VER VIDEO HD
            </span>
          </div>

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
            <h3 className={`mb-2 font-headline font-bold text-on-background ${titleSize}`}>
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
                REPRODUCIR
              </span>
            </span>
          ) : (
            <span className="mb-2 hidden shrink-0 items-center gap-2 font-label-mono text-label-mono text-on-tertiary-container transition-all duration-300 group-hover:gap-4 sm:flex">
              REPRODUCIR <span aria-hidden="true">▶</span>
            </span>
          )}
        </div>
      </button>
    </Reveal>
  );
}