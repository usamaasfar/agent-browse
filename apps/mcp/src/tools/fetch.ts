import { fetch as fetchPages } from "@agent-browse/core";
import type { InferSchema, ToolMetadata } from "xmcp";
import { z } from "zod";

export const schema = {
  query: z.string().describe("The question to answer from the fetched pages. Leave empty to return raw page content."),
  links: z.array(z.string()).describe("URLs to fetch"),
};

export const metadata: ToolMetadata = {
  name: "fetch",
  description: "Fetch one or more URLs and return an answer grounded in the page content. If query is empty, returns raw page content with no AI involved.",
  annotations: {
    title: "Web Fetch",
    destructiveHint: false,
    readOnlyHint: true,
    idempotentHint: true,
    openWorldHint: true,
  },
  _meta: {
    openai: {
      toolInvocation: {
        invoking: "Fetching pages...",
        invoked: "Pages fetched",
      },
    },
  },
};

export default async function fetch({ query, links }: InferSchema<typeof schema>) {
  return fetchPages(query, links);
}
