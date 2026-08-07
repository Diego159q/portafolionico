import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "slide";
type Size = "md" | "lg";

interface ButtonBaseProps {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const VARIANTS: Record<Variant, string> = {
  primary:
    "border border-on-background bg-on-background text-background transition-all duration-300 hover:border-on-tertiary-container hover:bg-on-tertiary-container hover:text-on-background",
  secondary:
    "border border-outline-variant text-on-background cyber-glow hover:text-on-tertiary-container",
  slide:
    "relative overflow-hidden border border-outline-variant text-on-background transition-colors duration-300 hover:border-on-tertiary-container",
};

const SIZES: Record<Size, string> = {
  md: "px-6 py-3",
  lg: "px-8 py-4",
};

const BASE_CLASSES =
  "inline-flex items-center justify-center gap-2 rounded-none text-label-mono";

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "lg", children } = props;

  const classes = [BASE_CLASSES, VARIANTS[variant], SIZES[size]]
    .filter(Boolean)
    .join(" ");

  const fill = variant === "slide" && (
    <span
      className="slide-fill absolute inset-0 bg-on-tertiary-container"
      aria-hidden="true"
    />
  );
  const content = (
    <span className="relative z-10 inline-flex items-center justify-center gap-2">
      {children}
    </span>
  );

  if (props.href !== undefined) {
    const { href, variant: _v, size: _s, ...anchor } = props;
    return (
      <Link href={href} className={classes} {...anchor}>
        {fill}
        {content}
      </Link>
    );
  }

  const { variant: _v, size: _s, ...button } = props;
  return (
    <button type={button.type ?? "button"} className={classes} {...button}>
      {fill}
      {content}
    </button>
  );
}