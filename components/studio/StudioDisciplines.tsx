import { STUDIO_CONTENT } from "./studio-content";
import { DisciplineList } from "./DisciplineList";
import { ValueCards } from "./ValueCards";
import { Reveal } from "@/components/ui/motion";

/**
 * Capabilities Grid — "Core Disciplines".
 * Cabecera a full width (border-t) + 3 columnas de 4:
 * Specialties / Skills / Values. En mobile se apilan con mt-12.
 */
export function StudioDisciplines() {
  return (
    <section className="mt-section-gap grid grid-cols-4 gap-gutter md:grid-cols-12">
      <Reveal className="col-span-4 mb-12 border-t border-outline-variant pt-8 md:col-span-12">
        <h3 className="font-headline text-headline-sm text-on-background">
          {STUDIO_CONTENT.disciplinesTitle}
        </h3>
      </Reveal>

      <div className="col-span-4 md:col-span-4">
        <DisciplineList discipline={STUDIO_CONTENT.specialties} />
      </div>

      <div className="col-span-4 mt-12 md:col-span-4 md:mt-0">
        <DisciplineList discipline={STUDIO_CONTENT.skills} />
      </div>

      <div className="col-span-4 mt-12 md:col-span-4 md:mt-0">
        <ValueCards values={STUDIO_CONTENT.values} />
      </div>
    </section>
  );
}