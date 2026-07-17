# Deployment — temporary public preview

## Required posture

Dan approved a temporary public website preview on July 17, 2026. Public access does not authorize indexing, fundraising, membership enrollment, party or ballot-status claims, outreach, or launch announcements.

## Release gate

Validate canonical data, synchronize the app export, lint, build, run rendered-route tests, audit canonical routes and internal links, inspect social metadata and asset dimensions, verify no private expert fields are present, check keyboard and mobile behavior, run `git diff --check`, and commit the exact source state.

## Hosting

Sites owns the protected Cloudflare-compatible preview and deployment wiring. `.openai/hosting.json` stores only the opaque Sites project ID plus logical D1/R2 bindings. Runtime secrets belong in the hosting environment, never in Git.

The temporary public copy is a static GitHub Pages export with no GitHub or repository links in the website interface. Do not add a custom domain until domain, privacy, email, governance, and legal requirements are complete.

## Rollback and continuity

Each release must map to a pushed Git commit. Preserve previous versions for rollback. Structured exports remain portable if the hosting surface changes. A durable public launch still needs a documented owner, incident contact, correction channel, monitoring plan, and launch checklist.
