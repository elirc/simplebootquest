---
slug: "ae-q-flaky-debugging"
title: "Debugging Flaky Tests with an Agent"
type: "quiz"
xp: 15
questions: [{"prompt": "How do you know a flaky test is fixed?", "options": ["It passed once", "Many repeated runs (e.g. 100) show zero failures", "The agent says so"], "answer": 1}, {"prompt": "A test fails only when run with the whole suite. What is a likely cause?", "options": ["A slow CPU", "Shared state left behind by other tests", "Syntax errors"], "answer": 1}, {"prompt": "A test asserts the order of rows from `SELECT * FROM todos`. Why might it flake?", "options": ["SQL is random", "Without ORDER BY, row order is not guaranteed", "Tests cannot use SQL"], "answer": 1}, {"prompt": "Which \"fix\" only hides the problem?", "options": ["Injecting a fake clock", "Adding automatic retries or a longer sleep", "Awaiting the promise"], "answer": 1}, {"prompt": "A test fails around midnight UTC on CI. What should you suspect?", "options": ["The network", "Date and time-zone assumptions", "npm caching"], "answer": 1}]
---
# Debugging Flaky Tests with an Agent

A test that fails 1 time in 20 can't be fixed by running it once. Agents tend to declare "fixed!" after a single green run, so make **repetition** part of the definition of done.

Workflow:
1. **Measure the flake rate**: run the test 50–100 times in a loop (`for i in $(seq 50); do npx vitest run cart.test.ts || echo FAIL; done`) and count the failures.
2. **Look for the usual suspects**:
   - **Time**: `Date.now()`, time zones, midnight, month boundaries.
   - **Randomness**: random ids, ordering of `Object.keys`, or unsorted database results without `ORDER BY`.
   - **Shared state**: a database or module state left over by other tests (does it fail only when run with the full suite?).
   - **Async**: missing `await`, a fixed `sleep(100)` instead of waiting for a condition, or a race between handlers.
   - **The environment**: CI runs slower, in parallel, and in a different time zone.
3. **Fix the cause** (inject the clock, add `ORDER BY`, isolate state, await properly), not the symptom (retries or longer sleeps).
4. **Prove it**: the same loop shows **0 failures in 100 runs**.
