---
slug: "ae-task-anatomy"
title: "Anatomy of a Good Task"
type: "quiz"
xp: 15
resources: [{"title": "Claude Code: Best practices", "url": "https://www.anthropic.com/engineering/claude-code-best-practices"}]
questions: [{"prompt": "Which part of a task most directly prevents \"it's done, but not what I wanted\"?", "options": ["A friendly tone", "Testable acceptance criteria", "Mentioning the deadline"], "answer": 1}, {"prompt": "Why point the agent to an existing similar feature?", "options": ["To slow it down", "So it follows established patterns instead of inventing a new style", "It is not useful"], "answer": 1}, {"prompt": "What does an \"out of scope\" line do?", "options": ["Nothing", "Limits scope creep by saying what not to touch", "Makes the task bigger"], "answer": 1}, {"prompt": "A good test for whether your task description is clear enough:", "options": ["It is long", "A new teammate could execute it without asking questions", "It uses technical words"], "answer": 1}, {"prompt": "\"No new dependencies\" is an example of a…", "options": ["Goal", "Constraint", "Acceptance criterion"], "answer": 1}]
---
# Anatomy of a Good Task

Compare:

> ❌ "Add search to the app."

> ✅ "Add search to the recipes list page.
> **Goal:** users can filter their own recipes by title as they type.
> **Context:** the list is `apps/web/src/pages/Recipes.tsx`; the API route is `GET /api/recipes` in `apps/api/src/routes/recipes.ts`. Follow the existing filter pattern used for `tag`.
> **Constraints:** server-side filtering with Prisma `contains` + `mode: 'insensitive'`; debounce input by 300ms; no new dependencies.
> **Acceptance criteria:** `?q=` filters by title case-insensitively; empty `q` returns everything; a Supertest test covers both; the UI keeps `q` in the URL.
> **Out of scope:** full-text search, searching ingredients."

The parts:

1. **Goal**: the outcome and *why*, not just the action.
2. **Context**: where the relevant code lives and which patterns to follow.
3. **Constraints**: technical decisions already made, and things not to do.
4. **Acceptance criteria**: how *you* (and the agent) will know it's done. Ideally they're testable.
5. **Out of scope**: prevents scope creep.

A good task is one you could hand to a new teammate. If they'd have to ask questions, so will the agent, or worse, it will guess.
