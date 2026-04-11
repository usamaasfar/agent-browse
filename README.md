# Agent Browse

[![npm @agent-browse/cli](https://img.shields.io/npm/v/@agent-browse/cli?label=cli)](https://www.npmjs.com/package/@agent-browse/cli)
[![npm @agent-browse/mcp](https://img.shields.io/npm/v/@agent-browse/mcp?label=mcp)](https://www.npmjs.com/package/@agent-browse/mcp)
[![npm @agent-browse/api](https://img.shields.io/npm/v/@agent-browse/api?label=api)](https://www.npmjs.com/package/@agent-browse/api)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

Agent Browse gives AI agents direct access to the web through Ollama —
browse, search, and fetch with cited, grounded answers, running entirely
on your own machine.

## Features

- **Local by default** — runs on your own machine via Ollama, no cloud or API keys required
- **Grounded answers** — all answers are based solely on fetched page content
- **Adaptive depth** — searches, fetches, and follows links as needed for the query
- **Sub-agent delegation** — complex multi-part queries are split and handled in parallel

## Interfaces

| Package                                     | Role                                                  |
| ------------------------------------------- | ----------------------------------------------------- |
| [`@agent-browse/cli`](./apps/cli/README.md) | Human-facing command line interface                   |
| [`@agent-browse/mcp`](./apps/mcp/README.md) | MCP server exposing a single `browse` tool            |
| [`@agent-browse/api`](./apps/api/README.md) | Programmatic wrapper for app/server integration       |

## Quick Start

### CLI

```bash
npm install -g @agent-browse/cli
```

```bash
agent-browse what is bun js runtime
agent-browse what is the latest version of react https://react.dev
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

const answer = await browser.browse("what is bun js runtime");
console.log(answer);
```

## Documentation

- [CLI package docs](./apps/cli/README.md)
- [MCP package docs](./apps/mcp/README.md)
- [API package docs](./apps/api/README.md)

## License

[MIT](./LICENSE)
