#!/bin/bash

USER=$(gh api user --jq .login)

echo "User: $USER"
echo "----------------------"

echo "PUSH EVENTS"
gh api "users/$USER/events" \
  --jq '.[] | select(.type=="PushEvent") | .created_at' \
  | sort

echo ""
echo "PRS OPENED"
gh pr list \
  --author "$USER" \
  --state open \
  --json number,title,createdAt \
  --jq '.[] | "\(.createdAt) PR #\(.number): \(.title)"'

echo ""
echo "PRS MERGED"
gh pr list \
  --author "$USER" \
  --state merged \
  --json number,title,mergedAt \
  --jq '.[] | "\(.mergedAt) PR #\(.number): \(.title)"'

