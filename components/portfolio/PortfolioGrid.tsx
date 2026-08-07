"use client";

import { useState } from "react";
import type { ProjectCategory } from "./portfolio-content";
import { PORTFOLIO_FILTERS, PORTFOLIO_CONTENT } from "./portfolio-content";
import { PortfolioHeader } from "./PortfolioHeader";
import { Reveal } from "@/components/ui/motion";
import { FilterChip } from "./FilterChip";
import { ProjectCard } from "./ProjectCard";

/**
 * Grid de portfolio con filtros funcionales por categoría.
 * "all" muestra todos los proyectos; el resto filtra por category.
 * La lógica de filtrado vive en estado local, lista para sustituirse
 * por datos de una futura API.
 */
export function PortfolioGrid() {
  const [active, setActive] = useState<ProjectCategory | "all">("all");

  const projects =
    active === "all"
      ? PORTFOLIO_CONTENT.projects
      : PORTFOLIO_CONTENT.projects.filter((p) => p.category === active);

  return (
    <section>
      <PortfolioHeader />

      <Reveal className="mb-12 flex flex-wrap gap-4">
        {PORTFOLIO_FILTERS.map((filter) => (
          <FilterChip
            key={filter.id}
            filter={filter}
            active={active === filter.id}
            onSelect={setActive}
          />
        ))}
      </Reveal>

      <div className="grid grid-cols-4 gap-gutter md:grid-cols-12">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}