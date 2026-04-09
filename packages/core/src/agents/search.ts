import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ToolLoopAgent, stepCountIs, tool } from "ai";
import { Ollama } from "ollama";
import { ollama } from "ollama-ai-provider-v2";
import { z } from "zod";
import { fetch } from "./fetch.ts";

const client = new Ollama();

const instructions = readFileSync(join(import.meta.dir, "../../prompts/search.md"), "utf-8");

const agent = new ToolLoopAgent({
  model: ollama("kimi-k2.5:cloud"),
  instructions,
  stopWhen: stepCountIs(10),
  tools: {
    webSearch: tool({
      description: "Search the web and return a list of relevant results (title, url, content snippet).",
      inputSchema: z.object({
        query: z.string().describe("The search query"),
        maxResults: z.number().optional().describe("Maximum results to return, default 5"),
      }),
      execute: async ({ query, maxResults }) => {
        const response = await client.webSearch({ query, maxResults });
        return response.results;
      },
    }),
    webFetch: tool({
      description: "Fetch specific URLs. If a query is provided, returns an answer grounded in the page content. If query is empty, returns the raw page content as-is with no AI involved.",
      inputSchema: z.object({
        query: z.string().describe("The question to answer from the fetched pages"),
        links: z.array(z.string()).describe("URLs to fetch"),
      }),
      execute: async ({ query, links }) => {
        return fetch(query, links);
      },
    }),
  },
});

/**
 * Searches the web and answers the query with cited sources.
 * The agent may perform multiple searches and fetches to build a complete answer.
 * @returns Plain text answer with inline source citations.
 */
export async function search(query: string): Promise<string> {
  const { text } = await agent.generate({ prompt: query });
  return text;
}
