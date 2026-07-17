import Link from "next/link";
import { EvidenceCard } from "@/components/EvidenceCard";
import { content, eboxes } from "@/lib/content";

export default function Home() {
  return (
    <main id="main-content">
      <section className="hero section-shell">
        <div className="hero-copy">
          <p className="eyebrow">A proposed American political party / private first pass</p>
          <h1>Disagree like neighbors.<br /><em>Govern like the country depends on it.</em></h1>
          <p className="hero-deck">
            RINO flips a partisan insult into a working invitation: bring reason, independent judgment,
            national purpose, and optimism back to the table—without demanding that everyone become a centrist.
          </p>
          <div className="hero-actions">
            <Link className="button button-red" href="/principles/">Read the working principles</Link>
            <Link className="button" href="/act/">See ways to participate</Link>
          </div>
          <p className="legal-note">No donations. No membership enrollment. No claim of official party or ballot status.</p>
        </div>
        <div className="hero-identity" aria-label="RINO working identity">
          <div className="identity-stamp">WORKING<br />NO. 001</div>
          <div className="letter-grid" aria-hidden="true">
            <span>R</span><span>I</span><span>N</span><span>O</span>
          </div>
          <div className="identity-definition">
            <span>Reasonable</span>
            <span>Intelligent</span>
            <span>Nationalist</span>
            <span>Optimists</span>
          </div>
          <p>Original expansion / under review with five alternatives below.</p>
        </div>
      </section>

      <section className="thesis-band">
        <div className="section-shell thesis-grid">
          <p className="eyebrow">The working hypothesis</p>
          <blockquote>When neither major bloc can take an easy majority for granted, listening becomes practical—not ceremonial.</blockquote>
          <p>
            The elephants and donkeys have become symbols of a system many Americans experience as permanently polarized.
            RINO’s first proposition is institutional: create enough independent civic leverage to make negotiation matter again.
          </p>
        </div>
      </section>

      <section className="section-shell principles-preview">
        <div className="section-intro">
          <p className="eyebrow">Working principles / not an adopted platform</p>
          <h2>A posture before a platform</h2>
          <p>The project starts with how Americans engage one another, then builds policy through evidence and openly recorded disagreement.</p>
        </div>
        <div className="principle-grid">
          {content.principles.map((principle) => (
            <article key={principle.id}>
              <span>{principle.number}</span>
              <h3>{principle.title}</h3>
              <p>{principle.summary}</p>
            </article>
          ))}
        </div>
        <Link className="text-link" href="/principles/">Read the full working statement →</Link>
      </section>

      <section className="section-shell evidence-preview">
        <div className="section-heading-row">
          <div className="section-intro">
            <p className="eyebrow">Evidence archive / starts with ourselves</p>
            <h2>Claims you can inspect, cite, and correct</h2>
          </div>
          <Link className="button" href="/evidence/">Browse the archive</Link>
        </div>
        <div className="evidence-grid">
          {eboxes.map((ebox) => <EvidenceCard key={ebox.id} ebox={ebox} />)}
        </div>
      </section>

      <section className="name-lab">
        <div className="section-shell">
          <div className="section-intro">
            <p className="eyebrow">Name lab / DAN NEEDED before adoption</p>
            <h2>Six ways to reclaim RINO</h2>
            <p>The original remains the working name. These five alternatives test different shades of independence, inclusion, reform, and negotiation without declaring ideology.</p>
          </div>
          <ol className="acronym-list">
            {content.project.acronymCandidates.map((candidate, index) => (
              <li key={candidate.words}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><strong>{candidate.words}</strong><p>{candidate.note}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-shell participation-callout">
        <p className="eyebrow">Build the table before taking a side</p>
        <h2>The first act is listening.</h2>
        <p>This private build includes participation routes but deliberately keeps sign-up, donations, and formal membership inactive until governance, privacy, and legal requirements are approved.</p>
        <Link className="button button-red" href="/act/">Explore participation routes</Link>
      </section>
    </main>
  );
}
