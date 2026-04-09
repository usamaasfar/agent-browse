# @agent-browse/core

Implementation README for maintainers and coding agents.

`@agent-browse/core` is the real engine of this repo. It talks directly to
Ollama's local API and exposes the agent primitive layer used by the CLI, MCP
server, and API wrapper.

This package is for internal use inside the monorepo. It is not the recommended
integration surface for external consumers, and its implementation details are
allowed to evolve to support the higher-level packages.

## Public API

Root exports:

- `fetch`
- `search`

## Behavioral Model

This package is Ollama-centric.

- `fetch` calls `ollama.webFetch()` in parallel for all links, then uses `generateText` to answer the query grounded in the fetched content. If `query` is empty, returns raw page content with no AI involved.
- `search` uses a `ToolLoopAgent` that can call `webSearch` and `webFetch` in multiple steps to build a complete answer with cited sources.

## Internal Layout

```text
src/
  agents/
    fetch.ts      web fetch agent using generateText
    search.ts     web search agent using ToolLoopAgent
prompts/
  fetch.md        system prompt for the fetch agent
  search.md       system prompt for the search agent
```

## Testing

Run locally:

```bash
bun run check-types
bun test
```

## Maintenance Rules

- Keep business logic in the agent files
- Keep prompt content in the `.md` files under `prompts/`
- Prefer explicit typed errors over generic exceptions

## Current Scope

This package does not provide:

- CLI parsing
- MCP schemas
- HTTP routing
- authentication
- state persistence
