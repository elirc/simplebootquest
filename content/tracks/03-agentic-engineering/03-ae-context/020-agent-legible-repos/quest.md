---
slug: "ae-agent-legible-repos"
title: "Making Your Repo Agent-Friendly"
type: "quiz"
xp: 15
questions: [{"prompt": "Why does a fast, documented test command matter so much for agents?", "options": ["It looks professional", "Agents verify their work by running it, and slow or unclear tests mean less verification", "It doesn't matter"], "answer": 1}, {"prompt": "How do TypeScript types help when working with agents?", "options": ["They don't", "The compiler immediately flags hallucinated properties and wrong signatures", "They make code longer"], "answer": 1}, {"prompt": "A repo has five different styles for API routes. What will an agent likely produce?", "options": ["The best of the five", "An inconsistent sixth variation", "No code"], "answer": 1}, {"prompt": "Which error message helps an agent most?", "options": ["\"Something went wrong\"", "\"ValidationError: title is required (src/routes/todos.ts:42)\"", "\"Error\""], "answer": 1}, {"prompt": "Most practices that help agents also…", "options": ["Hurt humans", "Help human developers too", "Slow down CI"], "answer": 1}]
---
# Making Your Repo Agent-Friendly

Good news: what helps agents is mostly what helps humans. An agent-friendly repo has:

- **One-command setup and checks**: `npm install`, `npm test`, `npm run typecheck`. Agents verify their work by running these, and if they're slow, flaky or undocumented, verification gets skipped.
- **Fast, focused tests**: a way to run one file or one test. A 20-minute suite discourages checking after each change.
- **Types**: TypeScript types are documentation that the compiler enforces. `tsc` catches hallucinated properties instantly.
- **Clear error messages**: "Expected 3 to be 4 in tests/foo.test.ts:12" lets an agent fix the problem; "Error: failed" doesn't.
- **Consistent patterns**: if every route follows the same structure, the agent copies it. Five different styles produce a sixth.
- **Small modules with clear names**: easier to find (by search) and to read within context limits.
- **Seed data and a runnable dev environment**, so the agent can actually exercise the app.

This codebase is an example: a validator that proves every quest is correct, typed API contracts shared between client and server, and `createApp()` injectable for tests. All of these make agent changes **checkable**.
