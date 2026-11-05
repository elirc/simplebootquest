---
slug: "ae03-claude-md-1"
title: "Agent Drill: Does it belong in the context file? #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"Should this line go in the project's `CLAUDE.md`?\n\n> Integration tests need TEST_DATABASE_URL and a running Postgres","options":["Yes: a concrete command, convention or rule the agent can't easily infer","No: never put secrets in a context file","Yes: more context is always better","No: it's generic or discoverable, and wastes context in every session"],"answer":0},{"prompt":"Should this line go in the project's `CLAUDE.md`?\n\n> A list of every file in src/songs/","options":["Yes: a concrete command, convention or rule the agent can't easily infer","No: it's generic or discoverable, and wastes context in every session","Yes: more context is always better","No: never put secrets in a context file"],"answer":1},{"prompt":"Should this line go in the project's `CLAUDE.md`?\n\n> Run a single test file with: npm test -- src/books/book.test.ts","options":["Yes: more context is always better","No: it's generic or discoverable, and wastes context in every session","Yes: a concrete command, convention or rule the agent can't easily infer","No: never put secrets in a context file"],"answer":2},{"prompt":"Should this line go in the project's `CLAUDE.md`?\n\n> Ask before adding a new dependency","options":["Yes: more context is always better","No: never put secrets in a context file","Yes: a concrete command, convention or rule the agent can't easily infer","No: it's generic or discoverable, and wastes context in every session"],"answer":2},{"prompt":"Should this line go in the project's `CLAUDE.md`?\n\n> Never edit files in src/generated/ (run npm run db:generate instead)","options":["No: never put secrets in a context file","Yes: more context is always better","No: it's generic or discoverable, and wastes context in every session","Yes: a concrete command, convention or rule the agent can't easily infer"],"answer":3}]
---
# Agent Drill: Does it belong in the context file? #1

A `CLAUDE.md` / `AGENTS.md` is loaded into **every** session. Keep it to commands, non-obvious conventions, gotchas and rules. Leave out things the agent can discover, generic advice, and **never** secrets.
