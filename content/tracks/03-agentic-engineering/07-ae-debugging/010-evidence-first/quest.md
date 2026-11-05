---
slug: "ae-evidence-first"
title: "Reproduce First, Then Give Evidence"
type: "quiz"
xp: 15
resources: [{"title": "git bisect", "url": "https://git-scm.com/docs/git-bisect"}]
questions: [{"prompt": "What is the best first step when handing an agent a bug?", "options": ["\"Fix it\"", "Give a reproduction, the exact error and recent changes, and ask for a diagnosis first", "Ask it to rewrite the module"], "answer": 1}, {"prompt": "Why ask for a failing test that reproduces the bug?", "options": ["It is tradition", "It proves the bug is understood, verifies the fix, and prevents regressions", "Tests are faster than code"], "answer": 1}, {"prompt": "Which detail is most useful?", "options": ["\"It crashes sometimes\"", "The full error message and stack trace", "\"It worked yesterday, probably\""], "answer": 1}, {"prompt": "A bug appeared after a deploy with 40 commits. Which tool narrows it down systematically?", "options": ["git blame on random files", "git bisect", "npm install"], "answer": 1}, {"prompt": "Why say \"diagnose before fixing\"?", "options": ["To slow the agent down", "To prevent guess-and-patch fixes that hide the real root cause", "Agents cannot fix bugs"], "answer": 1}]
---
# Reproduce First, Then Give Evidence

> ❌ "Login is broken, fix it."

> ✅ "Login returns 500 since this morning's deploy. Steps: POST /api/auth/login with a valid user. Server log: `TypeError: Cannot read properties of undefined (reading 'passwordHash') at auth.ts:47`. It works with a fresh user but not users created before the migration `20261104_add_display_name`. Find the root cause before changing anything."

What makes the second version work:

1. **A reproduction**: exact steps, and ideally a failing test or a command that shows the bug.
2. **The actual error**: the full message and stack trace, not "it crashes".
3. **What changed**: a deploy, a migration, a dependency update. `git log` and `git bisect` are gold.
4. **What you've already ruled out.**
5. **An instruction to diagnose before fixing.**

A great first step is often: *"Write a failing test that reproduces this bug."* If the agent can't reproduce it, it doesn't understand it yet, and any "fix" is a guess.
