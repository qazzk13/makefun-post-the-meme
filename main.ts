process.umask(0o022);
// Entry program for the "Post the Meme, Win the Feed" bounty
// (u-myronera-post-the-meme-win-the-feed-2de960bf, Node 22, stdlib only).
//
// The meme itself lives on X, not in this repo. This program has one job:
// take the POST.json file sitting next to it in the repository and place a
// copy at /output/POST.json, where the bounty gate picks it up and reads
// the post address from it.
//
// The bot directory and the output directory can both be overridden through
// environment variables, which is how the program is tested locally:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = join(botDir, "POST.json");
const target = join(outputDir, "POST.json");

try {
  mkdirSync(outputDir, { recursive: true });
  copyFileSync(source, target);
  console.log(`POST.json copied: ${source} -> ${target}`);
} catch (error) {
  const detail = error instanceof Error ? error.message : String(error);
  console.error(`Could not copy POST.json from ${source}: ${detail}`);
  process.exit(1);
}
