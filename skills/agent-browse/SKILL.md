---
name: agent-browse
description: Use this skill for any web research task — from a quick fact lookup to deep multi-source research. It runs a local browsing agent that searches, fetches, navigates sites, and fans out parallel sub-agents for complex queries. Hand it your full question; it returns a grounded answer with cited sources.
---

# Agent Browse

A local web research agent. Give it a question — plain text, with or without URLs — and it returns a grounded answer with cited sources.

Internally it searches, fetches pages, follows links, and spawns parallel sub-agents for complex queries. You do not need to orchestrate any of that yourself.

## Requirements

- `@agent-browse/cli` installed (`npm install -g @agent-browse/cli`)
- Ollama running locally

## Usage

```bash
agent-browse <query>
```

All arguments are joined as the query. No quotes needed. Include URLs directly in the query to fetch them.

## When to use this skill

Delegate to `agent-browse` whenever the answer requires the web:

- Looking up a fact, version, price, or current status
- Comparing tools, libraries, or approaches using real documentation
- Researching a topic across multiple sources
- Fetching and summarizing a specific URL
- Multi-part research questions where different parts need different sources

Do not use it for questions you can answer from context. Use it when the answer lives on the web.

## What to pass as the query

Write the query the way you would ask a researcher. The agent decides how to find the answer — you do not need to specify URLs, search terms, or steps.

For targeted fetches, include the URL directly in the query:

```bash
agent-browse latest stable version of Node.js https://nodejs.org/en/download
```

For open research, just ask:

```bash
agent-browse what are the tradeoffs between Bun and Node.js for production servers
```

For multi-part questions, ask the whole thing at once — the agent will fan out internally:

```bash
agent-browse compare the pricing and rate limits of OpenAI, Anthropic, and Mistral APIs
```

## Output

A synthesized answer grounded in fetched content, with inline citations and a Sources block listing every URL used.
