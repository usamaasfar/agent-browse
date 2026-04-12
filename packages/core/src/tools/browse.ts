import { ToolLoopAgent, stepCountIs, tool } from "ai";
import { ollama } from "ollama-ai-provider-v2";
import { z } from "zod";
import prompt from "../prompts/sub-browse.ts";
import { fetch, search } from "./index.ts";

const subAgent = new ToolLoopAgent({
  model: ollama("kimi-k2.5:cloud"),
  instructions: prompt,
  stopWhen: stepCountIs(5),
  tools: { fetch, search },
});

export const browse = tool({
  description: "Delegate a focused web task to a sub-agent. Use this for a specific lookup, a single URL to surf, or a self-contained research question that is part of a larger task.",
  inputSchema: z.object({
    task: z.string().describe("The focused task or question for the sub-agent, optionally including a URL to start from"),
  }),
  execute: async ({ task }) => {
    const { text } = await subAgent.generate({ prompt: task });
    return text;
  },
});
