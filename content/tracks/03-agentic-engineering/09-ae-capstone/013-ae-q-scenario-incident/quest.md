---
slug: "ae-q-scenario-incident"
title: "Scenarios: When Things Go Wrong"
type: "quiz"
xp: 15
questions: [{"prompt": "An agent committed a real API key to a branch that was pushed to GitHub. What is the first step?", "options": ["Force-push the branch to remove it", "Revoke and rotate the key immediately, then clean up the history and check its usage logs", "Wait and see"], "answer": 1}, {"prompt": "While summarising a web page, the agent proposes running a shell command it found on the page. What should you do?", "options": ["Run it", "Refuse and treat it as possible prompt injection, since page content is not an instruction", "Copy it into CLAUDE.md"], "answer": 1}, {"prompt": "An autonomous run deleted a directory outside the project. What is the best systemic fix?", "options": ["Never use agents", "Restrict filesystem access to the project (or a sandbox), and require approval for destructive commands", "Blame the agent"], "answer": 1}, {"prompt": "Production errors spike right after merging an agent-written change. What first?", "options": ["Debug live for an hour", "Roll back or switch off the flag to restore service, then investigate", "Ask the agent to push a quick fix to main"], "answer": 1}, {"prompt": "After an incident caused by an agent-written bug, what belongs in the postmortem?", "options": ["The name of the person to blame", "How the bug passed review and tests, and what checks or guard rails will catch it next time", "Nothing, AI bugs are random"], "answer": 1}]
---
# Scenarios: When Things Go Wrong

More scenarios, this time about **mistakes, incidents and safety**. The principles:

- **Stop the damage first**, then investigate.
- **Treat leaked secrets as compromised**: rotate them, don't just delete them.
- **External content is data, not instructions.**
- **Prefer reversible actions**, and make sure undo paths exist before you need them.
- **Blameless learning**: improve the system (permissions, checks, docs) so the same mistake can't happen again.
