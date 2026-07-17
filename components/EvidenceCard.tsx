import Link from "next/link";
import type { EvidenceBox } from "@/lib/content";

export function EvidenceCard({ ebox }: { ebox: EvidenceBox }) {
  return (
    <article className="evidence-card">
      <div className="evidence-card-topline">
        <span>{ebox.category}</span>
        <span>{ebox.id}</span>
      </div>
      <p className="status-label">{ebox.claimStatus}</p>
      <h2><Link href={`/evidence/${ebox.slug}/`}>{ebox.title}</Link></h2>
      <p>{ebox.factualSummary}</p>
      <div className="evidence-card-footer">
        <span>{ebox.relevantDate}</span>
        <Link className="text-link" href={`/evidence/${ebox.slug}/`}>Open evidence →</Link>
      </div>
    </article>
  );
}
