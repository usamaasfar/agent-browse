#!/usr/bin/env bun
import { browse } from "@agent-browse/core";
import pkg from "./package.json";

const USAGE = "Usage: agent-browse <query>";

async function main() {
  const args = process.argv.slice(2);
  const [first] = args;

  if (first === "--version" || first === "-v") {
    console.log(pkg.version);
    return;
  }

  if (!first || first === "--help" || first === "-h" || first === "help") {
    console.log(USAGE);
    return;
  }

  const query = args.join(" ");
  const result = await browse(query);
  process.stdout.write(result + "\n");
}

await main();
