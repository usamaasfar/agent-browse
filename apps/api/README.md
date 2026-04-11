# @agent-browse/api

Programmatic wrapper for Agent Browse.

## Install

```bash
npm install @agent-browse/api
```

## Requirements

- Ollama running locally

## Quick Start

```ts
import { AgentBrowse } from "@agent-browse/api";

const browser = new AgentBrowse();

const answer = await browser.browse("what is bun js runtime");
console.log(answer);

// Include URLs directly in the query
const page = await browser.browse("what is bun https://bun.sh");
console.log(page);
```

## API Reference

### `browse(query)`

```ts
browser.browse(query: string): Promise<string>
```

Browses the web to answer a query. Searches, fetches, and navigates sites as needed. Include URLs directly in the query string to fetch them.

Returns a plain text answer with inline citations and a Sources block.

## License

MIT
