import { copyFile, mkdir, readFile } from "node:fs/promises";

const source = new URL("../content/public-content.json", import.meta.url);
const destinations = [
  new URL("../public/data/rino-public-export.json", import.meta.url),
  new URL("../ios/RINO/Resources/rino-public-export.json", import.meta.url),
];

const sourceText = await readFile(source, "utf8");
for (const destination of destinations) {
  await mkdir(new URL("./", destination), { recursive: true });
  await copyFile(source, destination);
  const copiedText = await readFile(destination, "utf8");
  if (copiedText !== sourceText) throw new Error(`Shared-data sync failed for ${destination.pathname}`);
}

console.log("Synchronized the canonical public export for the website and iPhone app.");
