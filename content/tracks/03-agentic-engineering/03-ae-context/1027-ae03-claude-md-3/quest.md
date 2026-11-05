---
slug: "ae03-claude-md-3"
title: "Agent Drill: Does it belong in the context file? #3"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"Should this line go in the project's `CLAUDE.md`?\n\n> The full content of the README, pasted in","options":["No: never put secrets in a context file","No: it's generic or discoverable, and wastes context in every session","Yes: more context is always better","Yes: a concrete command, convention or rule the agent can't easily infer"],"answer":1},{"prompt":"Should this line go in the project's `CLAUDE.md`?\n\n> A list of every file in src/plants/","options":["Yes: more context is always better","No: it's generic or discoverable, and wastes context in every session","No: never put secrets in a context file","Yes: a concrete command, convention or rule the agent can't easily infer"],"answer":1},{"prompt":"Should this line go in the project's `CLAUDE.md`?\n\n> A list of every file in src/orders/","options":["Yes: more context is always better","Yes: a concrete command, convention or rule the agent can't easily infer","No: it's generic or discoverable, and wastes context in every session","No: never put secrets in a context file"],"answer":2},{"prompt":"Should this line go in the project's `CLAUDE.md`?\n\n> Run a single test file with: npm test -- src/tickets/ticket.test.ts","options":["Yes: more context is always better","No: it's generic or discoverable, and wastes context in every session","No: never put secrets in a context file","Yes: a concrete command, convention or rule the agent can't easily infer"],"answer":3},{"prompt":"Should this line go in the project's `CLAUDE.md`?\n\n> DATABASE_URL=postgres://admin:hunter2@prod-db/cars","options":["No: never put secrets in a context file","Yes: more context is always better","Yes: a concrete command, convention or rule the agent can't easily infer","No: it's generic or discoverable, and wastes context in every session"],"answer":0}]
---
# Agent Drill: Does it belong in the context file? #3

A `CLAUDE.md` / `AGENTS.md` is loaded into **every** session. Keep it to commands, non-obvious conventions, gotchas and rules. Leave out things the agent can discover, generic advice, and **never** secrets.
