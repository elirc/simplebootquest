---
slug: "dev-git-sim-4"
title: "Dev Drill: Follow the git history #4"
type: "quiz"
xp: 10
optional: true
section: "Practice: Git, Terminal & Debugging"
questions: [{"prompt":"```bash\ngit commit -m \"a\"\ngit switch -c refactor-api\ngit switch main\ngit switch refactor-api\ngit switch main\n```\n\nWhich branch is checked out at the end?","options":["origin/main","detached HEAD","refactor-api","main"],"answer":3},{"prompt":"```bash\ngit commit -m \"a\"\ngit switch -c refactor-api\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit switch main\ngit commit -m \"x\"\ngit commit -m \"x\"\n```\n\nHow many commits are in the history of `refactor-api` at the end (including the initial one, and any merge commit)?","options":["5","6","7","4"],"answer":0},{"prompt":"```bash\ngit commit -m \"a\"\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit switch -c add-search\ngit commit -m \"x\"\n```\n\nHow many commits are in the history of `add-search` at the end (including the initial one, and any merge commit)?","options":["10","8","9","7"],"answer":1},{"prompt":"```bash\ngit commit -m \"a\"\ngit commit -m \"x\"\ngit switch -c add-search\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit commit -m \"x\"\n```\n\nHow many commits are in the history of `main` at the end (including the initial one, and any merge commit)?","options":["2","5","3","4"],"answer":2},{"prompt":"```bash\ngit commit -m \"a\"\ngit switch -c feature/login\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit switch main\ngit switch feature/login\ngit commit -m \"x\"\ngit commit -m \"x\"\n```\n\nHow many commits are in the history of `main` at the end (including the initial one, and any merge commit)?","options":["2","3","1","4"],"answer":0}]
---
# Dev Drill: Follow the git history #4

Each `git commit` adds a commit to the **current** branch. `git switch -c name` creates a branch from where you are and switches to it. `git merge other` brings another branch's commits in: a **fast-forward** if your branch hasn't moved, otherwise a new **merge commit**. The repo starts with 1 commit on `main`.
