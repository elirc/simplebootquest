---
slug: "dev-git-sim-8"
title: "Dev Drill: Follow the git history #8"
type: "quiz"
xp: 10
optional: true
section: "Practice: Git, Terminal & Debugging"
questions: [{"prompt":"```bash\ngit commit -m \"a\"\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit switch -c feature/login\ngit switch main\ngit commit -m \"x\"\n```\n\nHow many commits are in the history of `feature/login` at the end (including the initial one, and any merge commit)?","options":["5","3","4","6"],"answer":2},{"prompt":"```bash\ngit commit -m \"a\"\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit switch -c add-search\ngit switch main\n```\n\nWhich branch is checked out at the end?","options":["origin/main","detached HEAD","main","add-search"],"answer":2},{"prompt":"```bash\ngit commit -m \"a\"\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit switch -c add-search\ngit commit -m \"x\"\ngit switch main\ngit merge add-search\ngit merge add-search\n```\n\nWhich branch is checked out at the end?","options":["origin/main","main","detached HEAD","add-search"],"answer":1},{"prompt":"```bash\ngit commit -m \"a\"\ngit commit -m \"x\"\ngit switch -c fix/typo\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit commit -m \"x\"\n```\n\nHow many commits are in the history of `fix/typo` at the end (including the initial one, and any merge commit)?","options":["8","7","9","6"],"answer":1},{"prompt":"```bash\ngit commit -m \"a\"\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit switch -c add-search\ngit commit -m \"x\"\n```\n\nHow many commits are in the history of `add-search` at the end (including the initial one, and any merge commit)?","options":["4","7","6","5"],"answer":3}]
---
# Dev Drill: Follow the git history #8

Each `git commit` adds a commit to the **current** branch. `git switch -c name` creates a branch from where you are and switches to it. `git merge other` brings another branch's commits in: a **fast-forward** if your branch hasn't moved, otherwise a new **merge commit**. The repo starts with 1 commit on `main`.
