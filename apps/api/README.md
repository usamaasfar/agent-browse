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

const answer = await browser.search("what is bun js runtime");
console.log(answer);

const page = await browser.fetch("what is bun", ["https://bun.sh"]);
console.log(page);
```

## API Reference

### `search(query)`

```ts
browser.search(query: string): Promise<string>
```

Searches the web and returns a plain text answer with cited sources.

### `fetch(query, links)`

```ts
browser.fetch(query: string, links: string[]): Promise<string>
```

Fetches the given URLs and returns a plain text answer grounded in the page content. If `query` is empty, returns raw page content with no AI involved.

## License

MIT
