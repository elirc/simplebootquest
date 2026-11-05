---
slug: "ae-reviewing-plans"
title: "Reviewing an Agent's Plan"
type: "quiz"
xp: 15
questions: [{"prompt": "The plan adds a new state-management library for a small form. Your feedback?", "options": ["Approve it", "Ask for the smallest change using existing patterns, with no new dependency unless it's justified", "Ignore it"], "answer": 1}, {"prompt": "Which plan omission is most concerning?", "options": ["No emojis", "A schema change with no mention of migrating existing data", "Short step names"], "answer": 1}, {"prompt": "A good plan presents uncertainties how?", "options": ["It hides them", "It flags them explicitly, so you can decide", "It guesses silently"], "answer": 1}, {"prompt": "Why should each plan step leave the code working?", "options": ["Style", "So you can verify and commit incrementally, and stop or revert at any point", "Agents require it"], "answer": 1}, {"prompt": "How should you give feedback on a flawed plan?", "options": ["\"Try again\"", "Specific corrections (\"extend X instead of creating Y\"), then ask for a revised plan", "Approve it and fix it later"], "answer": 1}]
---
# Reviewing an Agent's Plan

A plan review takes two minutes and saves hours. Check:

- **Did it understand the goal?** Restated correctly, including the *why*?
- **Right files, right layer?** Business logic in services, not route handlers. Uses the existing helper instead of writing a new one.
- **Smallest reasonable change?** Watch for unnecessary refactors, new abstractions, or new dependencies.
- **Data and migrations**: is there a schema change? Is it backwards compatible? What about existing data?
- **Tests**: which tests will prove it works? Are unhappy paths and permissions covered?
- **Risks and unknowns**: did it flag uncertainties, or present everything as certain?
- **Order of steps**: does each step leave the code in a working state?

If something's off, **say so specifically** ("Don't add a new service; extend `RecipeService.update`"), and ask for a revised plan before any code is written.
