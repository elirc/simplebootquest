---
slug: "ae-failure-modes"
title: "Characteristic Failure Modes"
type: "quiz"
xp: 15
questions: [{"prompt": "An agent reports \"fixed: tests pass\" and the diff modified the test's expected value to match the buggy output. This is…", "options": ["A correct fix", "Weakening the check instead of fixing the bug", "Scope creep"], "answer": 1}, {"prompt": "The agent uses `prisma.user.findById()`. Prisma has no such method. This is a…", "options": ["Hallucinated API", "Flailing loop", "Context overflow"], "answer": 0}, {"prompt": "You asked for a one-line bug fix and the diff renames 30 variables across 12 files. This is…", "options": ["Good initiative", "Scope creep that makes review harder and riskier", "Required"], "answer": 1}, {"prompt": "The agent has tried six different fixes, reverting each one. What is it doing?", "options": ["Making progress", "Flailing without a diagnosis", "Running tests"], "answer": 1}, {"prompt": "What is the general antidote to all of these failure modes?", "options": ["Never use agents", "Verification against evidence: read the diff, run the tests and the app, check the docs", "Longer prompts"], "answer": 1}]
---
# Characteristic Failure Modes

Agents fail in recognisable ways. Learn the patterns and you'll catch them quickly:

- **Hallucinated APIs**: calling a function or option that doesn't exist, or that belongs to a different version of a library. It looks perfectly plausible.
- **Overconfident claims**: "All tests pass ✅" when the tests weren't run, or were run and failed.
- **Weakening the check**: making a failing test pass by editing the test, adding `.skip`, catching and ignoring the error, or loosening a type to `any`.
- **Scope creep**: "while I was there" refactors, renames and new dependencies you didn't ask for.
- **Flailing loops**: trying fix after fix without understanding the root cause, often reverting and re-applying the same ideas.
- **Stale assumptions**: patterns copied from old training data (deprecated APIs, an old framework version).
- **Missing the unhappy path**: the happy path works, but errors, empty states, concurrency and security aren't handled.

None of these mean "don't use agents". They mean **verify**: read diffs, run the code, and check claims against evidence.
