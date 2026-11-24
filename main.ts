process.umask(0o022);
// Entry program for the "Post the Meme, Win the Feed" bounty
// (u-myronera-post-the-meme-win-the-feed-2de960bf, Node 22, stdlib only).
//
// The meme itself lives on X, not in this repo. This program has one job:
// take the POST.json file sitting next to it in the repository and place a
// copy at /output/POST.json, where the bounty gate picks it up and reads
// the post address from it.
//
// Two promises shape the code below, both taken from the kit's own
// instructions (AGENT.md, step 6):
//   * On success the program prints nothing. Anything worth saying is an
//     error, goes to stderr, and comes with a non-zero exit code.
//   * A POST.json that cannot score must fail here, not at the gate: the
//     file must exist, parse as a JSON object, and its url must name an
//     actual X post — handle, /status/, numeric id and all. The kit's
//     <handle>/<id> placeholder is rejected by name, because leaving it
//     in is the one mistake this entry is most likely to make.
//
// The program reads nothing outside the bot directory, writes nothing
// outside the output directory, touches no network and no clock, and
// copies the file byte for byte, so two runs write the same bytes.
//
// The bot directory and the output directory can both be overridden through
// environment variables, which is how the program is tested locally:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = join(botDir, "POST.json");
const target = join(outputDir, "POST.json");

// Every failure leaves through here: one clear line on stderr, exit 1.
function fail(message) {
  console.error(message);
  process.exit(1);
}

function detailOf(error) {
  return error instanceof Error ? error.message : String(error);
}

// Fail loudly here rather than at the gate, in the order a human fixing
// the entry would want to hear about it: unreadable file first, then
// unparseable JSON, then a JSON value that is not an object, then a url
// that is missing, not a string, still the placeholder, or not the
// address of an actual post.
let raw;
try {
  raw = readFileSync(source, "utf8");
} catch (error) {
  fail(`POST.json could not be read from ${source}: ${detailOf(error)}`);
}

let parsed;
try {
  parsed = JSON.parse(raw);
} catch (error) {
  fail(`POST.json is not valid JSON: ${detailOf(error)}`);
}

if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
  fail('POST.json must hold a JSON object of the form {"url": "https://x.com/<handle>/status/<id>"}');
}

const url = parsed.url;
if (typeof url !== "string" || url.trim() === "") {
  fail("POST.json has no usable \"url\" field: it must be the post's address as a string");
}
if (url.includes("<") || url.includes(">")) {
  fail(`POST.json still holds the placeholder address (${url}): post the meme, then put the real link in`);
}
// A real post address: https://x.com/<handle>/status/<numeric id>, with
// the twitter.com spelling the kit also accepts, and an optional trailing
// path, query or fragment after the id. A profile page, a bare domain or
// any other x.com link fails here instead of being refused at the gate.
if (!/^https:\/\/(?:x|twitter)\.com\/[A-Za-z0-9_]{1,15}\/status\/\d+(?:[/?#]\S*)?$/.test(url.trim())) {
  fail(`POST.json does not name an X post address: ${url}`);
}

try {
  mkdirSync(outputDir, { recursive: true });
  copyFileSync(source, target);
} catch (error) {
  fail(`Could not copy POST.json from ${source} to ${target}: ${detailOf(error)}`);
}

// Read the copy back before calling it done. The gate trusts whatever
// lands in the output directory, so a short, garbled or half-written copy
// must not slip through quietly — and checking costs one small read.
let copied;
try {
  copied = readFileSync(target, "utf8");
} catch (error) {
  fail(`Could not read back the copy at ${target}: ${detailOf(error)}`);
}
if (copied !== raw) {
  fail(`Copy verification failed: ${target} does not match ${source} byte for byte`);
}
