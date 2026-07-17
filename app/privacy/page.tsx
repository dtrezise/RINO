import { PageMasthead } from "@/components/PageMasthead";

export const metadata = {
  title: "Privacy",
  description: "The working privacy baseline for the RINO public preview.",
  alternates: { canonical: "/privacy/" },
};

export default function PrivacyPage() {
  return (
    <main id="main-content" className="section-shell page-shell narrow-page policy-page">
      <PageMasthead eyebrow="Privacy / working baseline" title="Collect less. Explain more. Delete on purpose." summary="This public first pass is designed to work without supporter accounts, tracking profiles, donation data, or active submission forms." />
      <h2>Current preview</h2>
      <p>The product does not intentionally collect supporter names, email addresses, phone numbers, political affiliations, payment information, or formal membership records. The participation form is disabled and does not submit data.</p>
      <h2>Device-local behavior</h2>
      <p>The progressive web app may use a service worker to cache public interface files for reliability. Future saved evidence in the iPhone app is designed to remain on the device unless a clearly disclosed synchronization feature is later approved.</p>
      <h2>Before activation</h2>
      <p>Any future analytics, sign-up, authentication, donations, event registration, or messaging feature requires a documented purpose, lawful basis, consent where required, retention period, deletion path, access controls, incident response, and vendor review.</p>
      <h2>Not included</h2>
      <p>Private expert research, outreach notes, personal contact information, and security-sensitive production records are not part of the public data export.</p>
    </main>
  );
}
