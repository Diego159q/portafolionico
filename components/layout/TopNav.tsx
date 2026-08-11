"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { NavLink } from "@/components/ui/NavLink";
import { NAV_ITEMS, BRAND } from "./navigation-content";

export interface NavItem {
  href: string;
  label: string;
  active?: boolean;
}

/**
 * Navegación coherente con las secciones reales de la página de inicio.
 * Los ítems viven en navigation-content.ts (data-driven, preparado para CMS).
 * Los anchors aterrizan en IDs que existen (#portfolio, #studio, #services,
 * #process, #contact). El ítem de la sección visible se resalta (scrollspy).
 */

export function TopNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string>("#portfolio");
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Scrollspy: resalta el enlace de la sección actualmente visible.
  useEffect(() => {
    const sections = NAV_ITEMS
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveHref(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Bloquear teclado: la tecla Escape cierra el menú y devuelve el foco al botón.
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === "Escape" && menuOpen) {
      setMenuOpen(false);
      menuButtonRef.current?.focus();
    }
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen, handleKeyDown]);

  // Cerrar el menú al navegar (click en un enlace).
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 z-50 flex h-[80px] w-full items-center justify-between border-b border-outline-variant bg-background/80 px-margin-mobile py-4 backdrop-blur-md md:px-margin-desktop">
      <Link
        href="/"
        aria-label={`${BRAND} — Inicio`}
        className="text-headline-sm font-bold tracking-tighter text-on-background"
      >
        {BRAND}
      </Link>

      {/* Navegación desktop */}
      <div className="hidden items-center gap-gutter md:flex">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.label}
            item={{ ...item, active: activeHref === item.href }}
          />
        ))}
      </div>

      {/* Botón hamburguesa (mobile) */}
      <button
        ref={menuButtonRef}
        type="button"
        aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        onClick={() => setMenuOpen((open) => !open)}
        className="p-2 text-on-background md:hidden"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          {menuOpen ? (
            <path d="M6 6l12 12M18 6L6 18" />
          ) : (
            <path d="M2 6h20M2 12h20M2 18h20" />
          )}
        </svg>
      </button>

      {/* Menú mobile */}
      <div
        id="mobile-menu"
        className={`absolute top-[80px] right-0 left-0 border-b border-outline-variant bg-background/95 backdrop-blur-md transition-all duration-300 md:hidden ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <ul className="flex flex-col px-margin-mobile py-4">
          {NAV_ITEMS.map((item) => (
            <li key={item.label} className="border-b border-outline-variant/30 last:border-b-0">
              <Link
                href={item.href}
                onClick={handleLinkClick}
                aria-current={activeHref === item.href ? "page" : undefined}
                className={`block py-4 text-label-mono transition-colors hover:text-on-tertiary-container ${
                  activeHref === item.href
                    ? "text-on-tertiary-container"
                    : "text-on-surface-variant"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}