"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/components/portfolio/portfolio-content";
import { CATEGORY_LABELS } from "@/components/portfolio/portfolio-content";

interface VideoModalProps {
  project: Project | null;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  hasPrev?: boolean;
  hasNext?: boolean;
}

export function VideoModal({
  project,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: VideoModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && onPrev && hasPrev) onPrev();
      if (e.key === "ArrowRight" && onNext && hasNext) onNext();
    },
    [onClose, onPrev, onNext, hasPrev, hasNext]
  );

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, handleKeyDown]);

  if (!project) return null;

  const isVertical = project.formatTag?.includes("9:16") || project.formatTag?.includes("REEL") || project.formatTag?.includes("TIKTOK");
  const videoSrc = project.video?.src || `/videos/${project.id}.mp4`;
  const whatsappMsg = encodeURIComponent(
    `Hola Nicole, vi el proyecto "${project.title}" en tu portafolio y me gustaría cotizar un video similar para mi marca.`
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-background/90 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5, bounce: 0.1 }}
          className="relative z-10 flex flex-col md:flex-row w-full max-w-5xl max-h-[90vh] overflow-hidden border border-outline-variant bg-surface-container-low shadow-2xl"
        >
          {/* Botón cerrar */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar modal"
            className="absolute top-4 right-4 z-30 flex h-10 w-10 items-center justify-center border border-outline-variant bg-background/80 text-on-background backdrop-blur-md transition-colors hover:border-on-tertiary-container hover:text-on-tertiary-container"
          >
            ✕
          </button>

          {/* Área de Video / Visual */}
          <div
            className={`relative flex items-center justify-center bg-black/60 overflow-hidden ${
              isVertical
                ? "w-full md:w-[380px] h-[450px] md:h-[650px] shrink-0"
                : "w-full md:w-3/5 h-[320px] md:h-[550px] shrink-0"
            }`}
          >
            {project.video?.src ? (
              <video
                src={project.video.src}
                poster={project.image}
                controls
                autoPlay
                className="h-full w-full object-contain"
              />
            ) : (
              <div className="relative h-full w-full flex items-center justify-center">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-50 blur-sm"
                />
                <div className="relative z-10 flex flex-col items-center p-6 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center border border-on-tertiary-container bg-on-tertiary-container/20 text-on-tertiary-container backdrop-blur-md">
                    <svg className="h-8 w-8 fill-current" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <span className="font-label-mono text-label-mono text-on-tertiary-container uppercase tracking-widest mb-1">
                    {project.formatTag || "PREVIEW DE PROYECTO"}
                  </span>
                  <p className="text-xs text-on-surface-variant max-w-xs">
                    Reproducción de video en alta definición habilitada para producciones registradas.
                  </p>
                </div>
              </div>
            )}

            {/* Navegación anterior / siguiente */}
            {hasPrev && onPrev && (
              <button
                type="button"
                onClick={onPrev}
                aria-label="Proyecto anterior"
                className="absolute left-3 top-1/2 z-20 -translate-y-1/2 flex h-10 w-10 items-center justify-center border border-outline-variant bg-background/80 text-on-background backdrop-blur-md transition-all hover:border-on-tertiary-container hover:text-on-tertiary-container"
              >
                ←
              </button>
            )}
            {hasNext && onNext && (
              <button
                type="button"
                onClick={onNext}
                aria-label="Siguiente proyecto"
                className="absolute right-3 top-1/2 z-20 -translate-y-1/2 flex h-10 w-10 items-center justify-center border border-outline-variant bg-background/80 text-on-background backdrop-blur-md transition-all hover:border-on-tertiary-container hover:text-on-tertiary-container"
              >
                →
              </button>
            )}
          </div>

          {/* Información del Proyecto */}
          <div className="flex flex-col justify-between p-6 md:p-8 overflow-y-auto grow">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="border border-on-tertiary-container/50 bg-on-tertiary-container/10 px-3 py-1 font-label-mono text-[11px] text-on-tertiary-container uppercase tracking-wider">
                  {CATEGORY_LABELS[project.category]}
                </span>
                <span className="font-label-mono text-[11px] text-on-surface-variant">
                  // {project.year}
                </span>
                {project.formatTag && (
                  <span className="border border-outline-variant px-2 py-0.5 font-label-mono text-[10px] text-on-surface-variant">
                    {project.formatTag}
                  </span>
                )}
              </div>

              <h3 className="font-headline text-headline-sm font-bold text-on-background mb-4">
                {project.title}
              </h3>

              <p className="font-body text-body-md text-on-surface-variant mb-6 leading-relaxed">
                {project.description}
              </p>

              {project.technologies && project.technologies.length > 0 && (
                <div className="mb-6">
                  <h4 className="font-label-mono text-label-mono text-on-surface-variant uppercase mb-3 tracking-widest">
                    Servicios aplicados
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="border border-outline-variant/60 bg-surface-container px-3 py-1 font-label-mono text-xs text-on-surface"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Acciones del Modal */}
            <div className="pt-6 border-t border-outline-variant/40 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={`https://wa.me/51900000000?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden border border-on-tertiary-container bg-on-tertiary-container/20 px-6 py-3 font-label-mono text-label-mono text-on-tertiary-container transition-all hover:bg-on-tertiary-container hover:text-background"
              >
                <span>COTIZAR ESTE ESTILO</span>
                <span aria-hidden="true">→</span>
              </a>

              {project.caseStudySlug && (
                <a
                  href={`/case-study/${project.caseStudySlug}`}
                  className="inline-flex items-center justify-center border border-outline-variant px-5 py-3 font-label-mono text-label-mono text-on-surface-variant transition-colors hover:border-on-background hover:text-on-background"
                >
                  VER CASE STUDY
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
