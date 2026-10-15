
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

# Execute silently; display logs only on failure
run_check() {
  local MESSAGE="$1"
  local SUCCESS_LABEL="$2"
  shift 2

  local LOG_FILE
  LOG_FILE=$(mktemp)

  printf "⏳ %s... " "$MESSAGE"

  if "$@" >"$LOG_FILE" 2>&1; then
    printf "✅ %s\n" "$SUCCESS_LABEL"
    rm -f "$LOG_FILE"
  else
    printf "❌ failed\n"
    cat "$LOG_FILE" >&2
    rm -f "$LOG_FILE"
    return 1
  fi
}

# Restore develop and abort unfinished merge on failure
cleanup() {
  local EXIT_CODE=$?
  trap - EXIT

  if [ "$MERGE_STARTED" = true ]; then
    if git rev-parse -q --verify MERGE_HEAD >/dev/null 2>&1; then
      if ! git merge --abort >/dev/null 2>&1; then
        echo "⚠️ Automatic merge cleanup failed." >&2
        echo "Run 'git status' and resolve manually." >&2
      fi
    fi
  fi

  if [ "$SWITCHED" = true ]; then
    if ! git switch --quiet "$SOURCE"; then
      echo "⚠️ Could not return to $SOURCE." >&2
    fi
  fi

  exit "$EXIT_CODE"
}

trap cleanup EXIT

echo "🔍 Checking repository..."

# 1. Require develop branch
CURRENT=$(git branch --show-current)

if [ "$CURRENT" != "$SOURCE" ]; then
  fail "Run this command from the '$SOURCE' branch."
fi

# 2. Check unfinished Git operations
if [ -f "$(git rev-parse --git-path MERGE_HEAD)" ]; then
  fail "An unfinished merge exists."
fi

if [ -d "$(git rev-parse --git-path rebase-merge)" ] ||
   [ -d "$(git rev-parse --git-path rebase-apply)" ] ||
   [ -f "$(git rev-parse --git-path CHERRY_PICK_HEAD)" ]; then
  fail "An unfinished rebase or cherry-pick exists."
fi

# 3. Require clean working tree
if [ -n "$(git status --porcelain)" ]; then
  fail "Uncommitted or untracked changes detected."
fi

# 4. Fetch remote updates
run_check "Fetching remote updates" "passed" \
  git fetch "$REMOTE" ||
  fail "Could not fetch remote updates."

# 5. Verify branch synchronization
for BRANCH in "$SOURCE" "$TARGET"; do

  git show-ref --verify --quiet "refs/heads/$BRANCH" ||
    fail "Local branch '$BRANCH' does not exist."

  git show-ref --verify --quiet "refs/remotes/$REMOTE/$BRANCH" ||
    fail "Remote branch '$REMOTE/$BRANCH' does not exist."

  LOCAL_SHA=$(git rev-parse "$BRANCH")
  REMOTE_SHA=$(git rev-parse "$REMOTE/$BRANCH")

  if [ "$LOCAL_SHA" != "$REMOTE_SHA" ]; then

    AHEAD=$(git rev-list --count "$REMOTE/$BRANCH..$BRANCH")
    BEHIND=$(git rev-list --count "$BRANCH..$REMOTE/$BRANCH")

    echo "⚠️ $BRANCH is not synchronized."
    echo "   Local commits ahead: $AHEAD"
    echo "   Remote commits ahead: $BEHIND"

    if [ "$AHEAD" -gt 0 ] && [ "$BEHIND" -eq 0 ]; then
      fail "Pending push on '$BRANCH'. Push before merging."
    elif [ "$BEHIND" -gt 0 ] && [ "$AHEAD" -eq 0 ]; then
      fail "Local '$BRANCH' is outdated. Update before merging."
    else
      fail "'$BRANCH' has diverged. Resolve manually."
    fi
  fi
done

echo "✅ Both branches are synchronized."
echo ""

# 6. Run mandatory project checks
echo "🧪 Running project checks..."

run_check "Dependency installation" "passed" npm ci ||
  fail "Dependency installation failed."

run_check "Build" "passed" npm run build ||
  fail "Build failed."

run_check "Tests" "passed" npm test ||
  fail "Tests failed."

echo "✅ All project checks passed."
echo ""

# 7. Switch to main
run_check "Switching to $TARGET" "done" \
  git switch --quiet "$TARGET" ||
  fail "Could not switch to $TARGET."

SWITCHED=true

# 8. Merge develop into main
MERGE_STARTED=true

run_check "Merging $SOURCE into $TARGET" "done" \
  git merge --quiet --no-ff --no-commit "$SOURCE" ||
  fail "Merge failed or conflicts detected."

# 9. Commit merge if required
if git rev-parse -q --verify MERGE_HEAD >/dev/null 2>&1; then

  run_check "Creating merge commit" "done" \
    git commit --quiet -m "Merge $SOURCE into $TARGET" ||
    fail "Merge commit failed."
fi

MERGE_STARTED=false

# 10. Push main to GitHub
run_check "Pushing $TARGET to GitHub" "done" \
  git push --quiet "$REMOTE" "$TARGET" ||
  fail "Push failed. Local main may contain an unpublished merge."

# 11. Return to develop
run_check "Returning to $SOURCE" "done" \
  git switch --quiet "$SOURCE" ||
  fail "Could not return to $SOURCE."

SWITCHED=false

echo ""
echo "✅ Merge completed successfully!"
echo "✅ Returned to develop."