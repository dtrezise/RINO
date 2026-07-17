import { PageMasthead } from "@/components/PageMasthead";

export const metadata = {
  title: "Terms and disclosures",
  description: "Working terms and status disclosures for the RINO product preview.",
  alternates: { canonical: "/terms/" },
};

export default function TermsPage() {
  return (
    <main id="main-content" className="section-shell page-shell narrow-page policy-page">
      <PageMasthead eyebrow="Terms and disclosures / public preview" title="A product preview is not an organization filing." summary="These working disclosures reduce confusion while the party concept, governance, and legal structure remain unresolved." />
      <h2>No established party status</h2>
      <p>RINO is presented here as a proposed project. This site does not claim official recognition, ballot qualification, FEC-qualified national or state party status, political-committee registration, tax-exempt status, or authority to nominate candidates.</p>
      <h2>No fundraising</h2>
      <p>This preview does not solicit or accept contributions, dues, purchases, in-kind support, or earmarked funds. No donation processor, committee treasurer, campaign depository, reporting system, or legally reviewed solicitation notice is active.</p>
      <h2>No membership or endorsement</h2>
      <p>Reading, sharing, testing, or expressing future interest does not create formal party membership. No person, candidate, organization, expert, or public official is presented as supporting or endorsing RINO.</p>
      <h2>Working editorial material</h2>
      <p>Principles, platform questions, tests, scores, designs, and product flows may change. Factual records should retain stable IDs and material revision history; provisional political judgments require explicit adoption before they become official positions.</p>
      <h2>Not legal advice</h2>
      <p>The research and product safeguards summarize public sources for planning. They do not replace advice from qualified election, campaign-finance, tax, privacy, or organizational counsel in the relevant jurisdiction.</p>
    </main>
  );
}
