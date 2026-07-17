import { PageMasthead } from "@/components/PageMasthead";

export const metadata = {
  title: "Voices",
  description: "The working RINO interview and commentary pipeline, with no fabricated supporters or endorsements.",
  alternates: { canonical: "/voices/" },
};

export default function VoicesPage() {
  return (
    <main id="main-content" className="section-shell page-shell">
      <PageMasthead
        eyebrow="Voices / editorial pipeline"
        title="No manufactured chorus. Earn every voice."
        summary="RINO will not invent members, testimonials, endorsements, experts, or grassroots momentum. This section shows the publication standard before any interviews exist."
      />
      <section className="empty-editorial-state">
        <div className="empty-number">00</div>
        <div>
          <p className="status-label">No interviews published</p>
          <h2>The empty state is accurate.</h2>
          <p>Future conversations should test claims, disclose conflicts, preserve meaningful disagreement, and publish only with consent. Candidate research and production notes remain private.</p>
        </div>
      </section>
      <div className="voice-standards">
        <article><span>01</span><h2>Find relevant expertise</h2><p>Match the person’s demonstrated work to the question at issue—not merely to a desired viewpoint.</p></article>
        <article><span>02</span><h2>Ask disconfirming questions</h2><p>Interview prompts should be capable of changing the working thesis.</p></article>
        <article><span>03</span><h2>Disclose and preserve</h2><p>Record consent, conflicts, editing terms, material qualifications, and corrections.</p></article>
      </div>
      <p className="archive-note"><strong>DAN NEEDED before outreach:</strong> approve any candidate, contact, representation of RINO, and consent workflow.</p>
    </main>
  );
}
