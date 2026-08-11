import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import { TopNav } from "@/components/layout/TopNav";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { SITE_LOCATION } from "@/components/content/site-content";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "600", "700", "800"],
  variable: "--font-pjs",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NICOLE ORE — Creadora de Contenido Audiovisual en Huancayo",
  description:
    "Creadora de contenido audiovisual para marcas, eventos y redes sociales en Huancayo, Perú. Contenido con calidez y luz propia: reels, TikTok, cobertura de eventos y videos promocionales.",
  metadataBase: new URL(SITE_URL),
  keywords: [
    "creadora de contenido audiovisual",
    "video para marcas",
    "reels",
    "tiktok",
    "cobertura de eventos Huancayo",
    "video promocional Huancayo",
    "contenido audiovisual Perú",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "NICOLE ORE",
    title: "NICOLE ORE — Creadora de Contenido Audiovisual",
    description:
      "Contenido audiovisual para marcas, eventos y redes sociales en Huancayo, Perú. Calidez, estrategia y luz propia.",
    url: SITE_URL,
    locale: "es_PE",
    images: [
      { url: "/images/profile/hero-portrait.jpg", width: 1200, height: 630, alt: "NICOLE ORE — Portafolio Audiovisual" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NICOLE ORE — Creadora de Contenido Audiovisual",
    description:
      "Contenido audiovisual para marcas, eventos y redes sociales en Huancayo, Perú.",
    images: ["/images/profile/hero-portrait.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#131313",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "NICOLE ORE",
  description:
    "Creadora de contenido audiovisual para marcas, eventos y redes sociales. Reels, TikTok, Shorts, cobertura de eventos y videos promocionales.",
  url: SITE_URL,
  image: `${SITE_URL}/images/profile/hero-portrait.jpg`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Huancayo",
    addressRegion: "Junín",
    addressCountry: "PE",
  },
  areaServed: "Huancayo, Perú",
  knowsAbout: [
    "Contenido audiovisual",
    "Reels y TikTok",
    "Cobertura de eventos",
    "Video promocional",
    "Guion y voz en off",
  ],
  sameAs: [
    "https://instagram.com/",
    "https://tiktok.com/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${plusJakartaSans.variable} ${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-background text-on-background antialiased">
        <a
          href="#main"
          className="sr-only z-[60] bg-on-tertiary-container px-4 py-2 font-label-mono text-label-mono uppercase tracking-[0.2em] text-background focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
        >
          Saltar al contenido
        </a>
        <ScrollProgress />
        <TopNav />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <main id="main" className="flex grow flex-col">{children}</main>
        <WhatsAppButton />
      </body>
    </html>
  );
}
