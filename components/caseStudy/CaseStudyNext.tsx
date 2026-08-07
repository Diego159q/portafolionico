import Link from "next/link";
import type { CaseStudy } from "./caseStudy-content";

/**
 * Nav "PRÓXIMO PROYECTO" a sangre completa hacia el próximo case study.
 * El enlace se construye desde el slug de `next` (data-driven).
 */
export function CaseStudyNext({ study }: { study: CaseStudy }) {
  const { next } = study;

  return (
    <section className="group cursor-pointer border-t border-slate-zen px-margin-mobile py-32 text-center transition-colors duration-500 hover:bg-slate-zen md:px-margin-desktop">
      <Link href={`/case-study/${next.slug}`} className="block">
        <span className="mb-4 block font-label-mono text-label-mono uppercase tracking-widest text-cyber-crimson transition-all duration-300 group-hover:tracking-[0.2em]">
          PRÓXIMO PROYECTO
        </span>
        <h2 className="font-headline text-display-lg-mobile font-bold uppercase tracking-tighter text-washi md:text-display-lg">
          {next.title}
        </h2>
      </Link>
    </section>
  );
}