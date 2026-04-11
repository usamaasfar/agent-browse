import type { XmcpConfig } from "xmcp";

const config: XmcpConfig = {
  http: true,
  stdio: true,
  template: {
    name: "agent-browse",
    description: "Browse the web and answer queries — powered by Ollama.",
  },
  bundler: (bundlerConfig) => {
    const existingExternals = bundlerConfig.externals;
    const externals = Array.isArray(existingExternals) ? existingExternals : existingExternals ? [existingExternals] : [];

    return {
      ...bundlerConfig,
      externals: [...externals, "bun"],
    };
  },
  paths: {
    tools: "./src/tools",
    prompts: false,
    resources: false,
  },
};

export default config;
