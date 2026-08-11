import { ExperienceHeader } from "./ExperienceHeader";
import { ExperienceTimeline } from "./ExperienceTimeline";
import { EXPERIENCE_CONTENT, type ExperienceContent } from "./experience-content";
import { getSectionContent } from "@/lib/supabase";

/**
 * Sección "Experiencia" (Techno-Zen). Server component.
 * Carga su contenido desde Supabase (tabla sections_content, fila 'experience')
 * con fallback al archivo local experience-content.ts si no hay datos remot
 * o si Supabase no está configurado.
 */
export async function Experience() {
  const remote = await getSectionContent<ExperienceContent>("experience");
  const content = remote ?? EXPERIENCE_CONTENT;

  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="relative px-margin-mobile pb-section-gap md:px-margin-desktop"
    >
      <ExperienceHeader content={content} />
      <ExperienceTimeline content={content} />
    </section>
  );
}