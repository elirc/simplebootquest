---
slug: "dev-git-sim-1"
title: "Dev Drill: Follow the git history #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Git, Terminal & Debugging"
questions: [{"prompt":"```bash\ngit commit -m \"a\"\ngit switch -c feature/login\ngit switch main\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit merge feature/login\ngit merge feature/login\n```\n\nHow many commits are in the history of `main` at the end (including the initial one, and any merge commit)?","options":["8","6","7","5"],"answer":1},{"prompt":"```bash\ngit commit -m \"a\"\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit switch -c add-search\ngit commit -m \"x\"\ngit commit -m \"x\"\n```\n\nHow many commits are in the history of `add-search` at the end (including the initial one, and any merge commit)?","options":["7","9","6","8"],"answer":0},{"prompt":"```bash\ngit commit -m \"a\"\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit switch -c refactor-api\n```\n\nHow many commits are in the history of `main` at the end (including the initial one, and any merge commit)?","options":["5","6","7","4"],"answer":0},{"prompt":"```bash\ngit commit -m \"a\"\ngit commit -m \"x\"\ngit switch -c refactor-api\ngit switch main\ngit commit -m \"x\"\n```\n\nHow many commits are in the history of `main` at the end (including the initial one, and any merge commit)?","options":["3","6","5","4"],"answer":3},{"prompt":"```bash\ngit commit -m \"a\"\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit switch -c add-search\ngit switch main\ngit merge add-search\n```\n\nHow many commits are in the history of `add-search` at the end (including the initial one, and any merge commit)?","options":["3","5","6","4"],"answer":3}]
---
# Dev Drill: Follow the git history #1

Each `git commit` adds a commit to the **current** branch. `git switch -c name` creates a branch from where you are and switches to it. `git merge other` brings another branch's commits in: a **fast-forward** if your branch hasn't moved, otherwise a new **merge commit**. The repo starts with 1 commit on `main`.
