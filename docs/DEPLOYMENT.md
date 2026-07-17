# Deployment — private preview only

## Required posture

The first working deployment must be owner-only and protected. A production URL does not authorize public access, indexing, fundraising, membership enrollment, status claims, outreach, or launch announcements.

## Release gate

Validate canonical data, synchronize the app export, lint, build, run rendered-route tests, audit canonical routes and internal links, inspect social metadata and asset dimensions, verify no private expert fields are present, check keyboard and mobile behavior, run `git diff --check`, and commit the exact source state.

## Hosting

Sites owns the deployed Cloudflare-compatible resources and deployment wiring. `.openai/hosting.json` stores only the opaque Sites project ID plus logical D1/R2 bindings. Runtime secrets belong in the hosting environment, never in Git.

Prefer a private owner-only Sites deployment. If a deployment cannot verify owner-only access, stop and obtain explicit approval before any shared or public deployment. Do not add a custom domain until public-launch approval and domain/privacy/email requirements are complete.

## Rollback and continuity

Each saved version must map to a pushed Git commit. Preserve previous versions for rollback. Structured exports remain portable if the hosting surface changes. A future public release needs a documented owner, incident contact, correction channel, monitoring plan, and launch checklist.
