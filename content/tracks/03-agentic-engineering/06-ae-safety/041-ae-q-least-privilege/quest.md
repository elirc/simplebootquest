---
slug: "ae-q-least-privilege"
title: "Least Privilege for Agents"
type: "quiz"
xp: 15
questions: [{"prompt": "Why should an agent not run with your production database credentials?", "options": ["They are slow", "A mistake or an injected instruction could read or destroy production data", "Prisma forbids it"], "answer": 1}, {"prompt": "What is a safer environment for autonomous agent runs?", "options": ["Your main laptop with all credentials", "A container or sandbox with only the project and limited network access", "A production server"], "answer": 1}, {"prompt": "Which git permission is unnecessary for a typical agent task?", "options": ["Push to a feature branch", "Force-push to main", "Read the repository"], "answer": 1}, {"prompt": "Why is clicking \"always allow\" on every permission prompt risky?", "options": ["It is not", "You stop reviewing what the agent can do, including destructive commands", "It slows the agent"], "answer": 1}, {"prompt": "What does network allow-listing protect against?", "options": ["Slow downloads", "Data being sent to arbitrary destinations (exfiltration) after a compromise or an injection", "Git conflicts"], "answer": 1}]
---
# Least Privilege for Agents

An agent can do anything its **tools and credentials** allow, and mistakes or prompt injection can trigger any of it. So give it only what the task needs:

| Resource | Give | Avoid |
|----------|------|-------|
| Filesystem | The project directory | Your home directory, `~/.ssh`, `~/.aws` |
| Shell | An allow-list of commands (`npm test`, `git diff`), or a sandbox | Unrestricted shell on your main machine |
| Git | Branch pushes, PRs | Force-push to `main`, admin rights |
| Database | A local or dev database, read-only where possible | Production credentials |
| Cloud | None, or a sandbox account | Admin keys |
| Network | Allow-listed domains (the npm registry, docs) | Unrestricted outbound access with secrets nearby |

Also:
- **Prefer containers, devcontainers or cloud sandboxes** for autonomous runs.
- **Keep production credentials off the machine** where agents run, or out of their environment.
- **Review permission prompts** instead of approving on autopilot. "Allow always" for `rm -rf` is a decision, not a convenience.
