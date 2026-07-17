# RINO iPhone app — WORKING

Open `RINO.xcodeproj` in Xcode. The SwiftUI app reads `RINO/Resources/rino-public-export.json`, a generated copy of the website’s canonical public export.

Run `pnpm run sync:ios` at the repository root after editing `content/public-content.json`. Do not edit the bundled JSON manually.

The first shell includes Home, Principles, Platform labs, searchable/filterable Evidence, criterion-ready evidence detail, device-local Saved items, sharing, and participation-compatible links. It intentionally has no accounts, push messaging, analytics, donations, formal membership, or private expert data.
