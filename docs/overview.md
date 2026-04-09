# Agent Browse — Project Overview

Agent Browse gives AI agents direct access to the web through Ollama, with no
hand-holding or artificial abstractions on top.

## Philosophy

Most web tools try to _help_ the agent. They parse results, re-rank snippets,
or wrap common actions in custom abstractions.

Agent Browse stays closer to the substrate: a local Ollama model, a small API,
and direct web fetch and search operations.

## The Primitive Surface

The system is built around two primitives:

```
search  fetch
```

- `search` queries the web and returns a plain text answer with cited sources
- `fetch` retrieves one or more URLs and answers a question grounded in the page content; if no query is given, returns raw page content

## Behavioral Model

The model is intentionally simple:

- `search` uses a `ToolLoopAgent` that may call `webSearch` and `webFetch` in multiple steps
- `fetch` calls Ollama's `webFetch` in parallel for all links, then uses `generateText` to answer
- If `query` is empty in `fetch`, no AI is involved — raw content is returned directly

## Monorepo Structure

```
apps/
  api/   — @agent-browse/api   Programmatic wrapper
  cli/   — @agent-browse/cli   Command line interface
  mcp/   — @agent-browse/mcp   MCP server
packages/
  core/  — internal Ollama agent layer
```

See [architecture.md](./architecture.md) for detail on each package.
