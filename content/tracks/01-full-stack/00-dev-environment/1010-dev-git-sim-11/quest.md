---
slug: "dev-git-sim-11"
title: "Dev Drill: Follow the git history #11"
type: "quiz"
xp: 10
optional: true
section: "Practice: Git, Terminal & Debugging"
questions: [{"prompt":"```bash\ngit commit -m \"a\"\ngit switch -c refactor-api\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit commit -m \"x\"\n```\n\nHow many commits are in the history of `main` at the end (including the initial one, and any merge commit)?","options":["4","2","3","1"],"answer":1},{"prompt":"```bash\ngit commit -m \"a\"\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit switch -c feature/login\ngit switch main\ngit commit -m \"x\"\ngit commit -m \"x\"\n```\n\nHow many commits are in the history of `feature/login` at the end (including the initial one, and any merge commit)?","options":["6","4","7","5"],"answer":3},{"prompt":"```bash\ngit commit -m \"a\"\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit switch -c fix/typo\n```\n\nHow many commits are in the history of `fix/typo` at the end (including the initial one, and any merge commit)?","options":["7","8","6","5"],"answer":2},{"prompt":"```bash\ngit commit -m \"a\"\ngit switch -c refactor-api\ngit switch main\ngit commit -m \"x\"\ngit merge refactor-api\n```\n\nHow many commits are in the history of `main` at the end (including the initial one, and any merge commit)?","options":["6","3","4","5"],"answer":2},{"prompt":"```bash\ngit commit -m \"a\"\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit switch -c feature/login\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit switch main\n```\n\nWhich branch is checked out at the end?","options":["detached HEAD","main","origin/main","feature/login"],"answer":1}]
---
# Dev Drill: Follow the git history #11

Each `git commit` adds a commit to the **current** branch. `git switch -c name` creates a branch from where you are and switches to it. `git merge other` brings another branch's commits in: a **fast-forward** if your branch hasn't moved, otherwise a new **merge commit**. The repo starts with 1 commit on `main`.
