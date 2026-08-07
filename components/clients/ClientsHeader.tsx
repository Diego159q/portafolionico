import { CLIENTS_CONTENT } from "./clients-content";
import { Reveal } from "@/components/ui/motion";

/**
 * Cabecera editorial de "Clientes".
 * Misma estética que el resto de headers del sistema.
 */
export function ClientsHeader() {
  const [first, ...rest] = CLIENTS_CONTENT.title.split(" ");

  return (
    <header className="mb-[120px] grid grid-cols-4 gap-gutter md:grid-cols-12">
      <div className="col-span-4 md:col-span-12">
        <Reveal>
          <p className="mb-unit font-label-mono text-label-mono uppercase tracking-[0.2em] text-on-surface-variant">
            {CLIENTS_CONTENT.eyebrow}
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <h2
            id="clients-title"
            className="font-headline text-display-lg-mobile tracking-[-0.03em] text-on-background md:text-display-lg"
          >
            {first}
            <br aria-hidden="true" /> {rest.join(" ")}
          </h2>
        </Reveal>
      </div>

      <div className="col-span-4 mt-margin-mobile flex flex-col justify-end border-t border-outline-variant pt-unit md:col-span-5 md:col-start-8 md:mt-0">
        <Reveal delay={0.24}>
          <p className="font-body text-body-md text-on-surface-variant">
            {CLIENTS_CONTENT.description}
          </p>
        </Reveal>
      </div>
    </header>
  );
}