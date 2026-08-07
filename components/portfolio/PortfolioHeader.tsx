import { PORTFOLIO_CONTENT } from "./portfolio-content";
import { Reveal } from "@/components/ui/motion";

/**
 * Cabecera del portfolio: título display en mayúsculas (2 líneas).
 * Fiel al screen "SELECTED WORKS" de Stitch.
 */
export function PortfolioHeader() {
  return (
    <Reveal className="mb-12">
      <h2 className="font-headline text-display-lg-mobile tracking-[-0.03em] text-on-background md:text-display-lg">
        {PORTFOLIO_CONTENT.title}
        <br aria-hidden="true" />
        {PORTFOLIO_CONTENT.subtitle}
      </h2>
    </Reveal>
  );
}