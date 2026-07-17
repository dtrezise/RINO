import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const workerUrl = new URL(`../dist/server/index.js?test=${process.pid}-${Date.now()}`, import.meta.url);
const { default: worker } = await import(workerUrl.href);
const environment = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
const context = { waitUntil() {}, passThroughOnException() {} };

async function render(path = "/") {
  return worker.fetch(
    new Request(`https://private-preview.example${path}`, { headers: { accept: "text/html" } }),
    environment,
    context,
  );
}

test("server-renders the RINO product shell without starter metadata", async () => {
  const response = await render("/");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /RINO — A proposed party/);
  assert.match(html, /PRIVATE WORKING PREVIEW/);
  assert.match(html, /Disagree like neighbors/);
  assert.match(html, /No donations/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/);
  assert.match(response.headers.get("content-security-policy") ?? "", /frame-ancestors 'none'/);
  assert.equal(response.headers.get("x-content-type-options"), "nosniff");
  assert.equal(response.headers.get("x-robots-tag"), "noindex, nofollow, noarchive");
});

test("renders canonical evidence detail with status, sources, analysis, and sharing", async () => {
  const response = await render("/evidence/rino-formation-status/");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /RINO-EBOX-0001/);
  assert.match(html, /WORKING STATUS/);
  assert.match(html, /Why it matters/);
  assert.match(html, /Federal Election Commission/);
  assert.match(html, /Claim-to-source relationships/);
  assert.match(html, /Share evidence/);
  assert.match(html, /Request a correction/);
  assert.match(html, /rel="canonical"/);
  assert.match(html, /og:image/);
});

test("keeps the public export synchronized and free of private expert fields", async () => {
  const [canonical, publicExport, appExport] = await Promise.all([
    readFile(new URL("../content/public-content.json", import.meta.url), "utf8"),
    readFile(new URL("../public/data/rino-public-export.json", import.meta.url), "utf8"),
    readFile(new URL("../ios/RINO/Resources/rino-public-export.json", import.meta.url), "utf8"),
  ]);
  assert.equal(publicExport, canonical);
  assert.equal(appExport, canonical);
  assert.doesNotMatch(publicExport.toLowerCase(), /homeaddress|privatephone|privateemail|candidate-specific fit/);
});

test("ships mobile reflow, focus, reduced motion, and privacy guards", async () => {
  const [css, robots, manifest] = await Promise.all([
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../public/robots.txt", import.meta.url), "utf8"),
    readFile(new URL("../public/manifest.webmanifest", import.meta.url), "utf8"),
  ]);
  assert.match(css, /@media \(max-width: 720px\)/);
  assert.match(css, /prefers-reduced-motion/);
  assert.match(css, /focus-visible/);
  assert.match(css, /overflow-x: hidden/);
  assert.match(robots, /Disallow: \/$/m);
  assert.equal(JSON.parse(manifest).display, "standalone");
});
