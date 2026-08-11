"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "@/components/ui/motion";
import { HERO_CONTENT } from "./hero-content";

/**
 * Columna derecha del Hero: Retrato audiovisual + Badges flotantes
 * de métricas/estatus + Overlays de iluminación cinematográfica.
 */
export function HeroVisual() {
  const reduce = useReducedMotion();

  return (
    <div className="relative h-full w-full overflow-hidden border border-outline-variant/40 bg-surface-container-low md:border-l md:border-t-0 md:border-r-0 md:border-b-0">
      {/* Imagen Principal */}
      <motion.div
        className="absolute inset-0"
        initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.05 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.1, ease: EASE, delay: 0.2 }}
      >
        <Image
          src={HERO_CONTENT.visual.src}
          alt={HERO_CONTENT.visual.alt}
          fill
          priority
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover object-center grayscale opacity-85 transition-all duration-700 hover:grayscale-0 hover:opacity-100"
        />
      </motion.div>

      {/* Badge Superior Izquierdo: REC ● EN VIVO */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute top-6 left-6 z-20 flex items-center gap-2 border border-washi/20 bg-sumi/80 px-3 py-1.5 backdrop-blur-md"
      >
        <span className="h-2 w-2 rounded-full bg-on-tertiary-container animate-pulse" />
        <span className="font-label-mono text-[11px] uppercase tracking-widest text-washi">
          REC // EN VIVO
        </span>
      </motion.div>

      {/* Badge Flotante Inferior Izquierdo: +50 Producciones */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: EASE }}
        className="absolute bottom-8 left-6 z-20 hidden sm:block border border-outline-variant/60 bg-sumi/90 p-4 shadow-2xl backdrop-blur-md"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center border border-on-tertiary-container/50 bg-on-tertiary-container/10 text-on-tertiary-container">
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
              <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
            </svg>
          </div>
          <div>
            <p className="font-label-mono text-xs font-bold text-on-tertiary-container uppercase tracking-wider">
              +50 PRODUCCIONES
            </p>
            <p className="font-body text-[11px] text-on-surface-variant">
              Reels, TikTok & Coberturas
            </p>
          </div>
        </div>
      </motion.div>

      {/* Badge Flotante Inferior Derecho: Huancayo & Perú */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.0, ease: EASE }}
        className="absolute bottom-8 right-6 z-20 hidden md:block border border-outline-variant/60 bg-sumi/90 p-4 shadow-2xl backdrop-blur-md"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center border border-outline-variant bg-surface-container text-on-background">
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
          </div>
          <div>
            <p className="font-label-mono text-xs font-bold text-on-background uppercase tracking-wider">
              HUANCAYO & PERÚ
            </p>
            <p className="font-body text-[11px] text-on-surface-variant">
              Alcance Regional & Nacional
            </p>
          </div>
        </div>
      </motion.div>

      {/* Overlay glass (degradado Sumi→transparente) */}
      <motion.div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-32 bg-gradient-to-r from-background to-transparent md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.6, ease: EASE }}
      />

      {/* Botón flotante para ver Showreel en el centro */}
      <a
        href="#reel"
        aria-label="Ver Showreel"
        className="cyber-glow absolute top-1/2 left-1/2 z-30 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 border border-washi/40 bg-sumi/70 px-5 py-3 font-label-mono text-xs text-washi backdrop-blur-md transition-all hover:scale-105 hover:border-cyber-crimson hover:bg-cyber-crimson hover:text-sumi shadow-2xl"
      >
        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
        VER SHOWREEL 2026
      </a>

      {/* Acento cyber crimson (línea láser) */}
      <motion.div
        className="pointer-events-none absolute right-0 top-1/3 z-20 h-[2px] w-20 bg-on-tertiary-container mix-blend-screen"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.7 }}
        style={{ originX: 1 }}
      />
    </div>
  );
}
