---
slug: "ae-q-reading-test-output"
title: "Reading Test Results Critically"
type: "quiz"
xp: 15
questions: [{"prompt": "The agent reports \"5 tests passed\" but the project has 300. What is likely?", "options": ["Tests were deleted for speed", "Only a filtered subset ran (a pattern, .only, or a wrong path)", "All is fine"], "answer": 1}, {"prompt": "What should you search the diff for after an agent \"fixes\" failing tests?", "options": ["Comments", ".skip, .only, weakened assertions, and changed expected values", "Whitespace"], "answer": 1}, {"prompt": "How can you check that a test really protects a behaviour?", "options": ["Trust it", "Break the code deliberately and confirm the test fails", "Run it twice"], "answer": 1}, {"prompt": "Why look at warnings in test output?", "options": ["They are always noise", "They often reveal real issues such as unhandled rejections or state updates after unmount", "They slow tests"], "answer": 1}, {"prompt": "An updated test now expects the new output, which is wrong according to the spec. What happened?", "options": ["The spec changed", "The test was changed to match buggy behaviour instead of the code being fixed", "Nothing"], "answer": 1}]
---
# Reading Test Results Critically

"All tests pass ✅" from an agent deserves a second look. Things to check:

- **Did the right tests run?** "3 tests passed" when the suite has 400 means a filter was left on, or files weren't picked up.
- **Skipped tests**: `.skip`, `.only` or `xit` added "temporarily". Search the diff for them.
- **Modified tests**: did the agent change an assertion to match the new (buggy) behaviour? Diff the **test files** as carefully as the source.
- **Weakened assertions**: `toEqual(expected)` became `toBeDefined()`, or a `try/catch` swallows the failure.
- **Mocks that hide the change**: the code under test is mocked away, so the test passes no matter what.
- **Warnings** in the output (unhandled promise rejections, `act()` warnings, deprecations) often point at real problems.
- **Run the suite yourself**, or check CI. Don't rely on a pasted summary.

A test suite is only evidence if it *could have failed*. When in doubt, break the code deliberately and confirm that a test goes red.
