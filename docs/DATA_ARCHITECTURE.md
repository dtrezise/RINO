# Data architecture — RINO v0.1

## Canonical source and exports

`content/public-content.json` is the canonical first-pass editorial source. `scripts/sync-ios-data.mjs` generates the public download and iPhone bundle resource. The generated copies must match byte-for-byte and are never edited manually.

Stable IDs are permanent. Slugs may receive redirects if changed, but IDs must not be recycled. Material revisions append history instead of replacing the existence of a prior reviewed claim.

## Core logical records

- `ebox`: permanent identity, slug, status, summary, analysis, dates, review state.
- `claim`: exact proposition and status.
- `source`: authority, publisher, title, URL, retrieval, locator, excerpt treatment.
- `claim_source_relationship`: supports, contradicts, contextualizes, documents status, denial, or response.
- `test_definition`: versioned purpose, criteria, guidance, sources, score bands.
- `ebox_test_result`: finding, applicable criteria, criterion scores, rationales, points, review.
- `revision`: changed field, prior and new values, reason, reviewer, date.
- `expert_brief`: private companion record keyed to eBox ID; never part of the public export.

## Scale gates

Design normalized tables and permanent IDs immediately. Activate D1 around 250–500 records or when collaborative editing begins. Activate R2 only for independently permissible archived records, recordings, screenshots, or original assets. Move filtering and search server-side around 1,000 records. Treat full-text indexes as rebuildable and preserve scheduled JSON and SQL exports.

## Validation invariants

Unique eBox IDs and slugs; valid claim and source references; declared relationship type; adequate source count; scores between 0 and 4 or `N/A`; irrelevant criteria excluded from possible points; normalized score reproducible; canonical route present; no private expert fields in the public export.
