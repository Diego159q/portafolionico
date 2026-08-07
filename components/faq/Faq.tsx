import { FaqHeader } from "./FaqHeader";
import { FaqList } from "./FaqList";

/**
 * Sección "FAQ" (Techno-Zen). Server component.
 */
export function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative px-margin-mobile pb-section-gap md:px-margin-desktop"
    >
      <FaqHeader />
      <FaqList />
    </section>
  );
}