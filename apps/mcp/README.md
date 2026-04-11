# @agent-browse/mcp

MCP server for browsing the web via Ollama.

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

| Tool     | Description                                                                 |
| -------- | --------------------------------------------------------------------------- |
| `browse` | Browse the web to answer a query. Searches, fetches, and navigates as needed |

### Input

- `query` — the question to answer. Include URLs directly in the query to fetch them.

### Output

Plain text answer with inline citations and a Sources block.

## License

MIT
