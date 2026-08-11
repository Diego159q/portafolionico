"use client";

import { useState } from "react";
import type { CaseStudy } from "./caseStudy-content";
import { Reveal } from "@/components/ui/motion";

/**
 * Convierte la URL del video (YouTube/Vimeo/MP4) en una URL embebible.
 * Vacío => el panel se mantiene como placeholder decorativo.
 */
function embedUrl(url: string): string {
  if (url.includes("youtube.com") || url.includes("youtu.be")) {
    const videoId =
      url.split("v=")[1]?.split("&")[0] ??
      url.split("/").pop() ??
      url;
    return `https://www.youtube-nocookie.com/embed/${videoId}`;
  }
  if (url.includes("vimeo.com")) {
    const videoId = url.split("/").filter(Boolean).pop() ?? url;
    return `https://player.vimeo.com/video/${videoId}`;
  }
  return url;
}

/**
 * "02 // INTERACTION STUDY". Panel de video del case study.
 * Si el estudio tiene videoUrl se reproduce (YouTube/Vimeo/MP4); si no,
 * muestra el placeholder decorativo con dot-grid y botón play.
 */
export function CaseStudyVideo({ study }: { study: CaseStudy }) {
  const { videoHeading, videoLabel, videoUrl } = study;
  const hasUrl = Boolean(videoUrl);
  const [playing, setPlaying] = useState(false);

  return (
    <section id="interaction" className="mb-section-gap px-margin-mobile md:px-margin-desktop">
      <h3 className="mb-8 border-b border-slate-zen pb-unit font-label-mono text-label-mono uppercase tracking-widest text-on-surface-variant">
        {videoHeading}
      </h3>

      {hasUrl && playing ? (
        <Reveal className="relative aspect-video w-full overflow-hidden bg-surface-container">
          {videoUrl!.startsWith("http") && !videoUrl!.endsWith(".mp4") ? (
            <iframe
              className="absolute inset-0 h-full w-full"
              src={embedUrl(videoUrl!)}
              title={videoLabel}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src={videoUrl}
              controls
              autoPlay
              preload="none"
            />
          )}
        </Reveal>
      ) : (
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
            onClick={() => setPlaying(true)}
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
      )}
    </section>
  );
}
