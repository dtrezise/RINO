import Link from "next/link";
import type { CSSProperties } from "react";
import type { EvidenceBox } from "@/lib/content";
import { getTest } from "@/lib/content";
import { ShareComposer } from "./ShareComposer";

export function EvidenceRecord({ ebox }: { ebox: EvidenceBox }) {
  return (
    <article className="evidence-record">
      <header className="record-header">
        <div className="record-kicker">
          <span>{ebox.category}</span>
          <span>{ebox.id}</span>
          <span>{ebox.relevantDate}</span>
        </div>
        <p className="status-label status-large">{ebox.claimStatus}</p>
        <h1>{ebox.title}</h1>
        <p className="record-summary">{ebox.factualSummary}</p>
        <div className="record-actions">
          <ShareComposer title={ebox.title} status={ebox.claimStatus} summary={ebox.factualSummary} slug={ebox.slug} />
          <a className="button" href={`/data/rino-public-export.json#${ebox.id}`}>View structured data</a>
        </div>
      </header>

      <section className="why-panel" aria-labelledby="why-it-matters">
        <p className="eyebrow">Analysis / explicitly separate</p>
        <h2 id="why-it-matters">Why it matters</h2>
        <p>{ebox.whyItMatters}</p>
      </section>

      {ebox.applicableTests.length ? (
        <section className="record-section" aria-labelledby="tests-heading">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">Applied methodology</p>
              <h2 id="tests-heading">Test panel</h2>
            </div>
            <span className="illustrative-chip">Illustrative first pass</span>
          </div>
          {ebox.applicableTests.map((result) => {
            const test = getTest(result.testId);
            if (!test) return null;
            return (
              <article className="test-panel" key={result.testId} style={{ "--test-color": test.identifyingColor } as CSSProperties}>
                <div>
                  <p className="eyebrow">{test.status}</p>
                  <h3>{test.name}</h3>
                  <p>{result.explanation}</p>
                  <Link className="text-link" href={`/methods/#${test.rubricAnchor}`}>Read the full rubric →</Link>
                </div>
                <details className="score-popover">
                  <summary aria-label={`${test.name}: ${result.normalizedScore} out of 100, ${result.finding}`}>
                    <strong>{result.normalizedScore}</strong>
                    <span>/100</span>
                  </summary>
                  <div className="score-detail">
                    <p className="eyebrow">{result.finding}</p>
                    <h4>{test.name}</h4>
                    <p>{result.earnedPoints} of {result.possiblePoints} applicable points</p>
                    <ul>
                      {result.criterionScores.map((criterion) => {
                        const definition = test.criteria.find((item) => item.id === criterion.criterionId);
                        return (
                          <li key={criterion.criterionId}>
                            <strong>{definition?.name}: {criterion.score}/4</strong>
                            <span>{criterion.rationale}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </details>
              </article>
            );
          })}
        </section>
      ) : null}

      <section className="record-section" aria-labelledby="claims-heading">
        <p className="eyebrow">Claim register</p>
        <h2 id="claims-heading">What this record says</h2>
        <div className="claim-list">
          {ebox.claims.map((claim) => (
            <div className="claim-row" key={claim.id}>
              <span>{claim.id}</span>
              <p>{claim.text}</p>
              <strong>{claim.status}</strong>
            </div>
          ))}
        </div>
      </section>

      <details className="evidence-drawer" open>
        <summary>
          <span>Evidence drawer</span>
          <span>{ebox.sources.length} source{ebox.sources.length === 1 ? "" : "s"}</span>
        </summary>
        <div className="source-list">
          {ebox.sources.map((source) => (
            <article className="source-record" key={source.id}>
              <div className="source-meta">
                <span>{source.id}</span>
                <span>{source.authorityTier}</span>
              </div>
              <h3><a href={source.url} target="_blank" rel="noreferrer">{source.title}</a></h3>
              <p>{source.publisher} · Retrieved {source.retrievalDate}</p>
              <p><strong>Locator:</strong> {source.locator}</p>
              <p>{source.excerpt}</p>
              <p className="source-treatment">Source treatment: {source.copyrightStatus}</p>
            </article>
          ))}
        </div>
        <div className="relationships">
          <h3>Claim-to-source relationships</h3>
          {ebox.sourceRelationships.map((relationship) => (
            <p key={`${relationship.claimId}-${relationship.sourceId}`}>
              <strong>{relationship.claimId} ← {relationship.sourceId} / {relationship.relationship}</strong>
              <span>{relationship.note}</span>
            </p>
          ))}
        </div>
      </details>

      <section className="record-grid">
        <div>
          <p className="eyebrow">Limitations</p>
          <h2>What this does not establish</h2>
          <ul className="lined-list">
            {ebox.limitingContext.map((context) => <li key={context}>{context}</li>)}
          </ul>
        </div>
        <div>
          <p className="eyebrow">Review state</p>
          <h2>{ebox.editorialReview.status}</h2>
          <p>Reviewed {ebox.editorialReview.reviewDate} by {ebox.editorialReview.reviewedBy}.</p>
          <p>{ebox.expertInterviewCompanion.status}.</p>
          <Link className="text-link" href="/corrections/">Request a correction →</Link>
        </div>
      </section>
    </article>
  );
}
