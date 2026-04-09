# @agent-browse/mcp

MCP server for searching the web and fetching URLs via Ollama.

## Requirements

- Ollama running locally

## Usage

### Claude Desktop

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

### Claude Code

```bash
claude mcp add agent-browse npx -- -y @agent-browse/mcp
```

### Codex CLI

```bash
codex mcp add agent-browse npx -- -y @agent-browse/mcp
```

## Tools

| Tool | Description |
| --- | --- |
| `search` | Search the web and return an answer with cited sources |
| `fetch` | Fetch one or more URLs and answer a question grounded in the page content |

### Inputs

- `search`: `query`
- `fetch`: `query`, `links`

### Outputs

- `search`: plain text answer with inline citations
- `fetch`: plain text answer grounded in page content, or raw page content if query is empty

## License

MIT
