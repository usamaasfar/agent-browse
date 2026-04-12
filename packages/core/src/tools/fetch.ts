import { tool } from "ai";
import { Ollama } from "ollama";
import { stringify } from "yaml";
import { z } from "zod";

const client = new Ollama();

export const fetch = tool({
  description: "Fetch a URL and return its raw content.",
  inputSchema: z.object({
    url: z.string().describe("URL to fetch"),
  }),
  execute: async ({ url }) => {
    console.log(url);
    const page = await client.webFetch({ url });
    return stringify(page);
  },
});
