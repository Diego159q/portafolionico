import { HeroEyebrow } from "./HeroEyebrow";
import { HeroTitle } from "./HeroTitle";
import { HeroCTA } from "./HeroCTA";
import { Stagger, Item } from "@/components/ui/motion";

/**
 * Columna izquierda del Hero: eyebrow + título + descripción + CTAs.
 * Aparición progresiva vía <Stagger>/<Item>.
 */
export function HeroContent() {
  return (
    <div className="flex flex-col">
      <Stagger stagger={0.14} delay={0.15}>
        <Item>
          <HeroEyebrow />
        </Item>

        <Item className="pt-6 md:pt-8">
          <HeroTitle />
        </Item>

        <Item className="pt-8">
          <p className="max-w-lg text-quote-text text-on-surface-variant">
            EQUILIBRIO A TRAVÉS DE LA INNOVACIÓN DIGITAL.
          </p>
        </Item>

        <Item className="pt-12 md:pt-14">
          <HeroCTA />
        </Item>
      </Stagger>
    </div>
  );
}