import Image from "next/image";
import {
  CLIENT_CATEGORY_LABELS,
  type Client,
} from "./clients-content";

interface ClientCardProps {
  item: Client;
}

/**
 * Celda de cliente: logo + nombre + categoría + año.
 * Placeholder B&N con hover a color (misma técnica que el grid de portfolio).
 */
export function ClientCard({ item }: ClientCardProps) {
  return (
    <article
      aria-label={`${item.name}, ${CLIENT_CATEGORY_LABELS[item.categoryId]}, ${item.year}`}
      className="group flex h-full flex-col justify-between border border-outline-variant p-margin-mobile cyber-glow transition-all duration-300 ease-out md:p-8"
    >
      <div className="mb-margin-mobile overflow-hidden border border-outline-variant bg-surface-container-low md:mb-8">
        <Image
          src={item.logo.src}
          alt={item.logo.alt}
          width={480}
          height={270}
          className="aspect-video h-auto w-full object-cover grayscale transition-all duration-300 ease-out group-hover:scale-[1.02] group-hover:grayscale-0"
        />
      </div>

      <div>
        <h3 className="font-headline text-headline-sm text-on-background">
          {item.name}
        </h3>
        <p className="mt-unit font-label-mono text-label-mono uppercase tracking-[0.2em] text-on-surface-variant">
          {CLIENT_CATEGORY_LABELS[item.categoryId]} // {item.year}
        </p>
      </div>
    </article>
  );
}