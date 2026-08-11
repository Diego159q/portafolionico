import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import { TopNav } from "@/components/layout/TopNav";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "600", "700", "800"],
  variable: "--font-pjs",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NICO — Portafolio Audiovisual",
  description:
    "Dirección de fotografía, edición y postproducción audiovisual. Narrativa, ritmo y luz.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: "website",
    siteName: "NICO",
    title: "NICO — Portafolio Audiovisual",
    description:
      "Dirección de fotografía, edición y postproducción audiovisual. Narrativa, ritmo y luz.",
    url: SITE_URL,
    images: [
      { url: "/images/profile/hero-portrait.jpg", width: 1200, height: 630, alt: "NICO — Portafolio Audiovisual" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NICO — Portafolio Audiovisual",
    description:
      "Dirección de fotografía, edición y postproducción audiovisual. Narrativa, ritmo y luz.",
    images: ["/images/profile/hero-portrait.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#131313",
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
        <ScrollProgress />
        <TopNav />
        <main className="flex grow flex-col">{children}</main>
      </body>
    </html>
  );
}