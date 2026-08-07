import type { ReactNode } from "react";

interface ChipProps {
  children: ReactNode;
  active?: boolean;
  as?: "button" | "span";
}

export function Chip({
  children,
  active = false,
  as = "span",
}: ChipProps) {
  const classes = [
    "inline-flex items-center rounded-none border px-3 py-1 text-label-mono",
    active
      ? "border-on-tertiary-container text-on-tertiary-container"
      : "border-outline-variant text-on-surface-variant cyber-border:hover:border-on-tertiary-container",
  ]
    .filter(Boolean)
    .join(" ");

  if (as === "button") {
    return (
      <button type="button" aria-pressed={active} className={classes}>
        {children}
      </button>
    );
  }

  return <span className={classes}>{children}</span>;
}