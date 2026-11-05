---
slug: "dev-git-sim-6"
title: "Dev Drill: Follow the git history #6"
type: "quiz"
xp: 10
optional: true
section: "Practice: Git, Terminal & Debugging"
questions: [{"prompt":"```bash\ngit commit -m \"a\"\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit switch -c fix/typo\ngit commit -m \"x\"\n```\n\nWhich branch is checked out at the end?","options":["fix/typo","origin/main","detached HEAD","main"],"answer":0},{"prompt":"```bash\ngit commit -m \"a\"\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit switch -c add-search\ngit commit -m \"x\"\ngit commit -m \"x\"\n```\n\nWhich branch is checked out at the end?","options":["detached HEAD","add-search","origin/main","main"],"answer":1},{"prompt":"```bash\ngit commit -m \"a\"\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit switch -c fix/typo\n```\n\nHow many commits are in the history of `main` at the end (including the initial one, and any merge commit)?","options":["4","7","6","5"],"answer":3},{"prompt":"```bash\ngit commit -m \"a\"\ngit switch -c add-search\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit switch main\ngit merge add-search\n```\n\nHow many commits are in the history of `add-search` at the end (including the initial one, and any merge commit)?","options":["4","6","5","7"],"answer":2},{"prompt":"```bash\ngit commit -m \"a\"\ngit commit -m \"x\"\ngit switch -c refactor-api\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit commit -m \"x\"\n```\n\nWhich branch is checked out at the end?","options":["main","refactor-api","origin/main","detached HEAD"],"answer":1}]
---
# Dev Drill: Follow the git history #6

Each `git commit` adds a commit to the **current** branch. `git switch -c name` creates a branch from where you are and switches to it. `git merge other` brings another branch's commits in: a **fast-forward** if your branch hasn't moved, otherwise a new **merge commit**. The repo starts with 1 commit on `main`.
