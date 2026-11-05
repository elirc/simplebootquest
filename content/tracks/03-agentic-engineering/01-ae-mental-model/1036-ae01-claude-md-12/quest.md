---
slug: "ae01-claude-md-12"
title: "Agent Drill: Does it belong in the context file? #12"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"Should this line go in the project's `CLAUDE.md`?\n\n> A list of every file in src/transactions/","options":["Yes: more context is always better","Yes: a concrete command, convention or rule the agent can't easily infer","No: never put secrets in a context file","No: it's generic or discoverable, and wastes context in every session"],"answer":3},{"prompt":"Should this line go in the project's `CLAUDE.md`?\n\n> A list of every file in src/books/","options":["Yes: a concrete command, convention or rule the agent can't easily infer","Yes: more context is always better","No: never put secrets in a context file","No: it's generic or discoverable, and wastes context in every session"],"answer":3},{"prompt":"Should this line go in the project's `CLAUDE.md`?\n\n> All employees queries must be scoped by userId","options":["Yes: a concrete command, convention or rule the agent can't easily infer","No: it's generic or discoverable, and wastes context in every session","Yes: more context is always better","No: never put secrets in a context file"],"answer":0},{"prompt":"Should this line go in the project's `CLAUDE.md`?\n\n> All events queries must be scoped by userId","options":["Yes: more context is always better","No: never put secrets in a context file","Yes: a concrete command, convention or rule the agent can't easily infer","No: it's generic or discoverable, and wastes context in every session"],"answer":2},{"prompt":"Should this line go in the project's `CLAUDE.md`?\n\n> All tickets queries must be scoped by userId","options":["No: never put secrets in a context file","Yes: a concrete command, convention or rule the agent can't easily infer","Yes: more context is always better","No: it's generic or discoverable, and wastes context in every session"],"answer":1}]
---
# Agent Drill: Does it belong in the context file? #12

A `CLAUDE.md` / `AGENTS.md` is loaded into **every** session. Keep it to commands, non-obvious conventions, gotchas and rules. Leave out things the agent can discover, generic advice, and **never** secrets.
