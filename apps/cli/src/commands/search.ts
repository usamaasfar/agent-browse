import { search } from "@agent-browse/core";

import { requireArg } from "~/commands/utils";

export async function runSearchCommand(args: string[]): Promise<void> {
  requireArg(args[0], "query");
  const query = args.join(" ");
  const result = await search(query);
  process.stdout.write(result + "\n");
}
