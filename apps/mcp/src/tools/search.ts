import { search as searchWeb } from "@agent-browse/core";
import type { InferSchema, ToolMetadata } from "xmcp";
import { z } from "zod";

export const schema = {
  query: z.string().describe("The search query"),
};

export const metadata: ToolMetadata = {
  name: "search",
  description: "Search the web and return an answer with cited sources.",
  annotations: {
    title: "Web Search",
    destructiveHint: false,
    readOnlyHint: true,
    idempotentHint: false,
    openWorldHint: true,
  },
  _meta: {
    openai: {
      toolInvocation: {
        invoking: "Searching the web...",
        invoked: "Search complete",
      },
    },
  },
};

export default async function search({ query }: InferSchema<typeof schema>) {
  return searchWeb(query);
}
