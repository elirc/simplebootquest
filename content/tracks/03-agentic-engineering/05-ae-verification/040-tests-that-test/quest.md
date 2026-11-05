---
slug: "ae-tests-that-test"
title: "Tests That Actually Test"
type: "quiz"
xp: 15
resources: [{"title": "Stryker mutation testing (JS)", "url": "https://stryker-mutator.io/"}]
questions: [{"prompt": "Why is `expect(result).toBeDefined()` usually a weak assertion?", "options": ["It is slow", "It passes for almost any value, so it barely tests behaviour", "It is deprecated"], "answer": 1}, {"prompt": "What is a quick \"mutation check\"?", "options": ["Changing test names", "Deliberately breaking the implementation and confirming the tests fail", "Running tests twice"], "answer": 1}, {"prompt": "A PR \"fixes a bug\" by changing a test's expected value from 404 to 200. What should you do?", "options": ["Merge it", "Investigate: it may be encoding the bug into the test", "Delete the test"], "answer": 1}, {"prompt": "Which test is meaningful?", "options": ["A mock is configured to return 5, then asserted to return 5", "Create user B, request user A's todo as B, assert a 404", "expect(true).toBe(true)"], "answer": 1}, {"prompt": "Tests that pass before the feature is implemented…", "options": ["Are ideal", "Are not testing the new behaviour", "Prove it works"], "answer": 1}]
---
# Tests That Actually Test

Agents are under pressure to "make tests pass", and some ways of doing that defeat the purpose:

- `expect(result).toBeDefined()`: passes for almost anything.
- Asserting on **mocks you just configured**: `mock.returns(5); expect(mock()).toBe(5)` tests nothing.
- Updating snapshots or expected values to match buggy output.
- `test.skip`, `it.only` left in, or `try/catch` that swallows the failure.
- Tests that pass **before** the feature exists.
- Only the happy path: no invalid input, no permissions, no empty state.

### How to check

- **Mutation check**: temporarily break the implementation (flip a condition, return early). If the tests still pass, they aren't testing it. This curriculum's validator does exactly this on every quest: every starter must *fail* its tests.
- **Read the assertions, not just the test names.** "returns 404 for other users' todos" should actually create a second user and assert a 404.
- **Watch the diff for test changes** in a PR that was supposedly about implementation.

Good tests assert **observable behaviour** with specific expected values.
