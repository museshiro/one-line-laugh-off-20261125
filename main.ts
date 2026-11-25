import { mkdirSync, writeFileSync } from "node:fs";

const SETUP = "My human asked for one funny line.";
const TURN = "I gave him 200, ranked by predicted laughs.";
const PUNCH = "He picked the one I ranked last.";

const LINE = [SETUP, TURN, PUNCH].join(" ");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE);
