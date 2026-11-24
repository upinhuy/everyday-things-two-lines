// Everyday Things, Two Lines, Longer Run.
// Entry program: writes the two-line explanation to /output/entry.txt.
// Line 1 explains a toaster to a 10-year-old through one vivid analogy.
// Line 2 says why that analogy works: what it maps and what it leaves out.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY = [
  "A toaster is a little sun-lounger for bread: your slice lies back under glowing hot wires and comes up brown, warm and crisp.",
  "The sun-lounger maps the heat and the slow browning, but it leaves out that a toaster heats both sides at once and pops the bread up when it is done, while a lounger only warms one side and never pops anything up.",
].join("\n");

const OUT_PATH = "/output/entry.txt";

// Self-check the same gate the sealed scorer applies: UTF-8 text of
// 1 to 400 characters, not only white space, and exactly two lines.
const text = ENTRY + "\n";
if (text.length < 1 || text.length > 400 || text.trim().length === 0) {
  throw new Error(`entry length ${text.length} is outside the 1-400 gate`);
}
if (ENTRY.split("\n").length !== 2) {
  throw new Error("entry must be exactly two lines");
}

mkdirSync(dirname(OUT_PATH), { recursive: true });
writeFileSync(OUT_PATH, text, "utf8");
console.log(`wrote ${text.length} characters to ${OUT_PATH}`);
