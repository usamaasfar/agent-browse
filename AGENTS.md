# Agent Browse

Agent Browse is a minimal, Ollama-first project.

The project surface is built around one primitive:

```text
browse
```

`browse(query)` takes a plain-text query and returns a grounded answer with cited sources. Include URLs directly in the query to fetch them.

`packages/core` is the internal implementation layer. The public entrypoints are the CLI, MCP package, and API wrapper.

## Project Structure

```text
.
├── README.md
├── AGENTS.md
├── apps/
│   ├── api/
│   ├── cli/
│   └── mcp/
├── packages/
│   └── core/
└── skills/
    └── agent-browse/
```

## Working Style

- Prefer simple, idiomatic code over clever abstractions.
- Keep changes small and directly tied to the problem.
- Do not add new layers, helpers, or configuration unless they clearly reduce complexity.
- If a solution feels over-engineered, stop and simplify it.

## Workflow

- Plan first for non-trivial work.
- Keep the plan short, concrete, and easy to verify.
- If the approach stops matching the codebase, stop and re-evaluate.
- Use subagents and parallel work when they genuinely reduce context load or speed up independent tasks.
- Do not use process for its own sake.

## Verification

- Do not mark work complete without checking it.
- Run the smallest relevant verification for the change.
- Check the diff before finishing.
- If behavior changed, confirm the docs and examples still match.

## Documentation

Public package docs:

- [`README.md`](./README.md)
- [`apps/cli/README.md`](./apps/cli/README.md)
- [`apps/mcp/README.md`](./apps/mcp/README.md)
- [`apps/api/README.md`](./apps/api/README.md)
- [`skills/agent-browse/SKILL.md`](./skills/agent-browse/SKILL.md)

Internal implementation docs:

- [`packages/core/README.md`](./packages/core/README.md)

When behavior, interfaces, or project conventions change, update the relevant
documentation in the same task.

## Common Commands

At the repo root:

```bash
bun run build
bun run check-types
```

Core package:

```bash
cd packages/core
bun test
```

## Project Rules

- Keep the codebase minimal.
- Favor directness over framework-like patterns.
- Avoid speculative generalization.
- Keep public docs focused on usage and reference.
- Keep internal implementation detail in internal docs, not public package docs unless it affects usage.
- Always create a PR to push code changes. Direct pushes to main are only allowed for releases.
