import { FAQ_CONTENT } from "./faq-content";
import { FaqRow } from "./FaqRow";
import { Reveal } from "@/components/ui/motion";

/**
 * Lista de preguntas frecuentes (accordion nativo <details>).
 * Cada ítem envuelto en Reveal escalonado.
 */
export function FaqList() {
  return (
    <Reveal className="w-full md:col-span-8 md:col-start-3">
      <div className="flex flex-col">
        {[...FAQ_CONTENT.items]
          .sort((a, b) => a.order - b.order)
          .map((item) => (
            <FaqRow key={item.id} item={item} />
          ))}
      </div>
    </Reveal>
  );
}