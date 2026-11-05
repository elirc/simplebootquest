---
slug: "ae-q-sizing"
title: "Sizing Work for an Agent"
type: "quiz"
xp: 15
questions: [{"prompt": "Which is a sign the task is too big for one agent run?", "options": ["It has a clear test", "You cannot describe \"done\" in a few testable bullets, and it spans many layers", "It touches one file"], "answer": 1}, {"prompt": "What should every step end with?", "options": ["A long summary", "A green state: tests pass, the app runs, and the step is committed", "An open question"], "answer": 1}, {"prompt": "Why do preparatory refactors as separate steps?", "options": ["To inflate the commit count", "Reviewing a pure refactor (no behaviour change) separately from new behaviour is much easier", "Agents cannot combine them"], "answer": 1}, {"prompt": "\"Vertical slice\" means…", "options": ["One layer at a time, everywhere", "A thin, complete path through every layer for one use case (e.g. create only)", "Splitting files vertically"], "answer": 1}, {"prompt": "Roughly how long should reviewing one agent change take?", "options": ["Several days", "An amount you can review carefully in one sitting (minutes to under an hour)", "No review needed"], "answer": 1}]
---
# Sizing Work for an Agent

How big should one agent task be? Big enough to be useful, small enough to **review properly** and **verify** in one go.

Signs a task is too big:
- The diff would touch many unrelated areas (API, database, UI, deploy config).
- You can't describe "done" in a few testable bullet points.
- It needs decisions you haven't made yet.
- Reviewing the result would take you longer than an hour.

How to split:
- **By layer**: migration and model → service and tests → route and validation → UI.
- **By slice**: one complete thin feature first (create only), then list, edit and delete.
- **Preparatory refactors first**: "extract the validation helper" as its own reviewed step, before "add the new field that uses it".

Each step should end in a **green state**: tests pass, the app runs, and it's committed. Then the next step starts from solid ground, and a bad step is easy to throw away.
