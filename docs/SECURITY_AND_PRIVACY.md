# Security and privacy — threat-led baseline

## Threat model

Assume harassment, credential attacks, impersonation, scraping, disinformation, denial of service, malicious form submissions, poisoned evidence submissions, dependency compromise, unauthorized editorial changes, supporter-data exposure, and attempts to identify private staff or experts.

## Current first pass

- no active supporter, membership, payment, donation, event, or outreach collection;
- no application-owned authentication or secret-bearing client code;
- owner-only protected preview as the required deployment posture;
- `noindex` metadata and crawler disallowance as defense in depth, not access control;
- canonical public export excludes private expert data;
- minimal dependencies and automated build, data, route, and source-state checks;
- offline cache limited to public content.

## Activation gates

Before collecting data: identify the responsible legal entity and data controller; adopt purpose limitation, consent, retention, deletion, access, correction, incident, and lawful-demand procedures; separate roles; require MFA and least privilege; choose abuse-resistant forms; add rate limiting, bot protection, validation, monitoring, and encrypted backups; test exports and deletion; publish a complete notice.

Before public deployment: review security headers and Content Security Policy against the final hosting environment; enable Cloudflare proxying and WAF where appropriate; use a project-specific administrative email; preserve domain-registration privacy; configure SSL, SPF, DKIM, and DMARC; protect branches and CI; enable dependency and secret scanning; prepare impersonation and incident playbooks.

Never put personal home addresses, private phone numbers, personal email addresses, account passwords, payment details, or unnecessary identity information in the product repository.
