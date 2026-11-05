---
slug: "ae-long-sessions"
title: "Managing Long Tasks & Sessions"
type: "quiz"
xp: 15
questions: [{"prompt": "After a long session is compacted, the agent forgets a key decision. What prevents this?", "options": ["Longer prompts", "Recording decisions in a plan/notes file and in commits that it can re-read", "Never compacting"], "answer": 1}, {"prompt": "Why commit after each completed step of a long task?", "options": ["To increase the commit count", "Progress becomes durable, reviewable and easy to revert", "Git requires it"], "answer": 1}, {"prompt": "How can subagents help with context?", "options": ["They make the model smarter", "They do broad exploration separately and return only the conclusion", "They don't"], "answer": 1}, {"prompt": "The general principle for long tasks is…", "options": ["Keep everything in the conversation", "Externalise state into files and version control", "Work faster"], "answer": 1}, {"prompt": "Starting phase 2 of a big feature, a good prompt begins with…", "options": ["\"Continue\"", "\"Read PLAN.md, check git log for what's done, then do step 4\"", "\"Do everything left\""], "answer": 1}]
---
# Managing Long Tasks & Sessions

Big tasks outlive a single context window. Techniques that keep long work on track:

- **Write the plan down.** Ask the agent to keep a `PLAN.md` or checklist with the steps, decisions and what's done. After a reset or compaction, it re-reads the plan instead of reconstructing it from a fuzzy summary.
- **Commit at checkpoints.** Each completed step gets a commit, so progress is durable, reviewable and revertible. Git history becomes the memory.
- **Start fresh between phases.** A new session with "read PLAN.md and continue with step 4" often beats a bloated one.
- **Delegate exploration.** Subagents or a separate session can do a broad search ("find every place we build URLs") and return just the conclusion, keeping the main context clean.
- **Keep tool output lean**: summaries rather than walls of logs.
- **Restate key constraints** when starting a new phase. Don't rely on something said 3 hours ago.

The pattern: **externalise state** (plans, commits, notes) instead of keeping it in the conversation.
