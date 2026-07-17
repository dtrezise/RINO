import { EvidenceCard } from "@/components/EvidenceCard";
import { PageMasthead } from "@/components/PageMasthead";
import { eboxes } from "@/lib/content";

export const metadata = {
  title: "Evidence archive",
  description: "Permanently addressable RINO evidence objects with claims, sources, context, tests, and corrections.",
  alternates: { canonical: "/evidence/" },
};

export default function EvidencePage() {
  return (
    <main id="main-content" className="section-shell page-shell">
      <PageMasthead
        eyebrow="Evidence archive / public data model 0.1"
        title="One claim. Its record. Its limits. A route back."
        summary="Each eBox is a durable evidence object—not a floating social card. The archive begins with the project’s own status and formation claims."
      />
      <div className="archive-toolbar" aria-label="Archive summary">
        <span><strong>{eboxes.length}</strong> public records</span>
        <span><strong>100%</strong> working review status</span>
        <a href="/data/rino-public-export.json">Download JSON export</a>
      </div>
      <div className="evidence-grid evidence-grid-archive">
        {eboxes.map((ebox) => <EvidenceCard key={ebox.id} ebox={ebox} />)}
      </div>
      <p className="archive-note">Search and server-side filters are staged for the record-volume gates documented in the data architecture. No private expert records are included here.</p>
    </main>
  );
}
