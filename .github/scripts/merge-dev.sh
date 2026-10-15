
#!/bin/bash
set -euo pipefail

SOURCE_BRANCH="develop"
TARGET_BRANCH="main"

fail() {
  echo "❌ $1"
  exit 1
}

echo "🔍 Checking repository status..."

# Ensure we're on develop
CURRENT_BRANCH=$(git branch --show-current)

if [ "$CURRENT_BRANCH" != "$SOURCE_BRANCH" ]; then
  fail "Please run this command from the develop branch."
fi

# Ensure working tree is clean
if [ -n "$(git status --porcelain)" ]; then
  fail "Uncommitted or untracked changes detected. Commit or stash them first."
fi

# Update remote references
echo "🔄 Fetching latest remote changes..."
git fetch origin || fail "Failed to fetch remote changes."

# Verify branches exist and are synchronized
for BRANCH in "$SOURCE_BRANCH" "$TARGET_BRANCH"; do
  git show-ref --verify --quiet "refs/heads/$BRANCH" ||
    fail "Local branch '$BRANCH' does not exist."

  git show-ref --verify --quiet "refs/remotes/origin/$BRANCH" ||
    fail "Remote branch 'origin/$BRANCH' does not exist."

  LOCAL_SHA=$(git rev-parse "$BRANCH")
  REMOTE_SHA=$(git rev-parse "origin/$BRANCH")

  if [ "$LOCAL_SHA" != "$REMOTE_SHA" ]; then
    fail "Branch '$BRANCH' is not synchronized with origin/$BRANCH. Sync it before merging."
  fi
done

echo "✅ Both branches are synchronized."

# Switch to main
git switch "$TARGET_BRANCH"

echo "🔀 Merging develop into main..."

# Attempt merge without committing
if git merge --no-ff --no-commit "$SOURCE_BRANCH"; then

  if git rev-parse -q --verify MERGE_HEAD >/dev/null; then
    if ! git commit -m "Merge develop into main"; then
      git merge --abort
      git switch "$SOURCE_BRANCH"
      fail "Merge commit failed. Merge aborted."
    fi
  fi

  git switch "$SOURCE_BRANCH"

  echo "✅ Merge completed successfully!"
  echo "📦 Main branch updated locally."
  echo "🚀 Run your deploy command manually when ready."

else
  git merge --abort
  git switch "$SOURCE_BRANCH"
  fail "Merge conflicts detected. Merge aborted. Main remains unchanged."
fi
