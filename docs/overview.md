# Agent Browse — Project Overview

Agent Browse gives AI agents direct access to the web through Ollama, with no
hand-holding or artificial abstractions on top.

## Philosophy

Most web tools try to _help_ the agent. They parse results, re-rank snippets,
or wrap common actions in custom abstractions.

Agent Browse stays closer to the substrate: a local Ollama model, a single API,
and one agent that searches, fetches, and navigates the web to answer queries.

## The Primitive

The system is built around one primitive:

```
browse
```

`browse(query)` takes a plain-text query — which may include URLs — and returns
a grounded answer with cited sources. The agent decides whether to search, fetch,
surf through a site, or delegate sub-tasks based on what the query demands.

## Behavioral Model

`browse` runs a `ToolLoopAgent` with three tools:

- **webSearch** — search the web and get back results
- **webFetch** — fetch a single URL and get back its raw content
- **browse** (sub-agent) — delegate a focused sub-task to a child agent that has only `webSearch` and `webFetch`

The agent adapts to query complexity: a simple factual question may take one search and one fetch; a multi-part research question may fan out across several sub-agents running in parallel.

All answers are grounded in fetched content — the agent does not use prior knowledge.

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
