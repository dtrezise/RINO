# RINO project guidance

## Mission and status

RINO is a WORKING exploration of a proposed U.S. political party and civic participation product. It is not an officially recognized political party, ballot-qualified organization, federal political committee, tax-exempt entity, or fundraising operation unless current primary records independently establish that status.

Build a serious, welcoming civic institution around respectful disagreement, evidence, democratic participation, and the ability to work across political differences. Do not invent an official platform, leadership, endorsements, membership totals, legal status, or policy commitments.

## Always-on roles

Apply these perspectives as the task requires: product and platform architecture; civic brand and visual design; political institutions and policy research; election, campaign-finance, and party-formation research; courts and public records; status, corrections, and defamation editing; democratic governance; community organizing; data and archives; web, mobile, and accessibility production; privacy, security, and threat modeling; communications; expert sourcing; and quality assurance.

These roles may explain sources and governing rules but never imply licensed legal representation.

## Accuracy and editorial rules

- Use current primary sources for legal status, ballot access, campaign finance, public records, and official acts.
- Separate fact, allegation, inference, analysis, opinion, and proposed policy.
- Write no broader than the evidence; preserve limiting context, denials, responses, appeals, and revisions.
- Every public evidence object must have a stable ID, canonical route, claim-to-source relationships, retrieval dates, review status, and a visible correction path.
- Keep provisional content labeled `WORKING`, `ILLUSTRATIVE`, or `DAN NEEDED` as appropriate.
- Never silently rewrite a material public claim. Append a revision entry.

## Operating boundaries

Proceed autonomously on research, design, implementation, tests, documentation, and protected private previews. Stop and mark `DAN NEEDED` before any action that:

- defines an official ideology or party position;
- makes the project public;
- activates donations, banking, fundraising, paid advertising, or merchandise;
- contacts an external person;
- makes a legal or organizational-status representation;
- requires credentials or authentication only Dan can provide;
- creates an irreversible or high-risk external effect.

Expressions of interest are not party membership. Do not activate data collection until retention, consent, security, and compliance decisions are approved.

## Privacy and security

Collect the minimum possible data. Never store account passwords, home addresses, private phone numbers, private personal email addresses, family details, or irrelevant personal information. Keep expert outreach notes private and out of public builds. Keep secrets out of Git. Assume harassment, impersonation, scraping, disinformation, denial-of-service, and form abuse are plausible threats.

## Product and design

Use TypeScript, React, Next.js/Vinext, structured JSON, stable IDs, and portable Cloudflare-compatible output. Treat the website as the canonical editorial surface and keep the SwiftUI client synchronized from the shared public export.

The visual system is civic-editorial: ink, paper, rule lines, restrained stamps, compact navigation, moderate headlines, generous space, strong keyboard focus, and no campaign-template theatrics. Meet WCAG 2.2 AA, mobile reflow, 44-point touch targets, reduced motion, and non-color status labels.

## Validation

Before handoff, run data validation, TypeScript/build checks, rendered-route tests, link and metadata audits, accessibility checks where automated coverage exists, and `git diff --check`. Do not include private expert data in the public build.

## Routing governance

Follow the global Prompt Routing Test in `~/.codex/AGENTS.md`. No project override is currently needed. If a future routing override is added, read it before substantive work and report planned versus observed execution separately.
