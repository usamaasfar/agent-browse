import { fetch } from "@agent-browse/core";

import { requireArg } from "~/commands/utils";

export async function runFetchCommand(args: string[]): Promise<void> {
  requireArg(args[0], "url or query");

  const links: string[] = [];
  const queryWords: string[] = [];

  for (const arg of args) {
    if (arg.startsWith("http://") || arg.startsWith("https://")) {
      links.push(arg);
    } else {
      queryWords.push(arg);
    }
  }

  if (links.length === 0) {
    throw new Error("Missing required argument: at least one URL");
  }

  const query = queryWords.join(" ");
  const result = await fetch(query, links);
  process.stdout.write(result + "\n");
}
