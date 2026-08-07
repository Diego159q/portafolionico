"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "@/components/ui/motion";
import { STUDIO_IMAGE } from "./studio-content";

/**
 * Imagen asimétrica del Studio: estudio en B/N con frame estructural
 * (borde 1px offset + esquinas crimson en L) y hover que revela color.
 * Aspect 4:3 en mobile, 16:9 en desktop (fiel a Stitch).
 */
export function StudioVisual() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="relative aspect-[4/3] w-full overflow-hidden bg-surface-container md:aspect-[16/9]"
      initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.04 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: EASE }}
    >
      <Image
        src={STUDIO_IMAGE.src}
        alt={STUDIO_IMAGE.alt}
        width={STUDIO_IMAGE.width}
        height={STUDIO_IMAGE.height}
        sizes="(min-width: 768px) 58vw, 100vw"
        className="h-full w-full object-cover object-center grayscale opacity-80 mix-blend-luminosity transition-opacity duration-700 group-hover:opacity-100"
      />

      {/* Frame estructural: borde 1px offset */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-4 hidden border border-outline-variant opacity-20 md:block"
      />

      {/* Detalles crimson (esquinas en L, arriba-derecha) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 hidden h-px w-8 bg-on-tertiary-container md:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 hidden h-8 w-px bg-on-tertiary-container md:block"
      />
    </motion.div>
  );
}