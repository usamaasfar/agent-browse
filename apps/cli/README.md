# @agent-browse/cli

Command-line interface for Agent Browse.

## Install

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
agent-browse what is bun js runtime
agent-browse what is the latest version of react https://react.dev
```

## Usage

```bash
agent-browse <query>
```

All arguments are joined as the query — no quotes required. Include URLs directly in the query to fetch them.

## Options

```bash
agent-browse --version
agent-browse -v
```

## License

MIT
