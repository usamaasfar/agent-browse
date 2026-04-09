# Agent Browse

[![npm @agent-browse/cli](https://img.shields.io/npm/v/@agent-browse/cli?label=cli)](https://www.npmjs.com/package/@agent-browse/cli)
[![npm @agent-browse/mcp](https://img.shields.io/npm/v/@agent-browse/mcp?label=mcp)](https://www.npmjs.com/package/@agent-browse/mcp)
[![npm @agent-browse/api](https://img.shields.io/npm/v/@agent-browse/api?label=api)](https://www.npmjs.com/package/@agent-browse/api)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

Agent Browse gives AI agents direct access to the web through Ollama —
search the web and fetch URLs with cited, grounded answers, running entirely
on your own machine.

## Features

- **Local by default** — runs on your own machine via Ollama, no cloud or
  API keys required
- **Grounded answers** — fetch returns answers grounded in actual page content
- **Multi-step search** — search agent may call webSearch and webFetch in
  multiple steps to build a complete answer

### Primitives

```text
search  fetch
```

## Interfaces

| Package                                    | Role                                                       |
| ------------------------------------------ | ---------------------------------------------------------- |
| [`@agent-browse/cli`](./apps/cli/README.md) | Human-facing command line wrapper over the core primitives |
| [`@agent-browse/mcp`](./apps/mcp/README.md) | MCP server that exposes the primitives as tools            |
| [`@agent-browse/api`](./apps/api/README.md) | Small programmatic wrapper for app/server integration      |

## Quick Start

### CLI

```bash
# install or upgrade
npm install -g @agent-browse/cli
```

```bash
agent-browse search what is bun js runtime
agent-browse fetch what is bun https://bun.sh
```

### MCP

```json
{
  "mcpServers": {
    "agent-browse": {
      "command": "npx",
      "args": ["-y", "@agent-browse/mcp"]
    }
  }
}
```

### API

```bash
npm install @agent-browse/api
```

```ts
import { AgentBrowse } from "@agent-browse/api";

const browser = new AgentBrowse();

const answer = await browser.search("what is bun js runtime");
console.log(answer);

const page = await browser.fetch("what is bun", ["https://bun.sh"]);
console.log(page);
```

## Documentation

Use the package READMEs for package-specific usage and reference:

- [CLI package docs](./apps/cli/README.md)
- [MCP package docs](./apps/mcp/README.md)
- [API package docs](./apps/api/README.md)

## Skill

```bash
npx skills add https://github.com/usamaasfar/agent-browse/tree/main/skills/agent-browse-cli
```

## License

[MIT](./LICENSE)
