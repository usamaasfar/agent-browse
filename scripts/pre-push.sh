#!/bin/bash

remote="$1"
url="$2"

while read local_ref local_sha remote_ref remote_sha; do
  if [[ "$remote_ref" == "refs/heads/main" ]]; then
    commit_msg=$(git log -1 --format="%s" "$local_sha")

    if [[ ! "$commit_msg" =~ ^v[0-9]+\.[0-9]+\.[0-9]+ ]]; then
      echo "error: push to main is only allowed when the tip commit message starts with a version (e.g. v1.2.3)"
      echo "  got: $commit_msg"
      exit 1
    fi
  fi
done

exit 0
