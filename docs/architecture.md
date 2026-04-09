# Architecture

## Package Split

### `@agent-browse/cli` (`apps/cli/`)

The CLI is the human-facing interface. It parses command-line arguments, prints
results, and delegates behavior to `@agent-browse/core`.

Supported commands:

- `search`
- `fetch`

### `@agent-browse/mcp` (`apps/mcp/`)

A thin MCP server that exposes the agent primitives from `@agent-browse/core`
as MCP tools. It contains no agent logic beyond schema and metadata wiring.

Built with [xmcp](https://github.com/xmcp/xmcp). Tools are auto-discovered from
`src/tools/`. It serves both HTTP and stdio transports.

MCP tool → core primitive mapping:

| MCP Tool  | Core Primitive                         |
| --------- | -------------------------------------- |
| `search`  | `search(query)`                        |
| `fetch`   | `fetch(query, links)`                  |

### `@agent-browse/api` (`apps/api/`)

A thin programmatic wrapper. It exposes an `AgentBrowse` class whose methods
delegate directly to `@agent-browse/core`.

### `@agent-browse/core` (`packages/core/`)

The internal implementation layer. It talks to Ollama's local API and owns the
actual agent behavior.

## Data Flow

### MCP

```
MCP Client (agent)
    │
    ▼
@agent-browse/mcp   (xmcp MCP server, HTTP or STDIO)
    │  imports
    ▼
@agent-browse/core  (Ollama agent primitives)
    │  Ollama API
    ▼
Ollama (local)
```

### CLI

```
User
    │
    ▼
@agent-browse/cli   (argument parsing and stdout formatting)
    │  imports
    ▼
@agent-browse/core  (Ollama agent primitives)
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
@agent-browse/core  (Ollama agent primitives)
    │
    ▼
Ollama (local)
```

## Runtime

The repo uses **Bun** for local development and build scripts.
