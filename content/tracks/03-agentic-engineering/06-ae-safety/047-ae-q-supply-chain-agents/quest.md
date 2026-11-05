---
slug: "ae-q-supply-chain-agents"
title: "Running Untrusted Repositories"
type: "quiz"
xp: 15
questions: [{"prompt": "Which npm feature runs code from dependencies at install time?", "options": ["package-lock.json", "Lifecycle scripts such as postinstall", "The \"files\" field"], "answer": 1}, {"prompt": "Is vite.config.ts just data?", "options": ["Yes", "No: it is code that runs when you start the dev server or build"], "answer": 1}, {"prompt": "What is a safer first step with an unfamiliar repo?", "options": ["npm install and npm run dev", "Review the scripts and config, and install with --ignore-scripts or inside a disposable container", "Give an agent full permissions to explore"], "answer": 1}, {"prompt": "Why review lockfile changes in PRs?", "options": ["Style", "They can introduce new or changed dependencies, which is a supply-chain risk", "They are always wrong"], "answer": 1}, {"prompt": "Can agent configuration files inside a repo influence what the agent does?", "options": ["No", "Yes: they may contain instructions, hooks or tool configuration, so review them first"], "answer": 1}]
---
# Running Untrusted Repositories

Opening an unfamiliar repository with an agent, or even just running `npm install`, can **execute code**:

- `npm install` runs **lifecycle scripts** (`preinstall`, `postinstall`) from the project and its dependencies.
- Dev tooling runs project code: test runners, build configs (`vite.config.ts` is JavaScript!), git hooks, `.envrc` files, and editor tasks.
- Agent configuration in the repo (instruction files, hooks, MCP server definitions) may run commands or steer the agent.

Safer habits:
- Inspect `package.json` scripts, config files and agent config **before** installing or running anything.
- Use `npm install --ignore-scripts` for a first look, or work inside a **disposable container**.
- **Don't run an agent with broad permissions** in a repo you haven't reviewed.
- Keep credentials out of that environment.
- For your own projects: pin dependencies, review lockfile changes in PRs, and enable Dependabot or Renovate alerts.
