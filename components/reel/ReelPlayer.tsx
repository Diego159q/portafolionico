"use client";

import Image from "next/image";
import { useState } from "react";
import type { ReelPoster, ReelVideo } from "./reel-content";

/**
 * Construye la URL embebible según el proveedor.
 * Fácilmente ampliable: añade un case al switch y listo.
 */
function embedUrl(video: ReelVideo): string {
  switch (video.provider) {
    case "youtube": {
      const videoId = video.url.split("v=")[1]?.split("&")[0] ?? video.url;
      return `https://www.youtube-nocookie.com/embed/${videoId}`;
    }
    case "vimeo": {
      const videoId = video.url.split("/").filter(Boolean).pop() ?? video.url;
      return `https://player.vimeo.com/video/${videoId}`;
    }
    default:
      return video.url;
  }
}

/**
 * Panel del showreel. Reutiliza el patrón visual de CaseStudyVideo:
 * póster + overlay glass + botón Play crimson. El reproductor (iframe/video)
 * solo se monta cuando el usuario pulsa Play (carga diferida/lazy).
 * Respeta prefers-reduced-motion vía :focus-visible/cyber-glow.
 */
export function ReelPlayer({ poster, video }: { poster: ReelPoster; video: ReelVideo }) {
  const hasUrl = Boolean(video.url);
  const [playing, setPlaying] = useState(false);
  const showPlayer = playing && hasUrl;

  return (
    <div className="group relative aspect-video w-full overflow-hidden border border-outline-variant bg-surface-container">
      {/* Póster */}
      {!showPlayer && (
        <>
          <Image
            src={poster.src}
            alt={poster.alt}
            fill
            sizes="(min-width: 768px) 58vw, 100vw"
            className="object-cover opacity-70 grayscale transition-opacity duration-700 group-hover:opacity-90"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-sumi/20" />
          <div
            aria-hidden="true"
            className="glass-accent pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Reproducir ${poster.alt}`}
            className="cyber-glow absolute inset-0 z-10 flex items-center justify-center"
          >
            <span className="flex h-24 w-24 items-center justify-center border border-washi bg-sumi/50 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-cyber-crimson group-hover:bg-cyber-crimson">
              <svg className="h-8 w-8 fill-washi transition-colors duration-300 group-hover:fill-sumi" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        </>
      )}

      {/* Player (solo si hay URL) */}
      {showPlayer &&
        (video.provider === "mp4" ? (
          <video
            className="h-full w-full object-cover"
            src={video.url}
            controls
            autoPlay={video.autoplay}
            preload="none"
          />
        ) : (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={embedUrl(video)}
            title={poster.alt}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ))}
    </div>
  );
}