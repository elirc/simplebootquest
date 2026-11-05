---
slug: "ae-git-hygiene"
title: "Git Hygiene & Checkpoints"
type: "quiz"
xp: 15
questions: [{"prompt": "An agent's last three edits made things worse. What is the cleanest recovery?", "options": ["Ask it to manually undo each edit", "Reset to the last green commit and try a different approach", "Keep going"], "answer": 1}, {"prompt": "Why start an agent task from a clean working tree?", "options": ["Speed", "The agent's changes are then easy to see, review and revert", "Git requires it"], "answer": 1}, {"prompt": "What should you look for when reviewing a diff before committing?", "options": ["Only formatting", "Unrelated changes, debug leftovers, secrets, weakened or deleted tests", "Nothing: the agent checked"], "answer": 1}, {"prompt": "Should an agent force-push to a shared branch on its own?", "options": ["Yes", "No: only with explicit human approval", "Only on Fridays"], "answer": 1}, {"prompt": "What makes a good commit message?", "options": ["\"fix\"", "A summary of what changed and why", "The full diff"], "answer": 1}]
---
# Git Hygiene & Checkpoints

Version control is your **undo button** and your **audit trail**. With agents, it matters more than ever:

- **Work on a branch**, never directly on `main`.
- **Start from a clean tree**, so the agent's changes are easy to isolate (`git status` should be empty).
- **Commit at each green checkpoint.** If the next step goes badly, `git restore .` or `git reset --hard <checkpoint>` and try a different approach. That's much better than asking the agent to "undo" by hand.
- **Small, focused commits** with messages that explain *why*. An agent can write good messages if you ask it to describe the intent.
- **Read every diff before committing** (`git diff --staged`). Look for unrelated changes, debug leftovers, secrets and deleted tests.
- **Never let an agent force-push** or rewrite shared history without explicit approval.

Some tools also checkpoint automatically, so you can rewind the conversation *and* the files. Treat that as a convenience on top of git, not a replacement for it.
