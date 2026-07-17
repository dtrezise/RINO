# RINO civic platform — WORKING

RINO is a private first-pass product for a proposed U.S. political party. The current working expansion is **Reasonable Intelligent Nationalist Optimists**. The project reclaims “RINO” as an invitation to reason, evidence, national purpose, optimism, and respectful disagreement across prior political identities.

This repository does **not** establish an officially recognized political party, ballot-qualified organization, political committee, tax-exempt entity, fundraising operation, membership organization, leadership slate, endorsement, or adopted policy platform.

## What is included

- a responsive, multi-route Next.js/Vinext website;
- an original civic-editorial design system;
- a reusable eBox evidence record with stable IDs and claim-source relationships;
- an accessible share composer with round-trip evidence URLs;
- a versioned test and criterion-level score model;
- structured public JSON plus validation and export tooling;
- PWA metadata and offline shell behavior;
- a SwiftUI iPhone project that reads the synchronized public export;
- operating, editorial, privacy, security, research, data, interview, and deployment documentation;
- private-preview hosting configuration.

## Local workflow

Use Node 22+ and pnpm 11+.

```bash
pnpm install
pnpm run sync:ios
pnpm run dev
pnpm test
pnpm run audit:routes
```

The website’s canonical content source is `content/public-content.json`. Run `pnpm run sync:ios` after editing it; the command produces the public download and the iPhone bundle copy. Do not edit the generated copies manually.

## Status gates

Donations, supporter submissions, formal membership, endorsements, public launch, committee claims, tax claims, and ballot-access claims remain inactive. See `docs/WORKING_PRODUCT_BRIEF.md` and the in-product formation ledger.
