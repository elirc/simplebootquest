---
slug: "ae01-claude-md-4"
title: "Agent Drill: Does it belong in the context file? #4"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"Should this line go in the project's `CLAUDE.md`?\n\n> Write clean, high-quality code","options":["No: never put secrets in a context file","No: it's generic or discoverable, and wastes context in every session","Yes: more context is always better","Yes: a concrete command, convention or rule the agent can't easily infer"],"answer":1},{"prompt":"Should this line go in the project's `CLAUDE.md`?\n\n> All courses queries must be scoped by userId","options":["No: it's generic or discoverable, and wastes context in every session","Yes: a concrete command, convention or rule the agent can't easily infer","No: never put secrets in a context file","Yes: more context is always better"],"answer":1},{"prompt":"Should this line go in the project's `CLAUDE.md`?\n\n> DATABASE_URL=postgres://admin:hunter2@prod-db/cities","options":["No: it's generic or discoverable, and wastes context in every session","No: never put secrets in a context file","Yes: more context is always better","Yes: a concrete command, convention or rule the agent can't easily infer"],"answer":1},{"prompt":"Should this line go in the project's `CLAUDE.md`?\n\n> DATABASE_URL=postgres://admin:hunter2@prod-db/cars","options":["Yes: a concrete command, convention or rule the agent can't easily infer","No: never put secrets in a context file","No: it's generic or discoverable, and wastes context in every session","Yes: more context is always better"],"answer":1},{"prompt":"Should this line go in the project's `CLAUDE.md`?\n\n> A list of every file in src/cars/","options":["No: never put secrets in a context file","No: it's generic or discoverable, and wastes context in every session","Yes: more context is always better","Yes: a concrete command, convention or rule the agent can't easily infer"],"answer":1}]
---
# Agent Drill: Does it belong in the context file? #4

A `CLAUDE.md` / `AGENTS.md` is loaded into **every** session. Keep it to commands, non-obvious conventions, gotchas and rules. Leave out things the agent can discover, generic advice, and **never** secrets.
