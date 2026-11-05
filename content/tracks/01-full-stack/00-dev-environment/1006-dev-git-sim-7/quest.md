---
slug: "dev-git-sim-7"
title: "Dev Drill: Follow the git history #7"
type: "quiz"
xp: 10
optional: true
section: "Practice: Git, Terminal & Debugging"
questions: [{"prompt":"```bash\ngit commit -m \"a\"\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit switch -c refactor-api\n```\n\nWhich branch is checked out at the end?","options":["refactor-api","detached HEAD","main","origin/main"],"answer":0},{"prompt":"```bash\ngit commit -m \"a\"\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit switch -c fix/typo\ngit commit -m \"x\"\n```\n\nHow many commits are in the history of `fix/typo` at the end (including the initial one, and any merge commit)?","options":["8","9","10","7"],"answer":0},{"prompt":"```bash\ngit commit -m \"a\"\ngit switch -c refactor-api\ngit switch main\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit switch refactor-api\ngit commit -m \"x\"\n```\n\nHow many commits are in the history of `refactor-api` at the end (including the initial one, and any merge commit)?","options":["3","2","5","4"],"answer":0},{"prompt":"```bash\ngit commit -m \"a\"\ngit commit -m \"x\"\ngit switch -c fix/typo\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit commit -m \"x\"\n```\n\nHow many commits are in the history of `fix/typo` at the end (including the initial one, and any merge commit)?","options":["8","7","10","9"],"answer":0},{"prompt":"```bash\ngit commit -m \"a\"\ngit switch -c add-search\ngit switch main\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit merge add-search\n```\n\nHow many commits are in the history of `add-search` at the end (including the initial one, and any merge commit)?","options":["3","4","1","2"],"answer":3}]
---
# Dev Drill: Follow the git history #7

Each `git commit` adds a commit to the **current** branch. `git switch -c name` creates a branch from where you are and switches to it. `git merge other` brings another branch's commits in: a **fast-forward** if your branch hasn't moved, otherwise a new **merge commit**. The repo starts with 1 commit on `main`.
