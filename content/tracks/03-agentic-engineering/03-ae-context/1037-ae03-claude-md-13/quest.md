---
slug: "ae03-claude-md-13"
title: "Agent Drill: Does it belong in the context file? #13"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"Should this line go in the project's `CLAUDE.md`?\n\n> A list of every file in src/hotels/","options":["No: it's generic or discoverable, and wastes context in every session","No: never put secrets in a context file","Yes: more context is always better","Yes: a concrete command, convention or rule the agent can't easily infer"],"answer":0},{"prompt":"Should this line go in the project's `CLAUDE.md`?\n\n> A list of every file in src/recipes/","options":["Yes: more context is always better","No: it's generic or discoverable, and wastes context in every session","Yes: a concrete command, convention or rule the agent can't easily infer","No: never put secrets in a context file"],"answer":1},{"prompt":"Should this line go in the project's `CLAUDE.md`?\n\n> DATABASE_URL=postgres://admin:hunter2@prod-db/movies","options":["No: never put secrets in a context file","Yes: a concrete command, convention or rule the agent can't easily infer","Yes: more context is always better","No: it's generic or discoverable, and wastes context in every session"],"answer":0},{"prompt":"Should this line go in the project's `CLAUDE.md`?\n\n> All students queries must be scoped by userId","options":["Yes: a concrete command, convention or rule the agent can't easily infer","Yes: more context is always better","No: it's generic or discoverable, and wastes context in every session","No: never put secrets in a context file"],"answer":0},{"prompt":"Should this line go in the project's `CLAUDE.md`?\n\n> All repos queries must be scoped by userId","options":["No: never put secrets in a context file","Yes: more context is always better","No: it's generic or discoverable, and wastes context in every session","Yes: a concrete command, convention or rule the agent can't easily infer"],"answer":3}]
---
# Agent Drill: Does it belong in the context file? #13

A `CLAUDE.md` / `AGENTS.md` is loaded into **every** session. Keep it to commands, non-obvious conventions, gotchas and rules. Leave out things the agent can discover, generic advice, and **never** secrets.
