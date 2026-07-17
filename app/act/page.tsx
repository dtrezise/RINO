import { PageMasthead } from "@/components/PageMasthead";

export const metadata = {
  title: "Participate",
  description: "Working participation routes for RINO, with membership, supporter data, and donations inactive.",
  alternates: { canonical: "/act/" },
};

const routes = [
  ["Host a listening table", "Bring together people who vote differently and document where the real disagreements—and surprising agreements—are."],
  ["Audit an issue brief", "Help locate primary sources, identify overstatement, and surface contrary evidence before a platform discussion begins."],
  ["Test the product", "Review the website and app for accessibility, comprehension, privacy, and whether status labels stay impossible to miss."],
  ["Map a state", "Prepare a source-first research brief on one state’s current party-recognition, ballot-access, and election-administration rules."],
];

export default function ActPage() {
  return (
    <main id="main-content" className="section-shell page-shell">
      <PageMasthead
        eyebrow="Act / participation design preview"
        title="Participation begins before membership."
        summary="The first routes emphasize listening, evidence, and product testing. Sign-up, formal membership, donations, merchandise, and paid organizing remain inactive."
      />
      <div className="act-grid">
        {routes.map(([title, summary], index) => (
          <article key={title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h2>{title}</h2>
            <p>{summary}</p>
            <button type="button" disabled>Express interest — not active</button>
          </article>
        ))}
      </div>
      <section className="inactive-form" aria-labelledby="interest-preview">
        <div>
          <p className="eyebrow">Interface preview / no submission</p>
          <h2 id="interest-preview">Supporter interest</h2>
          <p>This form is intentionally disabled. Before activation, RINO needs approved consent language, data retention and deletion rules, security controls, a responsible entity, and a clear distinction between supporter interest and formal party membership.</p>
        </div>
        <form aria-describedby="form-disabled-note">
          <label>Name<input type="text" name="name" autoComplete="name" disabled /></label>
          <label>Email<input type="email" name="email" autoComplete="email" disabled /></label>
          <label>State or territory<select name="state" disabled><option>Select later</option></select></label>
          <label className="full-field">How would you like to help?<textarea name="interest" rows={4} disabled /></label>
          <button className="button button-red full-field" type="submit" disabled>Not collecting information yet</button>
          <p id="form-disabled-note" className="full-field legal-note">No information entered here is accepted, transmitted, or stored.</p>
        </form>
      </section>
    </main>
  );
}
