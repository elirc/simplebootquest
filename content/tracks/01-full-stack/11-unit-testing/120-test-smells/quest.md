---
slug: "ut-test-smells"
title: "Checkpoint: Test Smells"
type: "quiz"
xp: 15
questions: [{"prompt": "What is wrong with `expect(user).toBeTruthy()` after creating a user?", "options": ["Nothing", "It passes for almost any object, even a wrong one", "It is too slow"], "answer": 1}, {"prompt": "Your tests pass against a version of the code with a deliberate bug in it. What does that tell you?", "options": ["The bug is harmless", "Your tests are missing a case that exercises that behaviour", "Mutation testing is broken"], "answer": 1}, {"prompt": "Why should each test create its own fresh instance (e.g. with beforeEach)?", "options": ["It is faster", "Shared state makes tests depend on order and become flaky", "It is required syntax"], "answer": 1}, {"prompt": "A test configures a mock to return 5 and asserts it returns 5. What is it testing?", "options": ["The business logic", "Only the mocking library", "Performance"], "answer": 1}, {"prompt": "Which assertion is strongest for a function returning `{ id: 1, tags: [\"js\"] }`?", "options": ["toBeDefined()", "toEqual({ id: 1, tags: [\"js\"] })", "toBeTruthy()"], "answer": 1}]
---
# Checkpoint: Test Smells

A **test smell** is a sign that a test is weak, brittle or misleading:

| Smell | Example | Problem |
|-------|---------|---------|
| Assertion-free | `test('works', () => { add(1, 2); })` | Can never fail |
| Too-weak assertion | `expect(result).toBeTruthy()` | Passes for many wrong answers |
| Testing the mock | `mock.mockReturnValue(5); expect(mock()).toBe(5)` | Tests the test framework, not your code |
| Implementation details | Asserting on private fields or internal call order | Breaks on harmless refactors |
| Shared mutable state | One object reused and modified across tests | Order-dependent, flaky |
| Real time / randomness | `new Date()` inside the code under test | Flaky, can't test edge dates |
| Mystery guest | Depends on a fixture file far away | Hard to understand why it fails |

You've been fixing these all chapter: mutation testing exposes most of them automatically, because a smelly test can't catch bugs.

Answer every question correctly to earn the XP.
