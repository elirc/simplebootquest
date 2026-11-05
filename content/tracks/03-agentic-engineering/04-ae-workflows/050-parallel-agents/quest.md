---
slug: "ae-parallel-agents"
title: "Parallel Agents & Delegation"
type: "quiz"
xp: 15
resources: [{"title": "git worktree docs", "url": "https://git-scm.com/docs/git-worktree"}]
questions: [{"prompt": "When is it safe to run two agents in parallel?", "options": ["Always", "When their tasks are independent and they work in isolated workspaces", "Only on the same file"], "answer": 1}, {"prompt": "What does a git worktree give each agent?", "options": ["A faster CPU", "Its own checkout (files + branch) of the same repository", "A separate GitHub account"], "answer": 1}, {"prompt": "Why have a second agent with fresh context review the first agent's diff?", "options": ["It is required", "A fresh perspective without the first agent's assumptions catches more issues", "To double the cost"], "answer": 1}, {"prompt": "What limits how many agents you should run in parallel?", "options": ["Nothing", "Your capacity to review and verify their output", "The number of CPU cores only"], "answer": 1}, {"prompt": "A good use for a research subagent:", "options": ["Committing to main", "\"Find every place we format currency and summarise the patterns\"", "Deploying to production"], "answer": 1}]
---
# Parallel Agents & Delegation

You can run several agents at once, but parallelism has the same rules as with humans:

- **Independent tasks only.** Two agents editing the same files will conflict. Good candidates: different features, tests for different modules, a migration script and docs.
- **Isolate the workspaces.** Use **git worktrees** (several checkouts of the same repo on different branches) or separate containers, so each agent has its own files and processes.
- **Subagents for research.** A main agent can delegate "find every place we compute prices" to a subagent that returns a short summary, keeping the main context focused.
- **Fan-out / review**: one agent writes, and another (with fresh context) reviews the diff against the spec. A fresh perspective catches more.
- **You are the bottleneck.** Five agents producing five diffs means five reviews. Don't generate more output than you can verify; unreviewed code is a liability.

Background or cloud agents (running from an issue, a PR or a schedule) follow the same principles: clear specs, isolated environments, and human review before merging.
