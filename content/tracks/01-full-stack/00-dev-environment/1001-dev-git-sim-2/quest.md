---
slug: "dev-git-sim-2"
title: "Dev Drill: Follow the git history #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: Git, Terminal & Debugging"
questions: [{"prompt":"```bash\ngit commit -m \"a\"\ngit switch -c feature/login\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit commit -m \"x\"\n```\n\nHow many commits are in the history of `main` at the end (including the initial one, and any merge commit)?","options":["2","4","3","1"],"answer":0},{"prompt":"```bash\ngit commit -m \"a\"\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit switch -c feature/login\ngit commit -m \"x\"\ngit switch main\ngit switch feature/login\ngit commit -m \"x\"\n```\n\nHow many commits are in the history of `feature/login` at the end (including the initial one, and any merge commit)?","options":["7","5","6","8"],"answer":2},{"prompt":"```bash\ngit commit -m \"a\"\ngit commit -m \"x\"\ngit switch -c fix/typo\ngit switch main\ngit merge fix/typo\ngit merge fix/typo\n```\n\nHow many commits are in the history of `fix/typo` at the end (including the initial one, and any merge commit)?","options":["4","5","2","3"],"answer":3},{"prompt":"```bash\ngit commit -m \"a\"\ngit commit -m \"x\"\ngit switch -c add-search\ngit commit -m \"x\"\ngit commit -m \"x\"\n```\n\nHow many commits are in the history of `main` at the end (including the initial one, and any merge commit)?","options":["2","4","5","3"],"answer":3},{"prompt":"```bash\ngit commit -m \"a\"\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit commit -m \"x\"\ngit switch -c fix/typo\ngit switch main\ngit commit -m \"x\"\ngit switch fix/typo\n```\n\nHow many commits are in the history of `main` at the end (including the initial one, and any merge commit)?","options":["6","8","5","7"],"answer":0}]
---
# Dev Drill: Follow the git history #2

Each `git commit` adds a commit to the **current** branch. `git switch -c name` creates a branch from where you are and switches to it. `git merge other` brings another branch's commits in: a **fast-forward** if your branch hasn't moved, otherwise a new **merge commit**. The repo starts with 1 commit on `main`.
