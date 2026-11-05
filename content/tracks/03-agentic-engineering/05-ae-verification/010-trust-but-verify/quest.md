---
slug: "ae-trust-but-verify"
title: "Trust, but Verify"
type: "quiz"
xp: 15
questions: [{"prompt": "The agent says \"all tests pass\". What is that?", "options": ["Proof", "A claim to check against actual test output or CI", "Irrelevant"], "answer": 1}, {"prompt": "Test output says \"0 tests ran, 0 failed\". Is that a pass?", "options": ["Yes", "No: nothing was verified; check the test filter/config", "Partially"], "answer": 1}, {"prompt": "Which verification is most important for a change to permission checks?", "options": ["Reading the summary", "All levels: diff review, tests including unauthorised cases, manual testing, plus a second reviewer", "Lint only"], "answer": 1}, {"prompt": "Why actually run the app even when tests pass?", "options": ["Tests are always wrong", "Tests cover what someone thought to test; using the feature catches integration and UX issues they miss", "It is faster"], "answer": 1}, {"prompt": "How much verification should a change get?", "options": ["The same for everything", "Proportional to its risk and blast radius", "None if the agent is confident"], "answer": 1}]
---
# Trust, but Verify

An agent's summary ("Implemented the feature, all tests pass ✅") is a **claim**, not evidence. Verification means checking it against reality:

| Claim | Evidence |
|-------|----------|
| "Tests pass" | You see the test output, or CI is green, and the tests actually ran (not 0 tests) |
| "It works" | You ran the app and used the feature, including the unhappy paths |
| "No breaking changes" | The typecheck passes across the monorepo; dependents' tests pass |
| "Follows our patterns" | The diff looks like the neighbouring code |
| "Handled the edge cases" | There are tests for empty input, invalid input, unauthorised users |

Levels of verification, from cheapest to most thorough:

1. Read the diff.
2. Typecheck and lint.
3. Run the relevant tests, then the full suite.
4. Run the app and click through the feature (or use a browser-automation tool).
5. For risky changes: a second reviewer (a human, or a fresh agent session focused only on review).

Match the effort to the risk: a docs typo needs level 1, and an auth change needs all five.
