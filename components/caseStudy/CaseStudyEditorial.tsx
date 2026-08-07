import type { CaseStudy } from "./caseStudy-content";

/**
 * Bloque "Details & Editorial": sidebar con metadatos (Discipline, Technology,
 * Timeline, Status) + artículo editorial con quote crimson. 100% data-driven.
 */
export function CaseStudyEditorial({ study }: { study: CaseStudy }) {
  const { roles, editorialHeading, editorialParagraphs, quote } = study;

  return (
    <section className="mb-section-gap grid grid-cols-4 gap-gutter px-margin-mobile md:grid-cols-12 md:px-margin-desktop">
      {/* Sidebar metadata */}
      <aside className="col-span-4 font-label-mono text-label-mono md:col-span-3">
        {roles.map((role, i) => (
          <div
            key={role.label}
            className={i === roles.length - 1 ? "border-t border-b border-slate-zen py-unit" : "border-t border-slate-zen py-unit mb-unit"}
          >
            <span className="uppercase tracking-widest text-on-surface-variant">{role.label}</span>
            <ul className="mt-2 space-y-1 text-on-background">
              {role.values.map((v) => (
                <li key={v}>{v}</li>
              ))}
            </ul>
          </div>
        ))}
      </aside>

      {/* Editorial */}
      <article className="col-span-4 mt-12 md:col-span-7 md:col-start-6 md:mt-0">
        <h2 className="mb-6 font-headline text-headline-sm font-semibold tracking-[-0.01em] text-on-background uppercase">
          {editorialHeading}
        </h2>
        {editorialParagraphs.map((p) => (
          <p key={p} className="mb-6 font-body text-body-md text-on-surface-variant">
            {p}
          </p>
        ))}
        <blockquote className="mt-12 border-l-2 border-cyber-crimson py-unit pl-6 text-quote-text text-washi">
          &ldquo;{quote}&rdquo;
        </blockquote>
      </article>
    </section>
  );
}