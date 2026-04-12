import { ToolLoopAgent, stepCountIs } from "ai";
import { ollama } from "ollama-ai-provider-v2";
import prompt from "./prompts/browse.ts";
import { browse as browseTool, fetch, search } from "./tools/index.ts";

const agent = new ToolLoopAgent({
  model: ollama("kimi-k2.5:cloud"),
  instructions: prompt,
  stopWhen: stepCountIs(10),
  tools: { fetch, search, browse: browseTool },
});

/**
 * Browses the web to answer a query.
 * The agent searches, fetches, follows links, and delegates sub-tasks as needed.
 * @returns Plain text answer grounded in fetched content.
 */
export async function browse(query: string): Promise<string> {
  const { text } = await agent.generate({ prompt: query });
  return text;
}
