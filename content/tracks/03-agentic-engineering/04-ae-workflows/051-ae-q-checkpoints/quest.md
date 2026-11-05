---
slug: "ae-q-checkpoints"
title: "Checkpoints and Undo"
type: "quiz"
xp: 15
questions: [{"prompt": "Why start an agent task from a clean working tree?", "options": ["Git requires it", "So the agent's changes are easy to see, review and undo on their own", "It runs faster"], "answer": 1}, {"prompt": "The agent's last step broke everything. What is the quickest recovery if you committed the previous green step?", "options": ["Debug for an hour", "Discard the working changes (git restore . / reset to HEAD) and retry", "Delete the repo"], "answer": 1}, {"prompt": "What does git NOT undo?", "options": ["File edits", "Side effects like an applied database migration or an API call", "Deleted lines in tracked files"], "answer": 1}, {"prompt": "How do you see exactly what changed, regardless of the agent's summary?", "options": ["Ask it again", "git diff", "Read the commit title"], "answer": 1}, {"prompt": "Two agents work on different features at once. What keeps them from trampling each other?", "options": ["Hope", "Separate branches in separate git worktrees (or clones)", "Running them on Fridays"], "answer": 1}]
---
# Checkpoints and Undo

Agents make big changes quickly, so **undo** has to be just as quick. Version control is your safety net:

- **Start from a clean working tree** (`git status` shows nothing), so the agent's changes are the only changes.
- **Commit at every green step.** Each commit is a save point. If the next step goes wrong, `git restore .` or `git reset --hard HEAD` takes you back in seconds.
- **Work on a branch** (or a **git worktree** for parallel agents), never directly on `main`.
- **Review with `git diff`** before committing. That shows exactly what changed, independent of what the agent *says* it changed.
- Many agent tools also have their own **checkpoints or rewind**. That's useful, but it isn't a replacement for commits (and it usually doesn't undo side effects like database changes or sent messages).
- **Squash or tidy history** before opening a PR if the step commits are noisy.

Side effects outside the repo (migrations applied to a shared database, files deleted outside the project, API calls) **aren't undone by git**. Treat those actions with extra care.
