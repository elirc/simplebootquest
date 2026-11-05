---
slug: "ae-q-headless"
title: "Agents in CI and Scripts"
type: "quiz"
xp: 15
questions: [{"prompt": "What replaces per-step human approval in a headless CI agent?", "options": ["Nothing is needed", "A tight sandbox, scoped tokens and least-privilege permissions", "Faster runners"], "answer": 1}, {"prompt": "A CI agent reads issues from the public. What must it NOT have?", "options": ["Read access to the code", "Power to push to main or access deployment secrets", "A timeout"], "answer": 1}, {"prompt": "What should a headless agent produce for code changes?", "options": ["A direct merge to main", "A pull request for human review", "An email to production"], "answer": 1}, {"prompt": "Why set budgets (turns, tokens, time) on unattended runs?", "options": ["To save electricity only", "So a confused run cannot loop for hours and burn money", "CI requires it"], "answer": 1}, {"prompt": "Which is a good first headless use case?", "options": ["Auto-deploy on any agent change", "Draft release notes from merged PRs for a human to edit", "Rotate secrets"], "answer": 1}]
---
# Agents in CI and Scripts

Agents don't only run in an interactive terminal. They can run **headless** in scripts and CI: triaging issues, fixing lint errors, updating snapshots, drafting release notes, or responding to review comments.

Running unattended changes the risk picture:
- **No human approves each step**, so the **permissions and environment** are your only guard rails. Give it a sandboxed runner, scoped tokens (one repo, no admin), and no production secrets.
- **Untrusted input everywhere**: issue bodies, PR descriptions and comments from strangers may contain prompt injection. Don't give an agent that reads public issues the power to push to `main` or read secrets.
- **Output goes through review**: headless agents should open a **PR or a comment**, not merge or deploy.
- **Budgets and timeouts**: cap turns, tokens and wall-clock time, so a confused run can't loop for hours.
- **Logs**: keep the full transcript as a CI artefact, so you can audit what it did.

Good first uses: "suggest a fix for this failing lint job as a PR", or "summarise this PR's changes for the changelog".
