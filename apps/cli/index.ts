#!/usr/bin/env bun
import { runFetchCommand } from "~/commands/fetch";
import { runSearchCommand } from "~/commands/search";
import pkg from "./package.json";

const USAGE = "Usage: agent-browse <search|fetch> ...";

function printHelp(): void {
  console.log(USAGE);
}

async function main() {
  const [command, ...rest] = process.argv.slice(2);

  if (command === "--version" || command === "-v") {
    console.log(pkg.version);
    return;
  }

  if (command === undefined || command === "--help" || command === "-h" || command === "help") {
    printHelp();
    return;
  }

  switch (command) {
    case "search": {
      await runSearchCommand(rest);
      return;
    }

    case "fetch": {
      await runFetchCommand(rest);
      return;
    }

    default:
      throw new Error(USAGE);
  }
}

await main();
