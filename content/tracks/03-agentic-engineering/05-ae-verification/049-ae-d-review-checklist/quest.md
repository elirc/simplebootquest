---
slug: "ae-d-review-checklist"
title: "Write-Up: Your AI Code Review Checklist"
type: "design"
xp: 40
rubric: ["Starts with scope (does the diff match the task, are there unrelated changes)", "Includes concrete correctness checks (edge cases, error paths)", "Includes stack-specific security checks (authorization, injection, mass assignment, secrets)", "Checks test quality (could the tests fail, skipped or weakened tests)", "Checks new dependencies and fit with existing patterns", "Includes hands-on verification (running the app or the tests yourself)", "Defines when to discard and retry rather than patch"]
minWords: 150
---
# Write-Up: Your AI Code Review Checklist

Write the **review checklist** you'll use for every agent-produced change in your capstone (and that you could share with your team). It should be short enough to actually use, and specific enough to catch real problems.

### Include
1. **Before reading the code**: what to check about scope and the overall diff.
2. **Correctness**: logic, edge cases, error handling.
3. **Security**: the specific checks for your stack.
4. **Tests**: how you judge whether they really test anything.
5. **Maintainability**: fit with existing patterns, naming, dependencies.
6. **Verification you do yourself**: what you run or click.
7. **When to reject or restart** instead of fixing it up.
