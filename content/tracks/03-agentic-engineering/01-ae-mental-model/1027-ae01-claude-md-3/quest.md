---
slug: "ae01-claude-md-3"
title: "Agent Drill: Does it belong in the context file? #3"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"Should this line go in the project's `CLAUDE.md`?\n\n> Run a single test file with: npm test -- src/products/product.test.ts","options":["No: it's generic or discoverable, and wastes context in every session","No: never put secrets in a context file","Yes: a concrete command, convention or rule the agent can't easily infer","Yes: more context is always better"],"answer":2},{"prompt":"Should this line go in the project's `CLAUDE.md`?\n\n> DATABASE_URL=postgres://admin:hunter2@prod-db/products","options":["No: it's generic or discoverable, and wastes context in every session","No: never put secrets in a context file","Yes: a concrete command, convention or rule the agent can't easily infer","Yes: more context is always better"],"answer":1},{"prompt":"Should this line go in the project's `CLAUDE.md`?\n\n> The full content of the README, pasted in","options":["No: never put secrets in a context file","No: it's generic or discoverable, and wastes context in every session","Yes: a concrete command, convention or rule the agent can't easily infer","Yes: more context is always better"],"answer":1},{"prompt":"Should this line go in the project's `CLAUDE.md`?\n\n> Run a single test file with: npm test -- src/flights/flight.test.ts","options":["Yes: a concrete command, convention or rule the agent can't easily infer","No: it's generic or discoverable, and wastes context in every session","No: never put secrets in a context file","Yes: more context is always better"],"answer":0},{"prompt":"Should this line go in the project's `CLAUDE.md`?\n\n> Run a single test file with: npm test -- src/hotels/hotel.test.ts","options":["No: it's generic or discoverable, and wastes context in every session","No: never put secrets in a context file","Yes: more context is always better","Yes: a concrete command, convention or rule the agent can't easily infer"],"answer":3}]
---
# Agent Drill: Does it belong in the context file? #3

A `CLAUDE.md` / `AGENTS.md` is loaded into **every** session. Keep it to commands, non-obvious conventions, gotchas and rules. Leave out things the agent can discover, generic advice, and **never** secrets.
