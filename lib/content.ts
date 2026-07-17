import publicContent from "@/content/public-content.json";

export const content = publicContent;
export const eboxes = publicContent.eboxes;
export const tests = publicContent.tests;

export type EvidenceBox = (typeof publicContent.eboxes)[number];
export type Principle = (typeof publicContent.principles)[number];
export type IssueLab = (typeof publicContent.platform.issueLabs)[number];

export function getEvidenceBox(slug: string) {
  return eboxes.find((ebox) => ebox.slug === slug);
}

export function getTest(testId: string) {
  return tests.find((test) => test.id === testId);
}
