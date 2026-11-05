---
slug: "ae-decomposition"
title: "Scoping & Decomposition"
type: "quiz"
xp: 15
questions: [{"prompt": "Which is the better slicing for a \"teams\" feature?", "options": ["All tables first, then all routes, then all UI", "A working end-to-end slice per capability (create org → invite → roles)", "One giant pull request"], "answer": 1}, {"prompt": "Why prefer small tasks for agents?", "options": ["Agents can't write big files", "Small diffs are easier to verify, review and revert, and errors surface sooner", "It costs more"], "answer": 1}, {"prompt": "A good first prompt for a large feature is…", "options": ["\"Build the whole thing\"", "\"Propose a step-by-step plan of small, testable changes; don't write code yet\"", "\"Surprise me\""], "answer": 1}, {"prompt": "Which task is right-sized?", "options": ["\"Rewrite the backend\"", "\"Add a soft-delete column to recipes, with a migration, repository filter and tests\"", "\"Improve the app\""], "answer": 1}, {"prompt": "A sign a task is too big:", "options": ["It has acceptance criteria", "The diff would be thousands of lines and touch everything", "It has tests"], "answer": 1}]
---
# Scoping & Decomposition

Agents (and humans) do best on **small, well-defined tasks**. "Build the teams feature" is a project, while "add the `memberships` table and migration" is a task.

### Slice vertically

Prefer slices that deliver something working end to end over horizontal layers:

- ✅ "Users can create an organisation (DB + API + minimal UI + test)", then "invite a member", then "roles".
- ❌ "Write all the database tables", then "all the API routes", then "all the UI". Nothing works until the end, and integration problems surface late.

### Size heuristic

A good agent task:

- fits in a reviewable diff (a few hundred lines at most),
- has its own acceptance criteria and tests,
- can be committed independently,
- doesn't need you to hold a dozen undocumented decisions in your head.

### Let the agent help you decompose

A great first prompt for a big feature: *"Read the relevant code and propose a plan that breaks this into small, independently testable steps. Don't write code yet."* Review the plan, adjust it, then execute it one step at a time.
