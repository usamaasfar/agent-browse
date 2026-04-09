# Releasing

This document covers the automated tag-based release workflow.

The packages published by this workflow are:

- `@agent-browse/cli`
- `@agent-browse/mcp`
- `@agent-browse/api`

They are published together under the same version. A git tag triggers the
publish workflow. There is no manual `npm publish` step in the normal flow.
The committed package versions and the release tag should match.

## Steps

**1. Run the release helper**

```bash
./scripts/release.sh patch
```

Use `patch` for bug fixes, `minor` for new features, or `major` for breaking
changes.

The script:

- bumps `apps/cli`, `apps/mcp`, and `apps/api` to the same version
- commits the version bump as `vX.Y.Z`
- creates the matching `vX.Y.Z` tag
- pushes the current branch and the tag to `origin`

The working tree must be clean before running it.

**2. Wait for the release workflow**

The `v*` tag triggers the `release` workflow, which:

- Creates a GitHub Release with auto-generated release notes
- Builds the public packages
- Publishes the three public packages to npm

## Checking the release

Once the workflow completes:

- GitHub Release is live at `https://github.com/usamaasfar/agent-browse/releases`
- All three public packages are live on npm:

```
https://www.npmjs.com/package/@agent-browse/cli
https://www.npmjs.com/package/@agent-browse/mcp
https://www.npmjs.com/package/@agent-browse/api
```
