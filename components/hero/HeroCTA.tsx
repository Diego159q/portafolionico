import { Button } from "@/components/ui/Button";
import { HERO_CONTENT } from "./hero-content";

/**
 * Grupo de llamadas a la acción del Hero.
 * Reutiliza el componente base <Button> (variantes primary / secondary).
 * Data-driven desde hero-content.ts.
 */
export function HeroCTA() {
  const { primary, secondary } = HERO_CONTENT.cta;

  return (
    <div className="flex flex-col gap-6 sm:flex-row sm:flex-wrap">
      <Button href={primary.href} variant="primary" size="lg">
        {primary.label}
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path d="M1 8h13M8 1l7 7-7 7" />
        </svg>
      </Button>
      <Button href={secondary.href} variant="secondary" size="lg">
        {secondary.label}
      </Button>
    </div>
  );
}