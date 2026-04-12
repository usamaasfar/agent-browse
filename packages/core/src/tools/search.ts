import { tool } from "ai";
import { Ollama } from "ollama";
import { z } from "zod";

const client = new Ollama();

export const search = tool({
  description: "Search the web and return a list of relevant results (title, URL, content snippet).",
  inputSchema: z.object({
    query: z.string().describe("The search query"),
    maxResults: z.number().optional().describe("Maximum results to return, default 5"),
  }),
  execute: async ({ query, maxResults }) => {
    const response = await client.webSearch({ query, maxResults });
    return response.results;
  },
});
