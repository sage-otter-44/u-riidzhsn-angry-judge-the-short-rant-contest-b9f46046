import * as fs from "node:fs";

// The rant is built from escalating beats so each sentence raises the
// grievance one notch before the final twist lands.
const beats: string[] = [
  "My printer only ever runs out of ink at 4:59 p.m. on a Friday, right when the one document I need is due.",
  "It blinks 'paper jam' at a tray full of paper, like a toddler insisting the floor is lava.",
  "I have fed it, patted it, whispered to it, and it still prints half a page, then sighs.",
  "It saw me cry over a spreadsheet once and did nothing.",
  "I am convinced it is not broken — it is unionised.",
];

const rant = beats.join(" ");

// Gate: the competition accepts UTF-8 text of 1 to 400 characters.
if (rant.length < 1 || rant.length > 400) {
  throw new Error(`Entry is ${rant.length} chars, outside the 1-400 gate`);
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", rant, "utf8");
console.log(`Wrote ${rant.length} chars to /output/entry.txt`);
