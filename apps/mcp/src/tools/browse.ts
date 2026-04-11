import { browse as browseWeb } from "@agent-browse/core";
import type { InferSchema, ToolMetadata } from "xmcp";
import { z } from "zod";

export const schema = {
  query: z.string().describe("The query to answer. Include URLs directly in the query to fetch them."),
};

export const metadata: ToolMetadata = {
  name: "browse",
  description: "Browse the web to answer a query. Searches, fetches, and navigates sites as needed.",
  annotations: {
    title: "Web Browse",
    destructiveHint: false,
    readOnlyHint: true,
    idempotentHint: false,
    openWorldHint: true,
  },
  _meta: {
    openai: {
      toolInvocation: {
        invoking: "Browsing the web...",
        invoked: "Browse complete",
      },
    },
  },
};

export default async function browse({ query }: InferSchema<typeof schema>) {
  return browseWeb(query);
}
