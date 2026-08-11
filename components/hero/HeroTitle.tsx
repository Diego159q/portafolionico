"use client";

import { motion } from "framer-motion";
import { EASE } from "@/components/ui/motion";
import { HERO_CONTENT } from "./hero-content";

/**
 * Título principal con escala tipográfica del sistema
 * (display-lg-mobile 48px → display-lg 120px).
 * Animación: desliz de línea (máscara) con reveal elegante.
 * Data-driven desde hero-content.ts.
 */
export function HeroTitle() {
  const lines = HERO_CONTENT.brand.split(" ");

  return (
    <h1 className="overflow-hidden text-display-lg-mobile leading-[0.95] tracking-[-0.03em] text-on-background md:text-display-lg">
      <motion.span
        className="block"
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.9, ease: EASE }}
      >
        {lines.map((line, index) => (
          <span key={line + index} className="block">
            {line}
          </span>
        ))}
      </motion.span>
    </h1>
  );
}