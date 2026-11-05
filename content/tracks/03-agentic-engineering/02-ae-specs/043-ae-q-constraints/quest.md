---
slug: "ae-q-constraints"
title: "Constraints and Non-Goals"
type: "quiz"
xp: 15
questions: [{"prompt": "Why state \"no new dependencies\" explicitly?", "options": ["Agents never add packages", "Agents often add a package for convenience, which adds risk and maintenance", "npm requires it"], "answer": 1}, {"prompt": "What is a non-goal?", "options": ["A failed test", "Something explicitly out of scope for this task", "A goal for later today"], "answer": 1}, {"prompt": "The diff for \"add a due date field\" also reformats 30 unrelated files. Which constraint was missing?", "options": ["Use TypeScript", "Scope: only touch the relevant files, and no unrelated changes", "Write tests"], "answer": 1}, {"prompt": "Which constraint protects existing API clients?", "options": ["\"Use tabs\"", "\"Do not change existing response fields; only add new optional ones\"", "\"Make it fast\""], "answer": 1}, {"prompt": "Why point to an existing file as a pattern to follow?", "options": ["To save tokens only", "It shows the conventions concretely, so the new code fits in", "Agents cannot write new code"], "answer": 1}]
---
# Constraints and Non-Goals

Agents are eager. Ask for a date picker and you may also get a new dependency, a refactored form library and an updated build config. **Constraints** and **non-goals** keep the change the size you intended.

Useful constraints:
- **Tech**: "Use the existing `fetchJson` helper; no new npm dependencies."
- **Scope**: "Only touch `src/todos/**` and its tests."
- **Patterns**: "Follow the validation pattern in `src/users/routes.ts`."
- **Compatibility**: "The API response shape must not change; add fields only."
- **Process**: "Don't run migrations against the shared database. Generate the migration file only."

Useful **non-goals** (things explicitly *not* to do):
- "Don't redesign the UI; reuse the existing `Button` and `Field` components."
- "Don't fix unrelated lint warnings in this PR."
- "No pagination yet; that's a separate ticket."

Non-goals feel odd to write, but they prevent the commonest problem with agent diffs: **scope creep**.
