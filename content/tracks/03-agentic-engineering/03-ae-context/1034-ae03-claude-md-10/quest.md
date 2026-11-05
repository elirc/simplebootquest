---
slug: "ae03-claude-md-10"
title: "Agent Drill: Does it belong in the context file? #10"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"Should this line go in the project's `CLAUDE.md`?\n\n> All cars queries must be scoped by userId","options":["Yes: more context is always better","Yes: a concrete command, convention or rule the agent can't easily infer","No: never put secrets in a context file","No: it's generic or discoverable, and wastes context in every session"],"answer":1},{"prompt":"Should this line go in the project's `CLAUDE.md`?\n\n> All movies queries must be scoped by userId","options":["Yes: more context is always better","No: never put secrets in a context file","No: it's generic or discoverable, and wastes context in every session","Yes: a concrete command, convention or rule the agent can't easily infer"],"answer":3},{"prompt":"Should this line go in the project's `CLAUDE.md`?\n\n> Run a single test file with: npm test -- src/employees/employee.test.ts","options":["No: never put secrets in a context file","Yes: a concrete command, convention or rule the agent can't easily infer","No: it's generic or discoverable, and wastes context in every session","Yes: more context is always better"],"answer":1},{"prompt":"Should this line go in the project's `CLAUDE.md`?\n\n> All plants queries must be scoped by userId","options":["No: it's generic or discoverable, and wastes context in every session","No: never put secrets in a context file","Yes: a concrete command, convention or rule the agent can't easily infer","Yes: more context is always better"],"answer":2},{"prompt":"Should this line go in the project's `CLAUDE.md`?\n\n> Run a single test file with: npm test -- src/orders/order.test.ts","options":["No: never put secrets in a context file","Yes: a concrete command, convention or rule the agent can't easily infer","No: it's generic or discoverable, and wastes context in every session","Yes: more context is always better"],"answer":1}]
---
# Agent Drill: Does it belong in the context file? #10

A `CLAUDE.md` / `AGENTS.md` is loaded into **every** session. Keep it to commands, non-obvious conventions, gotchas and rules. Leave out things the agent can discover, generic advice, and **never** secrets.
