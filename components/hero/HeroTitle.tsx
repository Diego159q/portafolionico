"use client";

import { motion } from "framer-motion";
import { EASE } from "@/components/ui/motion";

/**
 * Título principal con escala tipográfica del sistema
 * (display-lg-mobile 48px → display-lg 120px).
 * Animación: desliz de línea (máscara) con reveal elegante.
 */
export function HeroTitle() {
  return (
    <h1 className="overflow-hidden text-display-lg-mobile leading-[0.95] tracking-[-0.03em] text-on-background md:text-display-lg">
      <motion.span
        className="block"
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.9, ease: EASE }}
      >
        KENJI
        <br className="hidden md:block" /> SATO
      </motion.span>
    </h1>
  );
}