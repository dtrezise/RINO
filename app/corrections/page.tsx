import { PageMasthead } from "@/components/PageMasthead";

export const metadata = {
  title: "Corrections",
  description: "The working correction and revision standard for RINO public records.",
  alternates: { canonical: "/corrections/" },
};

export default function CorrectionsPage() {
  return (
    <main id="main-content" className="section-shell page-shell narrow-page">
      <PageMasthead
        eyebrow="Corrections / channel pending"
        title="Specific corrections deserve specific answers."
        summary="The correction standard is active in the product model. The external submission channel is not active in this working preview."
      />
      <section className="correction-guide">
        <h2>A useful correction request includes:</h2>
        <ol>
          <li><span>01</span>The exact eBox ID, claim ID, headline, or URL.</li>
          <li><span>02</span>The wording believed to be wrong, incomplete, or misleading.</li>
          <li><span>03</span>The strongest primary source and a precise locator.</li>
          <li><span>04</span>The narrowest accurate replacement or missing context.</li>
        </ol>
      </section>
      <section className="working-note">
        <p className="eyebrow">DAN NEEDED before activation</p>
        <h2>Choose a monitored correction channel and response standard.</h2>
        <p>No email address or submission form is invented in this build. Activation requires an accountable recipient, privacy notice, retention rule, abuse controls, and a published target for acknowledgment and review.</p>
      </section>
      <section className="revision-log">
        <p className="eyebrow">Public revision log</p>
        <h2>No material corrections recorded.</h2>
        <p>Initial first-pass publication state: July 17, 2026. Future material changes should append the date, affected record, nature of the change, and reason.</p>
      </section>
    </main>
  );
}
