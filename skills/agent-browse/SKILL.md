---
name: agent-browse
description: Use this skill when you need to search the web or fetch URLs using the agent-browse CLI.
---

# Agent Browse

Browse the web with a single command:

## Requirements

- `@agent-browse/cli` installed (`npm install -g @agent-browse/cli`)
- Ollama running locally

## Usage

```bash
agent-browse <query>
```

All arguments are joined as the query — no quotes required. Include URLs directly in the query to fetch them.

## Examples

```bash
agent-browse what is bun js runtime
```

```bash
agent-browse what is the latest version of react https://react.dev
```
