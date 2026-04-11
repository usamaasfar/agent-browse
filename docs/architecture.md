# Architecture

## Package Split

### `@agent-browse/cli` (`apps/cli/`)

The CLI is the human-facing interface. It joins all arguments as a query and
passes it to `browse()` from `@agent-browse/core`.

```bash
agent-browse <query>
```

### `@agent-browse/mcp` (`apps/mcp/`)

A thin MCP server that exposes a single `browse` tool backed by `@agent-browse/core`.
It contains no agent logic beyond schema and metadata wiring.

Built with [xmcp](https://github.com/xmcp/xmcp). Tools are auto-discovered from
`src/tools/`. It serves both HTTP and stdio transports.

| MCP Tool | Core Primitive  |
| -------- | --------------- |
| `browse` | `browse(query)` |

### `@agent-browse/api` (`apps/api/`)

A thin programmatic wrapper exposing an `AgentBrowse` class with a single
`browse(query)` method that delegates to `@agent-browse/core`.

### `@agent-browse/core` (`packages/core/`)

The internal implementation layer. Talks to Ollama's local API and owns all
agent behavior.

Single export: `browse(query)`.

Internally runs a `ToolLoopAgent` with three tools: `webSearch`, `webFetch`,
and a `browse` sub-agent tool for delegating focused sub-tasks.

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

## Data Flow

### MCP

```
MCP Client (agent)
    │
    ▼
@agent-browse/mcp   (xmcp MCP server, HTTP or STDIO)
    │  imports
    ▼
@agent-browse/core  browse(query)
    │  Ollama API
    ▼
Ollama (local)
```

### CLI

```
User
    │
    ▼
@agent-browse/cli   (joins args as query)
    │  imports
    ▼
@agent-browse/core  browse(query)
    │
    ▼
Ollama (local)
```

### API

```
Application code
    │
    ▼
@agent-browse/api   (AgentBrowse class)
    │  imports
    ▼
@agent-browse/core  browse(query)
    │
    ▼
Ollama (local)
```

## Runtime

The repo uses **Bun** for local development and build scripts.
