import { PageMasthead } from "@/components/PageMasthead";
import { tests } from "@/lib/content";
import type { CSSProperties } from "react";

export const metadata = {
  title: "Methods",
  description: "How RINO evidence objects, claim-source relationships, tests, scores, reviews, and corrections work.",
  alternates: { canonical: "/methods/" },
};

export default function MethodsPage() {
  return (
    <main id="main-content" className="section-shell page-shell">
      <PageMasthead
        eyebrow="Methods / versioned and reviewable"
        title="A conclusion should never be smuggled into the method."
        summary="The evidence model separates record, interpretation, test, score, and revision so readers can challenge each layer independently."
      />
      <section className="method-flow" aria-label="Evidence object flow">
        {[
          ["01", "Claim", "Write an independently defensible proposition."],
          ["02", "Record", "Attach sources, locators, relationships, and limiting context."],
          ["03", "Analysis", "Explain why it matters in a visibly separate section."],
          ["04", "Test", "Apply only relevant, published criteria."],
          ["05", "Review", "Name status, date, correction path, and revision history."],
        ].map(([number, title, copy]) => (
          <article key={number}><span>{number}</span><h2>{title}</h2><p>{copy}</p></article>
        ))}
      </section>
      <section className="method-section" id="ebox-method">
        <p className="eyebrow">The eBox contract</p>
        <h2>Permanent address. Structured record. Round-trip share.</h2>
        <div className="two-column-copy">
          <p>An eBox is the smallest durable unit of RINO’s public evidence system. Its headline, status, summary, preview, and social copy must remain accurate when separated from the page.</p>
          <p>Every source relationship declares whether a source supports, contradicts, contextualizes, documents status, contains a denial, or contains a response. A source list without those links is not enough.</p>
        </div>
      </section>
      {tests.map((test) => (
        <section className="rubric" id={test.rubricAnchor} key={test.id} style={{ "--test-color": test.identifyingColor } as CSSProperties}>
          <div className="rubric-header">
            <div><p className="eyebrow">{test.id} / {test.status}</p><h2>{test.name}</h2><p>{test.purpose}</p></div>
            <div className="version-box">v{test.version}<span>Reviewed {test.reviewDate}</span></div>
          </div>
          <div className="criteria-grid">
            {test.criteria.map((criterion, index) => (
              <article key={criterion.id}><span>{index + 1}</span><h3>{criterion.name}</h3><p>{criterion.question}</p><small>{criterion.guidance}</small></article>
            ))}
          </div>
          <div className="score-band-list">
            {test.scoreBands.map((band) => <span key={band.label}><strong>{band.min}–{band.max}</strong>{band.label}</span>)}
          </div>
          <p className="archive-note">Irrelevant criteria are marked N/A and excluded from the denominator. Automated suggestions never become authoritative public scores without criterion-level editorial review.</p>
        </section>
      ))}
    </main>
  );
}
