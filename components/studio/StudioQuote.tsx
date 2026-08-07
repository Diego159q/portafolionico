import { STUDIO_CONTENT } from "./studio-content";
import { Reveal } from "@/components/ui/motion";

/**
 * Cita flotante junto a la imagen asimétrica.
 * Texto en body-md sobre on-surface-variant (fiel a Stitch).
 */
export function StudioQuote() {
  return (
    <Reveal>
      <p className="max-w-sm font-body text-body-md text-on-surface-variant">
        {STUDIO_CONTENT.quote}
      </p>
    </Reveal>
  );
}