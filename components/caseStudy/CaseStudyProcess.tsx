"use client";

import Image from "next/image";
import type { CaseStudy } from "./caseStudy-content";
import { Reveal } from "@/components/ui/motion";

/**
 * "01 // PROCESS & PROTOTYPES". Headland con borde inferior + grid de figuras
 * aspect-square (1/2/3 col) con captions de esquina. Grayscale -> hover color.
 */
export function CaseStudyProcess({ study }: { study: CaseStudy }) {
  return (
    <section id="process" className="mb-section-gap px-margin-mobile md:px-margin-desktop">
      <h3 className="mb-8 border-b border-slate-zen pb-unit font-label-mono text-label-mono uppercase tracking-widest text-on-surface-variant">
        {study.processHeading}
      </h3>
      <div className="grid grid-cols-1 gap-unit md:grid-cols-2 lg:grid-cols-3">
        {study.figures.map((figure, i) => (
          <Reveal
            key={figure.caption}
            className="group relative aspect-square overflow-hidden bg-slate-zen"
            delay={i * 0.08}
          >
            <Image
              src={figure.src}
              alt={figure.alt}
              fill
              sizes="(min-width: 1024px) 30vw, (min-width: 768px) 48vw, 100vw"
              className="object-cover grayscale opacity-70 transition-opacity duration-300 group-hover:opacity-100"
            />
            <span
              aria-hidden="true"
              className="absolute bottom-unit left-unit border border-slate-zen bg-sumi px-unit py-1 font-label-mono text-[10px] text-washi"
            >
              {figure.caption}
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}