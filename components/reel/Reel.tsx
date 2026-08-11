import { ReelInfo } from "./ReelInfo";
import { ReelPlayer } from "./ReelPlayer";
import { getFeaturedReel } from "./reel-content";

/**
 * Sección "Reel Destacado" — dos columnas (texto / player).
 * 100% data-driven desde reel-content.ts (proxy del backend).
 * Mantiene el patrón de sección de Studio/Services/Portfolio.
 */
export function Reel() {
  const reel = getFeaturedReel();

  return (
    <section
      id="reel"
      aria-label="Reel destacado — NICOLE ORE"
      className="relative bg-background px-margin-mobile pb-section-gap md:px-margin-desktop"
    >
      <div className="grid grid-cols-4 items-center gap-gutter md:grid-cols-12">
        <div className="col-span-4 md:col-span-5">
          <ReelInfo reel={reel} />
        </div>
        <div className="col-span-4 mt-12 md:col-span-7 md:mt-0">
          <ReelPlayer poster={reel.poster} video={reel.video} />
        </div>
      </div>
    </section>
  );
}
