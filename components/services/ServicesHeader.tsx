import { SERVICES_CONTENT } from "./services-content";
import { Reveal } from "@/components/ui/motion";

/**
 * Cabecera de la sección Services.
 * Eyebrow + Display título (full width) e intro asimétrica (col 5/12, off 8/12)
 * con borde superior estructural. Fiel al screen de Stitch.
 */
export function ServicesHeader() {
  const [first, ...rest] = SERVICES_CONTENT.title.split(" ");

  return (
    <header className="mb-[120px] grid grid-cols-4 gap-gutter md:grid-cols-12">
      <div className="col-span-4 md:col-span-12">
        <Reveal>
          <p className="text-label-mono text-on-surface-variant mb-unit uppercase tracking-[0.2em]">
            {SERVICES_CONTENT.eyebrow}
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <h2 className="font-headline text-display-lg-mobile tracking-[-0.03em] text-on-background md:text-display-lg">
            {first}
            <br aria-hidden="true" /> {rest.join(" ")}
          </h2>
        </Reveal>
      </div>

      <div className="col-span-4 mt-margin-mobile flex flex-col justify-end border-t border-outline-variant pt-unit md:col-span-5 md:col-start-8 md:mt-0">
        <Reveal delay={0.24}>
          <p className="font-body text-body-md text-on-surface-variant">
            {SERVICES_CONTENT.intro}
          </p>
        </Reveal>
      </div>
    </header>
  );
}