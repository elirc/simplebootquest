---
slug: "dev-git-sim-10"
title: "Dev Drill: Follow the git history #10"
type: "quiz"
xp: 10
optional: true
section: "Practice: Git, Terminal & Debugging"
questions: [{"prompt":"```bash\ngit commit -m \"a\"\ngit switch -c fix/typo\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit commit -m \"x\"\n```\n\nHow many commits are in the history of `fix/typo` at the end (including the initial one, and any merge commit)?","options":["7","6","5","4"],"answer":2},{"prompt":"```bash\ngit commit -m \"a\"\ngit switch -c add-search\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit commit -m \"x\"\n```\n\nWhich branch is checked out at the end?","options":["detached HEAD","main","add-search","origin/main"],"answer":2},{"prompt":"```bash\ngit commit -m \"a\"\ngit commit -m \"x\"\ngit switch -c feature/login\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit commit -m \"x\"\n```\n\nWhich branch is checked out at the end?","options":["detached HEAD","main","feature/login","origin/main"],"answer":2},{"prompt":"```bash\ngit commit -m \"a\"\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit switch -c refactor-api\n```\n\nWhich branch is checked out at the end?","options":["main","detached HEAD","origin/main","refactor-api"],"answer":3},{"prompt":"```bash\ngit commit -m \"a\"\ngit switch -c feature/login\ngit commit -m \"x\"\ngit switch main\ngit merge feature/login\n```\n\nHow many commits are in the history of `feature/login` at the end (including the initial one, and any merge commit)?","options":["4","5","3","2"],"answer":2}]
---
# Dev Drill: Follow the git history #10

Each `git commit` adds a commit to the **current** branch. `git switch -c name` creates a branch from where you are and switches to it. `git merge other` brings another branch's commits in: a **fast-forward** if your branch hasn't moved, otherwise a new **merge commit**. The repo starts with 1 commit on `main`.
