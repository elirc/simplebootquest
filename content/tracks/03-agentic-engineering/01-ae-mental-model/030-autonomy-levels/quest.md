---
slug: "ae-autonomy-levels"
title: "Autonomy & Permission Levels"
type: "quiz"
xp: 15
resources: [{"title": "Claude Code: Permissions & settings", "url": "https://code.claude.com/docs/en/settings"}]
questions: [{"prompt": "What should mostly determine how much autonomy you give an agent?", "options": ["How confident it sounds", "The reversibility and blast radius of the actions it can take", "The time of day"], "answer": 1}, {"prompt": "Which action most deserves a human in the loop?", "options": ["Editing a file in a git branch", "Running `prisma migrate deploy` against production", "Running unit tests"], "answer": 1}, {"prompt": "Why are allow/deny rules useful?", "options": ["They speed up the model", "They pre-approve safe commands and block dangerous ones, reducing both prompts and risk", "They are required"], "answer": 1}, {"prompt": "Which environment is safest for a fully autonomous agent?", "options": ["Your laptop with production credentials loaded", "An isolated container or sandbox with no production secrets, using a git branch", "A production server"], "answer": 1}, {"prompt": "Editing files in a git repo is relatively low-risk because…", "options": ["Agents never make mistakes", "Changes are visible (git diff) and reversible", "Files cannot be deleted"], "answer": 1}]
---
# Autonomy & Permission Levels

Agents can run with very different amounts of independence:

| Level | The agent… | Good for |
|-------|-----------|----------|
| **Suggest** | proposes changes; you apply them | Learning, sensitive code |
| **Ask per action** | asks before each edit or command | Unfamiliar repos, risky operations |
| **Auto-edit** | edits files freely, asks before shell commands | Normal feature work |
| **Autonomous** | edits and runs commands without asking (ideally in a sandbox) | Well-tested repos, long tasks, background agents |

Claude Code, for example, has **permission modes** and **allow/deny rules** for specific tools and commands (e.g. allow `npm test`, deny `git push --force`).

### Choosing a level

Match autonomy to **reversibility** and **blast radius**:

- Editing files in a git repo is reversible (`git diff`, `git restore`).
- Running tests in a container is low risk.
- Pushing to `main`, running migrations against production, deleting cloud resources, or sending emails is **not** reversible. Keep a human in the loop.

More autonomy needs better guardrails: version control, a sandbox or container, a good test suite, and no production credentials in the environment.
