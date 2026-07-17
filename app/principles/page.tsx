import { PageMasthead } from "@/components/PageMasthead";
import { content } from "@/lib/content";

export const metadata = {
  title: "Working principles",
  description: "The provisional civic principles shaping RINO before an official platform exists.",
  alternates: { canonical: "/principles/" },
};

export default function PrinciplesPage() {
  return (
    <main id="main-content" className="section-shell page-shell">
      <PageMasthead
        eyebrow="Principles / working draft 0.1"
        title="A way to disagree before a list of things to agree on."
        summary="These principles restate the founding direction supplied for this project. They are provisional and do not constitute an adopted party platform."
      />
      <div className="principles-longform">
        {content.principles.map((principle) => (
          <article key={principle.id} id={principle.id}>
            <span>{principle.number}</span>
            <div>
              <h2>{principle.title}</h2>
              <p>{principle.summary}</p>
            </div>
          </article>
        ))}
      </div>
      <section className="working-note">
        <p className="eyebrow">What remains open</p>
        <h2>A principle is not yet a policy.</h2>
        <p>Members, governance, amendment rules, conflict-resolution practices, and the threshold for adopting positions still require design and approval. Nothing on this page authorizes a candidate, committee, or spokesperson to speak for RINO.</p>
      </section>
    </main>
  );
}
