import Link from "next/link";
import type { NavItem } from "@/components/layout/TopNav";

interface NavLinkProps {
  item: NavItem;
}

export function NavLink({ item }: NavLinkProps) {
  return (
    <Link
      href={item.href}
      aria-current={item.active ? "page" : undefined}
      data-active={item.active || undefined}
      className="text-label-mono text-on-surface-variant cyber-text transition-colors"
    >
      {item.label}
    </Link>
  );
}