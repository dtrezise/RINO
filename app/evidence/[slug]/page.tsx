import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EvidenceRecord } from "@/components/EvidenceRecord";
import { eboxes, getEvidenceBox } from "@/lib/content";

export function generateStaticParams() {
  return eboxes.map((ebox) => ({ slug: ebox.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const ebox = getEvidenceBox(slug);
  if (!ebox) return {};
  return {
    title: ebox.title,
    description: `${ebox.claimStatus}: ${ebox.factualSummary}`,
    alternates: { canonical: `/evidence/${ebox.slug}/` },
    openGraph: {
      type: "article",
      title: ebox.title,
      description: `${ebox.claimStatus}: ${ebox.factualSummary}`,
      url: `/evidence/${ebox.slug}/`,
      images: [{ url: "/og.png", width: 1200, height: 630, alt: `RINO evidence: ${ebox.title}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: ebox.title,
      description: `${ebox.claimStatus}: ${ebox.factualSummary}`,
      images: ["/og.png"],
    },
  };
}

export default async function EvidenceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ebox = getEvidenceBox(slug);
  if (!ebox) notFound();

  return (
    <main id="main-content" className="section-shell page-shell">
      <EvidenceRecord ebox={ebox} />
    </main>
  );
}
