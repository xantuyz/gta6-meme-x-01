// gta6-meme-x-01 — make.fun bounty "Post a GTA 6 meme on X".
//
// This program is the whole entrypoint (Node 22, standard library only).
// It copies POST.json from the repository root into the output directory,
// where the house gate reads it. The entry itself is the X post that
// POST.json names: the house reads the post from X (its first picture and
// its text) and hands that to the judge. Nothing this program writes about
// the post is judged, so it keeps its job deliberately tiny: one file in,
// the same bytes out, no network, no clock, no files outside the repo.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// On success it prints nothing and exits 0. Any failure exits 1.

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

// The grader runs with /bot read-only and /output writable; outside the
// grader these two variables stand in for them.
const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The post address must look like an X post URL, the only shapes the gate
// accepts: https://x.com/<handle>/status/<id> (or twitter.com, www./mobile.
// in front), or the /i/web/status/<id> form X also shows.
const POST_URL =
  /^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/([^/]+\/status\/\d+|i\/web\/status\/\d+)\/?$/;

const source = join(BOT_DIR, "POST.json");
const target = join(OUTPUT_DIR, "POST.json");

let parsed: unknown;
try {
  parsed = JSON.parse(readFileSync(source, "utf8"));
} catch (err) {
  console.error(`POST.json could not be read as JSON: ${(err as Error).message}`);
  process.exit(1);
}

const url = (parsed as { url?: unknown } | null)?.url;
if (typeof url !== "string" || !POST_URL.test(url)) {
  console.error("POST.json must be an object with a url like https://x.com/<handle>/status/<id>");
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(source, target);
} catch (err) {
  console.error(`POST.json could not be copied to ${OUTPUT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

// Read the copy back: the grader runs this program twice and the two runs
// must write the same bytes, so confirm the copy is byte for byte the
// source before reporting success.
if (!readFileSync(target).equals(readFileSync(source))) {
  console.error(`POST.json copy in ${OUTPUT_DIR} differs from ${source}`);
  process.exit(1);
}
