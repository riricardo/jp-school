
#!/bin/bash
set -euo pipefail

SOURCE="develop"
TARGET="main"
REMOTE="origin"
SWITCHED=false
MERGE_STARTED=false

fail() {
  echo "❌ $1" >&2
  exit 1
}

cleanup() {
  if [ "$MERGE_STARTED" = true ]; then
    if git rev-parse -q --verify MERGE_HEAD >/dev/null 2>&1; then
      git merge --abort || echo "⚠️ Manual merge cleanup required." >&2
    fi
  fi

  if [ "$SWITCHED" = true ]; then
    git switch "$SOURCE" || echo "⚠️ Return to develop manually." >&2
  fi
}

trap cleanup EXIT

echo "🔍 Checking repository..."

# Require develop branch
CURRENT=$(git branch --show-current)

if [ "$CURRENT" != "$SOURCE" ]; then
  fail "Run this command from the '$SOURCE' branch."
fi

# Check unfinished Git operations
GIT_DIR=$(git rev-parse --git-dir)

if [ -f "$(git rev-parse --git-path MERGE_HEAD)" ]; then
  fail "An unfinished merge exists. Resolve or abort it first."
fi

if [ -d "$(git rev-parse --git-path rebase-merge)" ] ||
   [ -d "$(git rev-parse --git-path rebase-apply)" ] ||
   [ -f "$(git rev-parse --git-path CHERRY_PICK_HEAD)" ]; then
  fail "An unfinished rebase or cherry-pick exists."
fi

# Require clean working tree
if [ -n "$(git status --porcelain)" ]; then
  fail "Uncommitted or untracked changes detected."
fi

# Fetch remote changes
echo "🔄 Fetching remote updates..."
git fetch "$REMOTE" || fail "Failed to fetch remote updates."

# Verify branches and synchronization
for BRANCH in "$SOURCE" "$TARGET"; do
  git show-ref --verify --quiet "refs/heads/$BRANCH" ||
    fail "Local branch '$BRANCH' does not exist."

  git show-ref --verify --quiet "refs/remotes/$REMOTE/$BRANCH" ||
    fail "Remote branch '$REMOTE/$BRANCH' does not exist."

  LOCAL=$(git rev-parse "$BRANCH")
  REMOTE_SHA=$(git rev-parse "$REMOTE/$BRANCH")

  if [ "$LOCAL" != "$REMOTE_SHA" ]; then
    AHEAD=$(git rev-list --count "$REMOTE/$BRANCH..$BRANCH")
    BEHIND=$(git rev-list --count "$BRANCH..$REMOTE/$BRANCH")

    echo "⚠️ $BRANCH is not synchronized."
    echo "   Local commits ahead: $AHEAD"
    echo "   Remote commits ahead: $BEHIND"

    if [ "$AHEAD" -gt 0 ] && [ "$BEHIND" -eq 0 ]; then
      fail "Pending push on '$BRANCH'. Review and push it before merging."
    elif [ "$BEHIND" -gt 0 ] && [ "$AHEAD" -eq 0 ]; then
      fail "Local '$BRANCH' is outdated. Fast-forward it before merging."
    else
      fail "'$BRANCH' has diverged. Resolve manually before merging."
    fi
  fi
done

echo "✅ Both branches are synchronized."

# Run mandatory checks before merging
echo "🧪 Running project checks..."

run_check() {
  local MESSAGE="$1"
  shift

  local LOG_FILE
  LOG_FILE=$(mktemp)

  echo "⏳ $MESSAGE..."

  if "$@" >"$LOG_FILE" 2>&1; then
    echo "✅ $MESSAGE passed."
    rm -f "$LOG_FILE"
  else
    echo "❌ $MESSAGE failed."
    cat "$LOG_FILE"
    rm -f "$LOG_FILE"
    fail "Validation failed. Merge cancelled."
  fi
}

run_check "Dependency installation" npm ci
run_check "Build" npm run build
run_check "Tests" npm test

echo "✅ All project checks passed."

# Switch to main
echo "🔀 Switching to $TARGET..."
git switch "$TARGET"
SWITCHED=true

# Merge develop into main
echo "🔀 Merging $SOURCE into $TARGET..."
MERGE_STARTED=true

if ! git merge --no-ff --no-commit "$SOURCE"; then
  fail "Merge conflicts detected. Merge cancelled."
fi

# Commit merge when required
if git rev-parse -q --verify MERGE_HEAD >/dev/null 2>&1; then
  git commit -m "Merge $SOURCE into $TARGET" ||
    fail "Merge commit failed."
fi

MERGE_STARTED=false

# Push main to GitHub
echo "📤 Pushing $TARGET to GitHub..."

if ! git push "$REMOTE" "$TARGET"; then
  fail "Push failed. Local main may contain an unpublished merge. Review before retrying."
fi

# Return to develop
git switch "$SOURCE"
SWITCHED=false

echo ""
echo "✅ Merge completed successfully!"
echo "✅ Remote main is updated."
echo "✅ Returned to develop."
