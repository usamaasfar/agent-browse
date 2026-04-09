---
name: agent-browse
description: Use this skill when you need to search the web or fetch URLs using the agent-browse CLI.
---

# Agent Browse

Search the web and fetch URLs through two primitives:

```text
search  fetch
```

## Requirements

- `@agent-browse/cli` installed (`npm install -g @agent-browse/cli`)
- Ollama running locally

## Commands

```bash
agent-browse search <query>
```

Searches the web and returns an answer with cited sources. All arguments are joined as the query — no quotes required:

```bash
agent-browse search what is bun js runtime
```

```bash
agent-browse fetch [query words] <url> [url...]
```

Fetches one or more URLs. Arguments that start with `http://` or `https://` are treated as links; everything else is joined as the query. If no query words are provided, returns raw page content with no AI involved:

```bash
# with query — returns an AI answer grounded in the page
agent-browse fetch what is bun https://bun.sh

# without query — returns raw page content
agent-browse fetch https://bun.sh https://npmjs.com
```
