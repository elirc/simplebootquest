---
slug: "dev-git-everyday"
title: "Git for Every Change"
type: "quiz"
xp: 15
resources: [{"title": "Pro Git (free book)", "url": "https://git-scm.com/book/en/v2"}]
questions: [{"prompt": "Which command shows the exact line-by-line changes you haven't committed yet?", "options": ["git log", "git diff", "git push"], "answer": 1}, {"prompt": "You accidentally committed `.env` with a real API key and pushed it. What first?", "options": ["Delete the file and commit again", "Revoke and rotate the key, then remove it from history and add .env to .gitignore", "Make the repo private"], "answer": 1}, {"prompt": "Why work on a branch instead of directly on main?", "options": ["Git requires it", "Changes can be reviewed (pull request) and discarded without breaking main", "Branches are faster"], "answer": 1}, {"prompt": "What does `git add -p` let you do?", "options": ["Push to production", "Stage changes chunk by chunk, so each commit contains only what you mean", "Pull with rebase"], "answer": 1}, {"prompt": "Which is the better commit message?", "options": ["fix", "Return 404 instead of 500 when a todo does not exist"], "answer": 1}]
---
# Git for Every Change

Git records snapshots ("commits") of your project, so you can see what changed, undo mistakes and collaborate. The everyday loop:

```bash
git switch -c add-search        # a branch for this piece of work
# ...edit files...
git status                      # what changed?
git diff                        # exactly how?
git add -p                      # stage the changes you mean to commit
git commit -m "Add search to the todos list"
git push -u origin add-search   # then open a pull request
```

Rules that save you pain:
- **Small commits** with messages that say *why*, not just "fix".
- **Never commit secrets**: put `.env` in `.gitignore` from day one.
- Read `git diff` **before every commit**, especially when an AI agent wrote the code.
- `git restore <file>` throws away uncommitted changes to a file. `git stash` shelves them for later.
