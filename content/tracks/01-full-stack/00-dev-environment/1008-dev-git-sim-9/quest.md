---
slug: "dev-git-sim-9"
title: "Dev Drill: Follow the git history #9"
type: "quiz"
xp: 10
optional: true
section: "Practice: Git, Terminal & Debugging"
questions: [{"prompt":"```bash\ngit commit -m \"a\"\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit switch -c refactor-api\ngit commit -m \"x\"\ngit switch main\ngit merge refactor-api\ngit commit -m \"x\"\n```\n\nHow many commits are in the history of `refactor-api` at the end (including the initial one, and any merge commit)?","options":["7","5","6","4"],"answer":1},{"prompt":"```bash\ngit commit -m \"a\"\ngit commit -m \"x\"\ngit switch -c add-search\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit commit -m \"x\"\n```\n\nHow many commits are in the history of `main` at the end (including the initial one, and any merge commit)?","options":["4","2","3","5"],"answer":2},{"prompt":"```bash\ngit commit -m \"a\"\ngit switch -c add-search\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit commit -m \"x\"\n```\n\nHow many commits are in the history of `main` at the end (including the initial one, and any merge commit)?","options":["1","4","3","2"],"answer":3},{"prompt":"```bash\ngit commit -m \"a\"\ngit switch -c refactor-api\ngit switch main\ngit switch refactor-api\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit commit -m \"x\"\n```\n\nWhich branch is checked out at the end?","options":["refactor-api","main","detached HEAD","origin/main"],"answer":0},{"prompt":"```bash\ngit commit -m \"a\"\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit switch -c fix/typo\ngit commit -m \"x\"\ngit commit -m \"x\"\n```\n\nHow many commits are in the history of `fix/typo` at the end (including the initial one, and any merge commit)?","options":["8","9","7","10"],"answer":0}]
---
# Dev Drill: Follow the git history #9

Each `git commit` adds a commit to the **current** branch. `git switch -c name` creates a branch from where you are and switches to it. `git merge other` brings another branch's commits in: a **fast-forward** if your branch hasn't moved, otherwise a new **merge commit**. The repo starts with 1 commit on `main`.
