import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const contentUrl = new URL("../content/public-content.json", import.meta.url);
const content = JSON.parse(await readFile(contentUrl, "utf8"));

assert.match(content.schemaVersion, /^\d+\.\d+\.\d+$/);
assert.ok(!Number.isNaN(Date.parse(content.generatedAt)), "generatedAt must be an ISO date");

const ids = new Set();
const slugs = new Set();
const testIds = new Set(content.tests.map((test) => test.id));

for (const ebox of content.eboxes) {
  assert.match(ebox.id, /^RINO-EBOX-\d{4}$/);
  assert.match(ebox.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
  assert.ok(!ids.has(ebox.id), `duplicate eBox ID: ${ebox.id}`);
  assert.ok(!slugs.has(ebox.slug), `duplicate eBox slug: ${ebox.slug}`);
  ids.add(ebox.id);
  slugs.add(ebox.slug);

  const claimIds = new Set(ebox.claims.map((claim) => claim.id));
  const sourceIds = new Set(ebox.sources.map((source) => source.id));
  assert.ok(sourceIds.size > 0, `${ebox.id} requires at least one source`);

  for (const relationship of ebox.sourceRelationships) {
    assert.ok(claimIds.has(relationship.claimId), `${ebox.id} relationship references an unknown claim`);
    assert.ok(sourceIds.has(relationship.sourceId), `${ebox.id} relationship references an unknown source`);
    assert.ok(
      ["supports", "contradicts", "contextualizes", "documents status", "contains a denial", "contains a response"].includes(relationship.relationship),
      `${ebox.id} has an invalid source relationship`,
    );
  }

  for (const result of ebox.applicableTests) {
    assert.ok(testIds.has(result.testId), `${ebox.id} references an unknown test`);
    assert.ok(["Fails", "Implicates", "Not directly implicated", "Passes"].includes(result.finding));
    const applicable = result.criterionScores.filter((criterion) => criterion.score !== "N/A");
    for (const criterion of applicable) {
      assert.ok(Number.isInteger(criterion.score) && criterion.score >= 0 && criterion.score <= 4);
    }
    const earned = applicable.reduce((sum, criterion) => sum + criterion.score, 0);
    const possible = applicable.length * 4;
    assert.equal(result.earnedPoints, earned);
    assert.equal(result.possiblePoints, possible);
    assert.equal(result.normalizedScore, Math.round((earned / possible) * 100));
  }
}

const serialized = JSON.stringify(content).toLowerCase();
for (const forbidden of ["homeaddress", "privatephone", "privateemail", "candidate-specific fit"]) {
  assert.ok(!serialized.includes(forbidden), `public export contains private expert field: ${forbidden}`);
}

console.log(`Validated ${content.eboxes.length} eBoxes, ${content.tests.length} test definition, and ${content.principles.length} working principles.`);
