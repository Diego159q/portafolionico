"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "@/components/ui/motion";
import { HERO_CONTENT } from "./hero-content";

/**
 * Columna derecha del Hero: retrato + overlays glass + acento crimson.
 * Imagen gestionada desde Next Image (ruta /public).
 */
export function HeroVisual() {
  const reduce = useReducedMotion();

  return (
    <div className="relative h-full w-full overflow-hidden md:border-l md:border-outline-variant/30">
      <motion.div
        className="absolute inset-0"
        initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.06 }}
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
          className="object-cover object-center grayscale opacity-80 mix-blend-luminosity"
        />
      </motion.div>

      {/* Overlay glass (degradado Sumi→transparente) */}
      <motion.div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-32 bg-gradient-to-r from-background to-transparent md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.6, ease: EASE }}
      />

      {/* Acento cyber crimson (línea láser) */}
      <motion.div
        className="pointer-events-none absolute right-0 top-1/2 z-20 h-[2px] w-16 bg-on-tertiary-container mix-blend-screen"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.7 }}
        style={{ originX: 1 }}
      />
    </div>
  );
}
