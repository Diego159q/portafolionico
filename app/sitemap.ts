import type { MetadataRoute } from "next";
import { listCaseStudySlugs } from "@/components/caseStudy/caseStudy-content";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const caseStudyEntries = listCaseStudySlugs().map((slug) => ({
    url: `${SITE_URL}/case-study/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...caseStudyEntries,
  ];
}