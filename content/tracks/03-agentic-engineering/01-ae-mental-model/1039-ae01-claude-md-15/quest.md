---
slug: "ae01-claude-md-15"
title: "Agent Drill: Does it belong in the context file? #15"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"Should this line go in the project's `CLAUDE.md`?\n\n> All orders queries must be scoped by userId","options":["No: it's generic or discoverable, and wastes context in every session","Yes: more context is always better","Yes: a concrete command, convention or rule the agent can't easily infer","No: never put secrets in a context file"],"answer":2},{"prompt":"Should this line go in the project's `CLAUDE.md`?\n\n> DATABASE_URL=postgres://admin:hunter2@prod-db/orders","options":["No: it's generic or discoverable, and wastes context in every session","No: never put secrets in a context file","Yes: a concrete command, convention or rule the agent can't easily infer","Yes: more context is always better"],"answer":1},{"prompt":"Should this line go in the project's `CLAUDE.md`?\n\n> All cars queries must be scoped by userId","options":["No: it's generic or discoverable, and wastes context in every session","Yes: a concrete command, convention or rule the agent can't easily infer","Yes: more context is always better","No: never put secrets in a context file"],"answer":1},{"prompt":"Should this line go in the project's `CLAUDE.md`?\n\n> A list of every file in src/flights/","options":["Yes: more context is always better","No: it's generic or discoverable, and wastes context in every session","Yes: a concrete command, convention or rule the agent can't easily infer","No: never put secrets in a context file"],"answer":1},{"prompt":"Should this line go in the project's `CLAUDE.md`?\n\n> DATABASE_URL=postgres://admin:hunter2@prod-db/books","options":["No: never put secrets in a context file","No: it's generic or discoverable, and wastes context in every session","Yes: more context is always better","Yes: a concrete command, convention or rule the agent can't easily infer"],"answer":0}]
---
# Agent Drill: Does it belong in the context file? #15

A `CLAUDE.md` / `AGENTS.md` is loaded into **every** session. Keep it to commands, non-obvious conventions, gotchas and rules. Leave out things the agent can discover, generic advice, and **never** secrets.
