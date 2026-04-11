# @agent-browse/core

Implementation README for maintainers and coding agents.

`@agent-browse/core` is the engine of this repo. It talks directly to Ollama's local API and owns all agent behavior used by the CLI, MCP server, and API wrapper.

This package is for internal use inside the monorepo. It is not the recommended integration surface for external consumers, and its implementation details are allowed to evolve to support the higher-level packages.

## Public API

```ts
browse(query: string): Promise<string>
```

Single export. The query is plain text — include URLs directly in the query string if you want the agent to fetch them.

## Behavioral Model

`browse` runs a `ToolLoopAgent` backed by Ollama. The agent has three tools:

- `webSearch` — searches the web and returns results (title, URL, snippet)
- `webFetch` — fetches a single URL and returns its raw content
- `browse` (sub-agent) — delegates a focused sub-task to a child `ToolLoopAgent` with only `webSearch` and `webFetch`

The main agent decides how to use them based on the query. For a URL in the query it fetches directly. For a natural language question it searches first. For complex multi-part queries it delegates parts to the sub-agent.

## Internal Layout

```text
src/
  index.ts              ToolLoopAgent + browse() export
  prompts/
    browse.ts           main agent system prompt
    sub-browse.ts       sub-agent system prompt
  tools/
    fetch.ts            webFetch tool
    search.ts           webSearch tool
    browse.ts           sub-agent as a tool
    index.ts            re-exports all tools
```

## Testing

```bash
bun run check-types
bun test
```

## Maintenance Rules

- Keep business logic in agent and tool files
- Keep prompt content in `src/prompts/`
- Prefer explicit typed errors over generic exceptions

## Current Scope

This package does not provide:

- CLI parsing
- MCP schemas
- HTTP routing
- authentication
- state persistence
