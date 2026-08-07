"use client";

import type { CaseStudy } from "./caseStudy-content";
import { Reveal } from "@/components/ui/motion";

/**
 * "02 // INTERACTION STUDY". Placeholder de video: panel aspect-video con
 * dot-grid decorativo, botón play (hover crimson) y label de grabación.
 * Cuando exista el video real se sustituye por <video>.
 */
export function CaseStudyVideo({ study }: { study: CaseStudy }) {
  const { videoHeading, videoLabel } = study;

  return (
    <section id="interaction" className="mb-section-gap px-margin-mobile md:px-margin-desktop">
      <h3 className="mb-8 border-b border-slate-zen pb-unit font-label-mono text-label-mono uppercase tracking-widest text-on-surface-variant">
        {videoHeading}
      </h3>

      <Reveal className="group relative flex aspect-video w-full cursor-pointer items-center justify-center overflow-hidden bg-surface-container">
        {/* Dot grid decorativo */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiM4ZTkxOTIiLz48L3N2Zz4=\")",
            backgroundSize: "20px 20px",
          }}
        />
        {/* Play */}
        <button
          type="button"
          aria-label={`Reproducir ${videoLabel}`}
          className="z-10 flex h-24 w-24 items-center justify-center border border-washi bg-sumi/50 backdrop-blur-sm transition-all duration-300 hover:border-cyber-crimson hover:bg-cyber-crimson group-hover:scale-110"
        >
          <svg className="h-8 w-8 fill-washi transition-colors duration-300 group-hover:fill-sumi" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
        {/* Label */}
        <span className="absolute bottom-unit right-unit font-label-mono text-[10px] uppercase tracking-widest text-washi">
          {videoLabel}
        </span>
      </Reveal>
    </section>
  );
}