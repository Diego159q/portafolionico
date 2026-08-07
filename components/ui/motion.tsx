"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/** Curva de easing profesional (expo suave-out). */
export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface RevealProps {
  children?: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  /** Fracción del elemento que debe estar en viewport para disparar. */
  amount?: number;
}

/**
 * Aparición con deslizamiento vertical sutil (opacity + translateY)
 * al entrar en viewport. Respeta prefers-reduced-motion.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.7,
  once = true,
  amount = 0.2,
}: RevealProps) {
  const reduce = useReducedMotion();
  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration, delay, ease: EASE },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

/** Aparición solo por opacidad, sin desplazamiento. */
export function Fade({
  children,
  className,
  delay = 0,
  duration = 0.9,
  once = true,
  amount = 0.2,
}: RevealProps) {
  const variants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration, delay, ease: EASE } },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

interface StaggerProps {
  children?: ReactNode;
  className?: string;
  /** Desfase entre ítems (segundos). */
  stagger?: number;
  /** Retardo antes de iniciar la cascada (segundos). */
  delay?: number;
}

/**
 * Contenedor que anima la aparición de sus hijos de forma escalonada.
 * Cada <Item> dentro se revela uno tras otro (stagger).
 */
export function Stagger({
  children,
  className,
  stagger = 0.12,
  delay = 0.1,
}: StaggerProps) {
  const variants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

const ITEM_OFFSET = 28;

/** Ítem escalonado de <Stagger>. */
export function Item({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : ITEM_OFFSET },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
  };

  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  );
}