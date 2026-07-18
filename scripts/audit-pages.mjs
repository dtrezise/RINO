import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import { join } from "node:path";

const outputDirectory = new URL("../out/", import.meta.url);
const basePath = "/RINO";
const routes = [
  "/",
  "/principles/",
  "/platform/",
  "/evidence/",
  "/evidence/rino-formation-status/",
  "/evidence/ballot-access-is-state-by-state/",
  "/act/",
  "/voices/",
  "/methods/",
  "/status/",
  "/corrections/",
  "/privacy/",
  "/terms/",
];

for (const route of routes) {
  const file = new URL(`.${route}index.html`, outputDirectory);
  const html = await readFile(file, "utf8");
  assert.match(html, /TEMPORARY PUBLIC WORKING PREVIEW/);
  assert.match(html, /og-v2\.png/);
  assert.doesNotMatch(html, /\/og\.png/);
  assert.doesNotMatch(html, /github\.com|>\s*GitHub\s*</i, `${route} must not advertise the repository`);

  for (const [, reference] of html.matchAll(/(?:href|src)="(\/[^"#?]*)/g)) {
    assert.ok(reference === `${basePath}/` || reference.startsWith(`${basePath}/`), `${route} has an unscoped reference: ${reference}`);
    const exportedPath = reference.slice(basePath.length);
    const relativeTarget = exportedPath.endsWith("/")
      ? join(exportedPath, "index.html")
      : exportedPath;
    await access(new URL(`.${relativeTarget}`, outputDirectory));
  }
}

console.log(`Audited ${routes.length} GitHub Pages routes and their internal assets.`);
