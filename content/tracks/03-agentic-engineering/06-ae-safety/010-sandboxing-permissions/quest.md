---
slug: "ae-sandboxing-permissions"
title: "Sandboxing & Least Privilege"
type: "quiz"
xp: 15
resources: [{"title": "Claude Code: Security", "url": "https://code.claude.com/docs/en/security"}]
questions: [{"prompt": "What does least privilege mean for an agent?", "options": ["Give it admin so it never gets blocked", "Give it only the access the task needs, and nothing more", "No access at all"], "answer": 1}, {"prompt": "Should production database credentials be available in an agent's dev environment?", "options": ["Yes, for convenience", "No", "Only on weekends"], "answer": 1}, {"prompt": "Which command is a good candidate for a deny rule?", "options": ["npm test", "git push --force", "git status"], "answer": 1}, {"prompt": "A useful question for designing agent access is…", "options": ["\"Will it be fast?\"", "\"What is the worst it could do with this access?\"", "\"Is the model smart enough?\""], "answer": 1}, {"prompt": "An agent needs to open PRs on one repo. What token should it get?", "options": ["Your personal admin token", "A token scoped to that repo with minimal permissions", "An org owner token"], "answer": 1}]
---
# Sandboxing & Least Privilege

Apply the **principle of least privilege** to agents just as you would to a service account:

- **Sandbox the environment**: run agents in a container, VM or cloud sandbox with access to the repo and nothing else, especially for autonomous runs.
- **No production credentials** in the agent's environment. Use a dev database, test API keys, and read-only tokens where possible.
- **Permission rules**: pre-approve safe, frequent commands (`npm test`, `git diff`), require approval for risky ones, and deny dangerous ones outright (`rm -rf`, `git push --force`, `curl ... | sh`).
- **Network restrictions**: limit outbound access to the hosts the task needs (package registries, docs).
- **Scoped tokens**: if an agent needs GitHub access, give it a token limited to one repo with minimal scopes.

Ask: *"If this agent did the worst possible thing with the access it has, what would happen?"* If the answer is "it could delete production", the access is wrong, however unlikely that outcome seems.
