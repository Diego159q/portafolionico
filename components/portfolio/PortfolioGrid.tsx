"use client";

import { useState } from "react";
import type { ProjectCategory, Project } from "./portfolio-content";
import { PORTFOLIO_FILTERS, PORTFOLIO_CONTENT } from "./portfolio-content";
import { PortfolioHeader } from "./PortfolioHeader";
import { Reveal } from "@/components/ui/motion";
import { FilterChip } from "./FilterChip";
import { ProjectCard } from "./ProjectCard";
import { VideoModal } from "@/components/ui/VideoModal";

/**
 * Grid de portfolio interactivo con filtros por categoría
 * y reproductor modal de video integrado.
 */
export function PortfolioGrid() {
  const [active, setActive] = useState<ProjectCategory | "all">("all");
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);

  const projects =
    active === "all"
      ? PORTFOLIO_CONTENT.projects
      : PORTFOLIO_CONTENT.projects.filter((p) => p.category === active);

  const selectedProject =
    selectedProjectIndex !== null ? projects[selectedProjectIndex] : null;

  const handlePrev = () => {
    if (selectedProjectIndex !== null && selectedProjectIndex > 0) {
      setSelectedProjectIndex(selectedProjectIndex - 1);
    }
  };

  const handleNext = () => {
    if (selectedProjectIndex !== null && selectedProjectIndex < projects.length - 1) {
      setSelectedProjectIndex(selectedProjectIndex + 1);
    }
  };

  return (
    <section>
      <PortfolioHeader />

      <Reveal className="mb-12 flex flex-wrap gap-4">
        {PORTFOLIO_FILTERS.map((filter) => (
          <FilterChip
            key={filter.id}
            filter={filter}
            active={active === filter.id}
            onSelect={(id) => {
              setActive(id);
              setSelectedProjectIndex(null);
            }}
          />
        ))}
      </Reveal>

      <div className="grid grid-cols-4 gap-gutter md:grid-cols-12">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            onSelect={() => setSelectedProjectIndex(index)}
          />
        ))}
      </div>

      {/* Lightbox / Video Modal */}
      <VideoModal
        project={selectedProject}
        onClose={() => setSelectedProjectIndex(null)}
        onPrev={handlePrev}
        onNext={handleNext}
        hasPrev={selectedProjectIndex !== null && selectedProjectIndex > 0}
        hasNext={selectedProjectIndex !== null && selectedProjectIndex < projects.length - 1}
      />
    </section>
  );
}