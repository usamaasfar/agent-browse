# @agent-browse/cli

Command-line interface for Agent Browse.

## Install

Install or upgrade the CLI:

```bash
npm install -g @agent-browse/cli
```

Install the agent skill:

```bash
npx skills add usamaasfar/agent-browse
```

## Requirements

- Ollama running locally

## Quick Start

```bash
agent-browse search what is bun js runtime
agent-browse fetch what is bun https://bun.sh
agent-browse fetch https://bun.sh
```

## Command Reference

### `--version`

```bash
agent-browse --version
agent-browse -v
```

### `search`

```bash
agent-browse search <query>
```

All arguments are joined as the query — no quotes required. Returns an answer with cited sources.

### `fetch`

```bash
agent-browse fetch [query words] <url> [url...]
```

Arguments starting with `http://` or `https://` are treated as links; everything else is joined as the query. If no query is provided, returns raw page content with no AI involved.

## License

MIT
