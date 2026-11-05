---
slug: "ae-q-large-migrations"
title: "Large Mechanical Migrations"
type: "quiz"
xp: 15
resources: [{"title": "jscodeshift", "url": "https://github.com/facebook/jscodeshift"}, {"title": "ts-morph", "url": "https://ts-morph.com/"}]
questions: [{"prompt": "What should you do before letting an agent migrate 300 files?", "options": ["Start with all of them at once", "Migrate a few representative files together, review them, and write down the recipe", "Skip the tests"], "answer": 1}, {"prompt": "Why consider a codemod for a rename-style migration?", "options": ["It looks impressive", "It applies the exact same transformation everywhere, deterministically", "Agents cannot rename"], "answer": 1}, {"prompt": "How should the work be committed?", "options": ["One giant commit at the end", "In verified batches, each type-checked, tested and committed", "Not at all"], "answer": 1}, {"prompt": "What final check catches stragglers?", "options": ["A summary from the agent", "Searching (grep) for remaining old imports or usages, plus the full test suite", "Restarting the laptop"], "answer": 1}, {"prompt": "Why keep a tracking checklist file?", "options": ["Bureaucracy", "Progress and remaining work survive across sessions and agents", "Git needs it"], "answer": 1}]
---
# Large Mechanical Migrations

"Migrate 300 files from `moment` to `date-fns`", "convert class components to hooks", "rename an API field everywhere". Agents can do these, if you set up the work properly:

1. **Write the recipe once.** Migrate 2–3 representative files *together* with the agent, review them carefully, and write down the transformation rules and edge cases. That becomes the spec.
2. **Prefer deterministic tools where possible.** A **codemod** (jscodeshift, ts-morph) or the IDE's rename is exact and repeatable. Agents are great at *writing* the codemod and at handling the leftovers it can't.
3. **Batch the work**: by directory or by 20 files, each batch type-checked, tested and committed.
4. **Parallelise carefully**: independent batches can go to parallel agents or subagents with the same recipe, each in its own worktree or branch.
5. **Verify globally at the end**: `tsc`, the full test suite, `grep` for leftover old usages, and a bundle size or runtime smoke test.
6. **Keep a tracking list** (a checklist file), so progress survives across sessions.
