import type { Metadata, Viewport } from "next";
import { Footer } from "@/components/Footer";
import { PwaRegistration } from "@/components/PwaRegistration";
import { SiteHeader } from "@/components/SiteHeader";
import { sitePath, siteUrl } from "@/lib/site-paths";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#10151c",
};

export function generateMetadata(): Metadata {
  return {
    metadataBase: new URL(siteUrl("/")),
    title: {
      default: "RINO — A proposed party for productive disagreement",
      template: "%s | RINO",
    },
    description:
      "A WORKING preview for a proposed U.S. political party built around respectful disagreement, evidence, and shared national purpose.",
    applicationName: "RINO",
    manifest: sitePath("/manifest.webmanifest"),
    alternates: { canonical: siteUrl("/") },
    robots: { index: false, follow: false, nocache: true },
    openGraph: {
      type: "website",
      siteName: "RINO",
      title: "RINO — Disagree like neighbors",
      description: "A proposed party for evidence, respect, and productive disagreement.",
      url: siteUrl("/"),
      images: [{ url: siteUrl("/og.png"), width: 1200, height: 630, alt: "RINO working preview" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "RINO — Disagree like neighbors",
      description: "A proposed party for evidence, respect, and productive disagreement.",
      images: [siteUrl("/og.png")],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        {children}
        <Footer />
        <PwaRegistration />
      </body>
    </html>
  );
}
