import type { ElementType, ReactNode } from "react";

interface SectionProps {
  as?: ElementType;
  className?: string;
  // gap vertical macro entre secciones (Ma). Por defecto true.
  gap?: boolean;
  children: ReactNode;
}

/**
 * Sección del portfolio con márgenes laterales del sistema
 * (mobile 24px / desktop 80px) y gap vertical de 160px.
 */
export function Section({
  as: Tag = "section",
  className = "",
  gap = true,
  children,
}: SectionProps) {
  const classes = [
    "px-margin-mobile md:px-margin-desktop",
    gap ? "mb-section-gap" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <Tag className={classes}>{children}</Tag>;
}