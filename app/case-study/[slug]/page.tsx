import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudy } from "@/components/caseStudy/CaseStudy";
import {
  getCaseStudy,
  listCaseStudySlugs,
} from "@/components/caseStudy/caseStudy-content";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

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
    return { title: "Proyecto no encontrado — NICOLE ORE" };
  }
  const url = `${SITE_URL}/case-study/${study.slug}`;
  return {
    title: `${study.projectTitle} — Caso de Estudio`,
    description: study.tagline,
    alternates: { canonical: `/case-study/${study.slug}` },
    openGraph: {
      title: `${study.projectTitle} — Caso de Estudio | NICOLE ORE`,
      description: study.tagline,
      url,
      type: "article",
      locale: "es_PE",
      images: [{ url: study.heroImage.src, alt: study.heroImage.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${study.projectTitle} — Caso de Estudio`,
      description: study.tagline,
      images: [study.heroImage.src],
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
