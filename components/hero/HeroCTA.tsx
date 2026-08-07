import { Button } from "@/components/ui/Button";

/**
 * Grupo de llamadas a la acción del Hero.
 * Reutiliza el componente base <Button> (variantes primary / secondary).
 */
export function HeroCTA() {
  return (
    <div className="flex flex-col gap-6 sm:flex-row sm:flex-wrap">
      <Button href="#portfolio" variant="primary" size="lg">
        VER PORTFOLIO
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
      <Button href="#services" variant="secondary" size="lg">
        EXPLORAR SERVICIOS
      </Button>
    </div>
  );
}