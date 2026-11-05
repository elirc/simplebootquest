---
slug: "ae03-claude-md-9"
title: "Agent Drill: Does it belong in the context file? #9"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"Should this line go in the project's `CLAUDE.md`?\n\n> Run a single test file with: npm test -- src/tasks/task.test.ts","options":["Yes: more context is always better","No: never put secrets in a context file","No: it's generic or discoverable, and wastes context in every session","Yes: a concrete command, convention or rule the agent can't easily infer"],"answer":3},{"prompt":"Should this line go in the project's `CLAUDE.md`?\n\n> All courses queries must be scoped by userId","options":["Yes: a concrete command, convention or rule the agent can't easily infer","Yes: more context is always better","No: never put secrets in a context file","No: it's generic or discoverable, and wastes context in every session"],"answer":0},{"prompt":"Should this line go in the project's `CLAUDE.md`?\n\n> A list of every file in src/books/","options":["Yes: more context is always better","Yes: a concrete command, convention or rule the agent can't easily infer","No: it's generic or discoverable, and wastes context in every session","No: never put secrets in a context file"],"answer":2},{"prompt":"Should this line go in the project's `CLAUDE.md`?\n\n> A list of every file in src/employees/","options":["Yes: more context is always better","No: it's generic or discoverable, and wastes context in every session","No: never put secrets in a context file","Yes: a concrete command, convention or rule the agent can't easily infer"],"answer":1},{"prompt":"Should this line go in the project's `CLAUDE.md`?\n\n> Run a single test file with: npm test -- src/flights/flight.test.ts","options":["No: never put secrets in a context file","No: it's generic or discoverable, and wastes context in every session","Yes: more context is always better","Yes: a concrete command, convention or rule the agent can't easily infer"],"answer":3}]
---
# Agent Drill: Does it belong in the context file? #9

A `CLAUDE.md` / `AGENTS.md` is loaded into **every** session. Keep it to commands, non-obvious conventions, gotchas and rules. Leave out things the agent can discover, generic advice, and **never** secrets.
