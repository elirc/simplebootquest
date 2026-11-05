---
slug: "ae-breaking-loops"
title: "Breaking Flailing Loops"
type: "quiz"
xp: 15
questions: [{"prompt": "Which is a sign of flailing?", "options": ["Writing a failing test first", "Repeated near-identical attempts and reverting its own changes", "Reading the docs"], "answer": 1}, {"prompt": "Why can a fresh session help after many failed attempts?", "options": ["It's faster", "The old context is full of failed ideas that bias the next attempts", "Sessions expire"], "answer": 1}, {"prompt": "What should you ask for instead of \"try again\"?", "options": ["A bigger change", "Hypotheses about root causes, each with a cheap experiment to test it", "More try/catch blocks"], "answer": 1}, {"prompt": "An agent fixes a type error by casting to `any`. This is…", "options": ["A proper fix", "Hiding the problem: a sign of flailing", "Best practice"], "answer": 1}, {"prompt": "A useful rule of thumb:", "options": ["Never stop", "After two failed attempts at the same thing, change strategy", "Always try ten times"], "answer": 1}]
---
# Breaking Flailing Loops

Signs an agent is **flailing**:

- Each attempt is a variation of the last, with no new information.
- It's reverting its own changes and re-applying them.
- Its explanations are vague ("there might be an issue with…").
- It's widening the change: adding try/catches, casts to `any`, or disabling checks.
- The context is filling up with failed attempts, which biases the next ones.

### What to do

1. **Stop.** More attempts in the same polluted context rarely help.
2. **Reset**: `git restore` to the last good state, and consider a **fresh session**.
3. **Gather evidence**: add logging, write a minimal reproduction, read the library source or docs, check versions.
4. **Ask for hypotheses, not fixes**: "List three possible root causes, and for each one a cheap experiment that would confirm or rule it out."
5. **Shrink the problem**: reproduce it in a tiny script, outside the app.
6. **Bring a human brain**: sometimes the fastest move is reading the code yourself for 10 minutes.

A good rule: **two failed attempts at the same thing means it's time to change strategy**, not to try a third variation.
