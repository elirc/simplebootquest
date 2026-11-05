---
slug: "ae-workflow-playbook"
title: "Write-Up: A Multi-Step Feature Playbook"
type: "design"
xp: 40
hints: ["Assume the session will be interrupted halfway. How does the next one pick up?"]
rubric: ["Uses explicit explore and plan phases, with a plan review before coding", "Breaks the feature into ordered, independently verifiable steps", "Defines checkpoints with specific checks and commits", "Uses test-first for at least the core logic", "Explains how state persists across sessions (plan file, commits)", "Identifies safe parallel work (or explains why there is none)", "Lists signals for stopping and changing approach"]
minWords: 200
---
# Write-Up: A Multi-Step Feature Playbook

Take a **substantial feature** for your capstone, one that touches the database, API and UI (e.g. "teams with invitations", "recurring tasks", "recipe collections"). Write the playbook you'll follow to build it with an agent:

- How the session(s) are structured (explore → plan → implement → verify).
- The checkpoints: when you commit, and what you check at each one.
- Where you use test-first.
- What could run in parallel, if anything, and how it's isolated.
- How you'll keep state across sessions.
- Your "stop and rethink" signals (when to abandon an approach).
