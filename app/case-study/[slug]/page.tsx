import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudy } from "@/components/caseStudy/CaseStudy";
import {
  getCaseStudy,
  listCaseStudySlugs,
} from "@/components/caseStudy/caseStudy-content";

/**
 * Ruta dinámica /case-study/[slug].
 * Generación estática: todos los slugs se pre-renderizan (backing de la data).
 * Cuando exista backend, getCaseStudy se sustituye por un fetch en generateMetadata
 * y en el render (o load()).
 */
export function generateStaticParams() {
  return listCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) {
    return { title: "Proyecto no encontrado — KENJI SATO" };
  }
  return {
    title: `${study.projectTitle} — Caso de Estudio`,
    description: study.tagline,
    openGraph: {
      title: `${study.projectTitle} — Caso de Estudio`,
      description: study.tagline,
      url: `/case-study/${study.slug}`,
      images: [{ url: study.heroImage.src, alt: study.heroImage.alt }],
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  return (
    <>
      <CaseStudy study={study} />
    </>
  );
}