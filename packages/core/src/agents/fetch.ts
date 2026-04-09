import { readFileSync } from "node:fs";
import { join } from "node:path";
import { generateText } from "ai";
import { Ollama } from "ollama";
import { ollama } from "ollama-ai-provider-v2";

const client = new Ollama();

const system = readFileSync(join(import.meta.dir, "../../prompts/fetch.md"), "utf-8");

/**
 * Fetches the given links and answers the query with cited sources.
 * If query is empty, returns the raw fetched page content with no AI involved.
 * @returns Plain text answer, or raw page content if query is empty.
 */
export async function fetch(query: string, links: string[], model = "llama3.2"): Promise<string> {
  const pages = await Promise.all(links.map((url) => client.webFetch({ url })));

  const context = pages.map((p) => `Title: ${p.title}\nURL: ${p.url}\n\n${p.content}`).join("\n\n---\n\n");

  if (!query.trim()) {
    return context;
  }

  const { text } = await generateText({
    model: ollama(model),
    system,
    prompt: `<query>${query}</query>\n\n<pages>\n${context}\n</pages>`,
  });

  return text;
}
