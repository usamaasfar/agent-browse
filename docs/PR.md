# Pull Requests

## Branch naming

Use a short, descriptive name with no prefix. Name it after what the branch does, not what type of change it is.

```
add-fetch-model-option    ✓
feat/add-fetch-model      ✗
fix/search-timeout        ✗
```

## Creating a PR

Branch off `main`, push, and open the PR:

```bash
git checkout -b <branch-name>
git push -u origin <branch-name>
gh pr create --title "..." --body "..."
```

## Title

One line. Start with the most significant change. Use plain language.

```
Add model option to fetch, update search prompt, and bump dependencies
```

## Description

Use a `## Summary` section with a bullet per logical change. Group related commits. Lead each bullet with the change type in bold.

```markdown
## Summary

- **feat**: Add `model` option to `fetch` to allow overriding the default model
- **feat**: Update search prompt for more concise answers
- **fix**: Correct empty query early return in fetch agent
- **chore**: Add pre-push hook to guard `main` branch
- **docs**: Rewrite README and expand features section
```

## Merging

`main` is protected. Pushing directly requires the tip commit to start with a version tag (e.g. `v1.2.3`). All other changes go through a PR.
