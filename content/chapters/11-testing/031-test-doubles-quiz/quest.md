---
slug: "testing-doubles-quiz"
title: "Checkpoint: Test Doubles"
type: "quiz"
xp: 15
questions: [{"prompt": "An in-memory repository used instead of Postgres in service tests is a…", "options": ["Stub", "Spy", "Fake"], "answer": 2}, {"prompt": "You want to assert that sendEmail was called with the right address. You need a…", "options": ["Spy", "Fake", "Dummy"], "answer": 0}, {"prompt": "What is the risk of mocking every collaborator?", "options": ["Tests get slower", "Tests pass while the real integration is broken, and refactoring breaks tests", "Nothing"], "answer": 1}, {"prompt": "A test fails one run in 20. What should you suspect first?", "options": ["The CPU", "Shared state, real time/timers, randomness, or test order", "The test framework"], "answer": 1}, {"prompt": "Which is the best name for a test?", "options": ["'test 3'", "'works'", "'returns 404 when the todo belongs to another user'"], "answer": 2}]
---
# Checkpoint: Test Doubles

"Mock" gets used for everything, but there are distinct kinds of **test doubles**:

| Double | What it is | Example |
|--------|-----------|---------|
| **Stub** | Returns canned answers | `getUser: async () => ({ id: 1 })` |
| **Spy** | Records how it was called | `vi.fn()`, then `expect(spy).toHaveBeenCalledWith(...)` |
| **Fake** | A working, lightweight implementation | an in-memory repository instead of Postgres |
| **Mock** | Pre-programmed with expectations that are verified | strict mocks that fail on unexpected calls |

Fakes often give the most realistic tests for the least effort. You've written several in this course!

Answer every question correctly to earn the XP.
