import Link from "next/link";
import { PageMasthead } from "@/components/PageMasthead";

export const metadata = {
  title: "Formation status",
  description: "What RINO has and has not established, and the gates before organization, ballot, fundraising, or public-launch claims.",
  alternates: { canonical: "/status/" },
};

const gates = [
  ["Product foundation", "IN PROGRESS", "Identity, website, evidence model, PWA, shared export, and iPhone shell."],
  ["Founding governance", "DAN NEEDED", "Name expansion, bylaws, leadership, decision rights, conflicts, and amendment process."],
  ["Entity and tax analysis", "DAN NEEDED", "Counsel and tax review of organization type, responsible entity, filings, and public representations."],
  ["Committee and fundraising", "CLOSED", "No treasurer, depository, processor, compliance system, disclaimers, or authority to solicit contributions has been established here."],
  ["State ballot strategy", "NOT STARTED", "State-by-state law, deadlines, petition rules, candidate strategy, and retention requirements require live research."],
  ["Federal party qualification", "NOT ESTABLISHED", "A name, website, or committee filing alone does not establish qualified national-party status."],
  ["Public launch", "DAN NEEDED", "The project remains a private working preview until explicit approval."],
];

export default function StatusPage() {
  return (
    <main id="main-content" className="section-shell page-shell">
      <PageMasthead
        eyebrow="Status ledger / reviewed July 17, 2026"
        title="Formation is a sequence of earned statuses."
        summary="This ledger distinguishes product progress from governance, legal entity, committee registration, tax treatment, ballot access, and federal political-party qualification."
      />
      <div className="status-ledger">
        {gates.map(([title, status, copy], index) => (
          <article key={title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h2>{title}</h2>
            <strong>{status}</strong>
            <p>{copy}</p>
          </article>
        ))}
      </div>
      <section className="source-callout">
        <div><p className="eyebrow">Current official-source baseline</p><h2>Federal and state questions stay separate.</h2></div>
        <p>The Federal Election Commission explains that ballot access is controlled by state law, while federal law supplies separate political-party and committee rules. RINO must verify the current requirements in each jurisdiction before acting.</p>
        <Link className="button button-ink" href="/evidence/rino-formation-status/">Inspect the formation eBox</Link>
      </section>
    </main>
  );
}
