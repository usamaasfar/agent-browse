#!/usr/bin/env bash

set -euo pipefail

usage() {
  echo "Usage: ./scripts/release.sh <patch|minor|major>"
}

if [[ $# -ne 1 ]]; then
  usage
  exit 1
fi

release_type="$1"

case "$release_type" in
  patch|minor|major) ;;
  *)
    usage
    exit 1
    ;;
esac

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$repo_root"

if [[ -n "$(git status --short)" ]]; then
  echo "Working tree must be clean before creating a release."
  exit 1
fi

current_branch="$(git rev-parse --abbrev-ref HEAD)"

if [[ "$current_branch" == "HEAD" ]]; then
  echo "Release must be created from a branch, not a detached HEAD."
  exit 1
fi

npm version "$release_type" --no-git-tag-version --prefix apps/cli >/dev/null
version="$(node -p "require('./apps/cli/package.json').version")"
npm version "$version" --no-git-tag-version --prefix apps/mcp >/dev/null
npm version "$version" --no-git-tag-version --prefix apps/api >/dev/null

tag="v$version"

bun install --ignore-scripts
git add apps/cli/package.json apps/mcp/package.json apps/api/package.json bun.lock
git commit -m "$tag"
git tag "$tag"
git push origin "$current_branch"
git push origin "refs/tags/$tag"

echo "Released $tag from $current_branch"
