import assert from "node:assert/strict";

const requiredRoutes = [
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

const workerUrl = new URL(`../dist/server/index.js?audit=${Date.now()}`, import.meta.url);
const { default: worker } = await import(workerUrl.href);
const environment = {
  ASSETS: {
    fetch: async () => new Response("Not found", { status: 404 }),
  },
};
const context = { waitUntil() {}, passThroughOnException() {} };

for (const route of requiredRoutes) {
  const response = await worker.fetch(
    new Request(`https://private-preview.example${route}`, { headers: { accept: "text/html" } }),
    environment,
    context,
  );
  assert.equal(response.status, 200, `${route} should resolve`);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html/i, `${route} should return HTML`);
  const html = await response.text();
  assert.match(html, /RINO/);
  assert.doesNotMatch(html, /codex-preview/);
}

console.log(`Audited ${requiredRoutes.length} canonical routes.`);
