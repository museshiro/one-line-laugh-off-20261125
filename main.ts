import { mkdirSync, writeFileSync } from "node:fs";

const first =
  "On Earth, people celebrate another year by setting seven candles on fire";
const second = " and then spitting on them.";
const line = first + second;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
