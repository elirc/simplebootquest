---
slug: "ae01-claude-md-13"
title: "Agent Drill: Does it belong in the context file? #13"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"Should this line go in the project's `CLAUDE.md`?\n\n> All recipes queries must be scoped by userId","options":["Yes: a concrete command, convention or rule the agent can't easily infer","No: it's generic or discoverable, and wastes context in every session","Yes: more context is always better","No: never put secrets in a context file"],"answer":0},{"prompt":"Should this line go in the project's `CLAUDE.md`?\n\n> DATABASE_URL=postgres://admin:hunter2@prod-db/events","options":["No: never put secrets in a context file","Yes: a concrete command, convention or rule the agent can't easily infer","No: it's generic or discoverable, and wastes context in every session","Yes: more context is always better"],"answer":0},{"prompt":"Should this line go in the project's `CLAUDE.md`?\n\n> Run a single test file with: npm test -- src/courses/course.test.ts","options":["Yes: more context is always better","No: never put secrets in a context file","Yes: a concrete command, convention or rule the agent can't easily infer","No: it's generic or discoverable, and wastes context in every session"],"answer":2},{"prompt":"Should this line go in the project's `CLAUDE.md`?\n\n> All songs queries must be scoped by userId","options":["Yes: a concrete command, convention or rule the agent can't easily infer","No: never put secrets in a context file","Yes: more context is always better","No: it's generic or discoverable, and wastes context in every session"],"answer":0},{"prompt":"Should this line go in the project's `CLAUDE.md`?\n\n> Run a single test file with: npm test -- src/cities/city.test.ts","options":["No: it's generic or discoverable, and wastes context in every session","Yes: more context is always better","Yes: a concrete command, convention or rule the agent can't easily infer","No: never put secrets in a context file"],"answer":2}]
---
# Agent Drill: Does it belong in the context file? #13

A `CLAUDE.md` / `AGENTS.md` is loaded into **every** session. Keep it to commands, non-obvious conventions, gotchas and rules. Leave out things the agent can discover, generic advice, and **never** secrets.
