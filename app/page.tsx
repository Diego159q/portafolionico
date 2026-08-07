import { Hero } from "@/components/hero/Hero";
import { Reel } from "@/components/reel/Reel";
import { Studio } from "@/components/studio/Studio";
import { Services } from "@/components/services/Services";
import { Software } from "@/components/software/Software";
import { Portfolio } from "@/components/portfolio/Portfolio";
import { CaseStudyPreview } from "@/components/caseStudyPreview/CaseStudyPreview";
import { Experience } from "@/components/experience/Experience";
import { Education } from "@/components/education/Education";
import { Clients } from "@/components/clients/Clients";
import { Testimonials } from "@/components/testimonials/Testimonials";
import { Faq } from "@/components/faq/Faq";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/footer/Footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Reel />
      <Studio />
      <Services />
      <Software />
      <Portfolio />
      <CaseStudyPreview />
      <Experience />
      <Education />
      <Clients />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}