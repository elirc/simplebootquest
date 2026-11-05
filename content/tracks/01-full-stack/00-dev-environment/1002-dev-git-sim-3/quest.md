---
slug: "dev-git-sim-3"
title: "Dev Drill: Follow the git history #3"
type: "quiz"
xp: 10
optional: true
section: "Practice: Git, Terminal & Debugging"
questions: [{"prompt":"```bash\ngit commit -m \"a\"\ngit switch -c feature/login\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit switch main\ngit commit -m \"x\"\ngit commit -m \"x\"\n```\n\nWhich branch is checked out at the end?","options":["main","detached HEAD","feature/login","origin/main"],"answer":0},{"prompt":"```bash\ngit commit -m \"a\"\ngit commit -m \"x\"\ngit switch -c add-search\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit commit -m \"x\"\n```\n\nHow many commits are in the history of `add-search` at the end (including the initial one, and any merge commit)?","options":["6","5","7","8"],"answer":0},{"prompt":"```bash\ngit commit -m \"a\"\ngit commit -m \"x\"\ngit switch -c fix/typo\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit commit -m \"x\"\n```\n\nWhich branch is checked out at the end?","options":["fix/typo","origin/main","main","detached HEAD"],"answer":0},{"prompt":"```bash\ngit commit -m \"a\"\ngit commit -m \"x\"\ngit switch -c add-search\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit commit -m \"x\"\n```\n\nHow many commits are in the history of `add-search` at the end (including the initial one, and any merge commit)?","options":["7","8","9","6"],"answer":0},{"prompt":"```bash\ngit commit -m \"a\"\ngit switch -c refactor-api\ngit switch main\ngit merge refactor-api\ngit merge refactor-api\ngit switch refactor-api\ngit commit -m \"x\"\n```\n\nHow many commits are in the history of `main` at the end (including the initial one, and any merge commit)?","options":["3","4","2","1"],"answer":2}]
---
# Dev Drill: Follow the git history #3

Each `git commit` adds a commit to the **current** branch. `git switch -c name` creates a branch from where you are and switches to it. `git merge other` brings another branch's commits in: a **fast-forward** if your branch hasn't moved, otherwise a new **merge commit**. The repo starts with 1 commit on `main`.
