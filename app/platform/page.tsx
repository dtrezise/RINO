import { PageMasthead } from "@/components/PageMasthead";
import { content } from "@/lib/content";

export const metadata = {
  title: "Platform lab",
  description: "Working issue questions for a proposed RINO platform—no adopted positions yet.",
  alternates: { canonical: "/platform/" },
};

export default function PlatformPage() {
  return (
    <main id="main-content" className="section-shell page-shell">
      <PageMasthead
        eyebrow="Platform lab / positions intentionally withheld"
        title="Start with the question. Show the evidence. Record the disagreement."
        summary={content.platform.summary}
      />
      <div className="status-callout"><strong>{content.platform.status}</strong><span>Adoption rules and official positions require founder approval and future governance.</span></div>
      <div className="lab-grid">
        {content.platform.issueLabs.map((lab, index) => (
          <article className="lab-card" key={lab.id}>
            <div className="lab-index">LAB {String(index + 1).padStart(2, "0")}</div>
            <p className="status-label">{lab.stage}</p>
            <h2>{lab.title}</h2>
            <p>{lab.question}</p>
            <div className="lab-footer">Working question / no position adopted</div>
          </article>
        ))}
      </div>
      <section className="process-strip" aria-labelledby="platform-process">
        <p className="eyebrow">Proposed platform process</p>
        <h2 id="platform-process">Listen → document → test → deliberate → decide → revisit</h2>
        <ol>
          <li><strong>Listen</strong><span>Seek affected experience across political and geographic lines.</span></li>
          <li><strong>Document</strong><span>Map governing facts, uncertainty, tradeoffs, and constraints.</span></li>
          <li><strong>Test</strong><span>Apply published criteria without manufacturing a conclusion.</span></li>
          <li><strong>Deliberate</strong><span>Record majority, minority, and unresolved views.</span></li>
          <li><strong>Decide</strong><span>Use adopted governance—not website copy—to establish a position.</span></li>
          <li><strong>Revisit</strong><span>Set review dates and publish material revisions.</span></li>
        </ol>
      </section>
    </main>
  );
}
