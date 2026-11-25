// One Line, One Chill — make.fun bounty
// u-azazex-one-line-one-chill-6d4d5488
//
// Writes a single line of horror (1-200 characters) to /output/entry.txt:
// one sentence, one breath, no setup, no second chance.
// Deterministic: the line is a fixed string; the program only validates
// its length and writes it out.
//
// Run: node main.ts

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.OUTPUT_DIR ?? "/output";

const LINE =
  "The gravedigger at my father's burial asked me to check the headstone, and my name was already carved beneath his, with today's date.";

const chars = [...LINE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry must be 1-200 characters, got ${chars}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (!LINE.endsWith(".")) {
  throw new Error("entry must be a single sentence");
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), LINE, "utf8");
console.log(`wrote ${chars} chars to ${join(OUTPUT_DIR, "entry.txt")}`);
console.log(LINE);
