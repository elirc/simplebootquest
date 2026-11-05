---
slug: "dev-git-sim-12"
title: "Dev Drill: Follow the git history #12"
type: "quiz"
xp: 10
optional: true
section: "Practice: Git, Terminal & Debugging"
questions: [{"prompt":"```bash\ngit commit -m \"a\"\ngit switch -c feature/login\ngit switch main\ngit commit -m \"x\"\ngit switch feature/login\ngit commit -m \"x\"\ngit switch main\ngit commit -m \"x\"\n```\n\nWhich branch is checked out at the end?","options":["main","detached HEAD","feature/login","origin/main"],"answer":0},{"prompt":"```bash\ngit commit -m \"a\"\ngit commit -m \"x\"\ngit switch -c feature/login\ngit switch main\ngit switch feature/login\n```\n\nWhich branch is checked out at the end?","options":["main","origin/main","feature/login","detached HEAD"],"answer":2},{"prompt":"```bash\ngit commit -m \"a\"\ngit switch -c feature/login\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit switch main\n```\n\nHow many commits are in the history of `feature/login` at the end (including the initial one, and any merge commit)?","options":["6","8","7","5"],"answer":0},{"prompt":"```bash\ngit commit -m \"a\"\ngit switch -c fix/typo\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit commit -m \"x\"\n```\n\nWhich branch is checked out at the end?","options":["detached HEAD","origin/main","fix/typo","main"],"answer":2},{"prompt":"```bash\ngit commit -m \"a\"\ngit commit -m \"x\"\ngit switch -c fix/typo\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit commit -m \"x\"\n```\n\nHow many commits are in the history of `fix/typo` at the end (including the initial one, and any merge commit)?","options":["8","9","11","10"],"answer":1}]
---
# Dev Drill: Follow the git history #12

Each `git commit` adds a commit to the **current** branch. `git switch -c name` creates a branch from where you are and switches to it. `git merge other` brings another branch's commits in: a **fast-forward** if your branch hasn't moved, otherwise a new **merge commit**. The repo starts with 1 commit on `main`.
