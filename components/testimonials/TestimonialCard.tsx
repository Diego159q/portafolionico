import Image from "next/image";
import type { Testimonial } from "./testimonials-content";

interface TestimonialCardProps {
  item: Testimonial;
}

/**
 * Card minimalista de testimonio (Techno-Zen): sin exceso visual.
 * Comentario + autor + rol + empresa + avatar opcional.
 */
export function TestimonialCard({ item }: TestimonialCardProps) {
  return (
    <figure
      aria-label={`Testimonio de ${item.author}`}
      className="flex h-full flex-col border border-outline-variant p-margin-mobile cyber-glow transition-all duration-300 ease-out md:p-8"
    >
      {/* Comillas decorativas */}
      <span
        aria-hidden="true"
        className="mb-unit font-headline text-headline-sm text-on-tertiary-container"
      >
        “
      </span>

      <blockquote className="font-body text-body-md text-on-background">
        {item.quote}
      </blockquote>

      <figcaption className="mt-margin-mobile flex items-center gap-unit border-t border-outline-variant pt-margin-mobile md:mt-8">
        {item.avatar && (
          <Image
            src={item.avatar.src}
            alt={item.avatar.alt}
            width={48}
            height={48}
            className="h-12 w-12 border border-outline-variant object-cover grayscale"
          />
        )}
        <div>
          <p className="font-headline text-headline-sm text-on-background">
            {item.author}
          </p>
          <p className="font-label-mono text-label-mono uppercase tracking-[0.2em] text-on-surface-variant">
            {item.role} — {item.company}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}