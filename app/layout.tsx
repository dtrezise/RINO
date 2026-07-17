import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { Footer } from "@/components/Footer";
import { PwaRegistration } from "@/components/PwaRegistration";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#10151c",
};

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "localhost:3000";
  const protocol = host.startsWith("localhost") || host.startsWith("127.0.0.1") ? "http" : "https";
  const metadataBase = new URL(`${protocol}://${host}`);

  return {
    metadataBase,
    title: {
      default: "RINO — A proposed party for productive disagreement",
      template: "%s | RINO",
    },
    description:
      "A WORKING private preview for a proposed U.S. political party built around respectful disagreement, evidence, and shared national purpose.",
    applicationName: "RINO",
    manifest: "/manifest.webmanifest",
    alternates: { canonical: "/" },
    robots: { index: false, follow: false, nocache: true },
    openGraph: {
      type: "website",
      siteName: "RINO",
      title: "RINO — Disagree like neighbors",
      description: "A proposed party for evidence, respect, and productive disagreement.",
      url: "/",
      images: [{ url: "/og.png", width: 1200, height: 630, alt: "RINO private working preview" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "RINO — Disagree like neighbors",
      description: "A proposed party for evidence, respect, and productive disagreement.",
      images: ["/og.png"],
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
