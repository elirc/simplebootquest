---
slug: "ae03-claude-md-12"
title: "Agent Drill: Does it belong in the context file? #12"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"Should this line go in the project's `CLAUDE.md`?\n\n> All songs queries must be scoped by userId","options":["No: never put secrets in a context file","No: it's generic or discoverable, and wastes context in every session","Yes: more context is always better","Yes: a concrete command, convention or rule the agent can't easily infer"],"answer":3},{"prompt":"Should this line go in the project's `CLAUDE.md`?\n\n> A list of every file in src/students/","options":["No: it's generic or discoverable, and wastes context in every session","Yes: more context is always better","No: never put secrets in a context file","Yes: a concrete command, convention or rule the agent can't easily infer"],"answer":0},{"prompt":"Should this line go in the project's `CLAUDE.md`?\n\n> DATABASE_URL=postgres://admin:hunter2@prod-db/repos","options":["Yes: more context is always better","No: never put secrets in a context file","Yes: a concrete command, convention or rule the agent can't easily infer","No: it's generic or discoverable, and wastes context in every session"],"answer":1},{"prompt":"Should this line go in the project's `CLAUDE.md`?\n\n> A list of every file in src/workouts/","options":["No: never put secrets in a context file","Yes: a concrete command, convention or rule the agent can't easily infer","No: it's generic or discoverable, and wastes context in every session","Yes: more context is always better"],"answer":2},{"prompt":"Should this line go in the project's `CLAUDE.md`?\n\n> All hotels queries must be scoped by userId","options":["Yes: a concrete command, convention or rule the agent can't easily infer","No: it's generic or discoverable, and wastes context in every session","No: never put secrets in a context file","Yes: more context is always better"],"answer":0}]
---
# Agent Drill: Does it belong in the context file? #12

A `CLAUDE.md` / `AGENTS.md` is loaded into **every** session. Keep it to commands, non-obvious conventions, gotchas and rules. Leave out things the agent can discover, generic advice, and **never** secrets.
