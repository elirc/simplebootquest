---
slug: "ae-ci-and-bots"
title: "Agents in CI & Review Bots"
type: "quiz"
xp: 15
questions: [{"prompt": "How should you treat AI review-bot comments?", "options": ["As binding verdicts", "As suggestions to weigh: they can be false positives", "Ignore them all"], "answer": 1}, {"prompt": "A fix-it agent makes CI green by marking a failing test as skipped. Acceptable?", "options": ["Yes, CI is green", "No: never skip or disable tests to reach green", "Only on Fridays"], "answer": 1}, {"prompt": "Who should merge PRs created by automation?", "options": ["The bot itself, always", "A human reviewer", "Nobody"], "answer": 1}, {"prompt": "Which task is a good first candidate for an issue-to-PR agent?", "options": ["Redesigning the auth system", "A well-specified small change, like updating a dependency with good test coverage", "A production data migration"], "answer": 1}, {"prompt": "What permissions should a CI agent have?", "options": ["Org admin", "Least privilege: scoped token, no production secrets, protected branches", "Your personal credentials"], "answer": 1}]
---
# Agents in CI & Review Bots

Agents increasingly run **inside** your development pipeline:

- **Review bots** that comment on PRs (likely bugs, missing tests, security issues).
- **Fix-it agents** triggered by a CI failure or a review comment, which push a fix commit.
- **Issue-to-PR agents** that pick up small, well-specified issues.
- **Scheduled agents** for chores: dependency updates, flaky-test triage, doc refreshes.

### Making them useful, not noisy

- Treat AI review comments as **suggestions to weigh**, not verdicts. They produce false positives. Tune them, or drop them if the signal-to-noise ratio is poor.
- CI must stay the **source of truth**: agents must never skip, disable or quarantine tests to get to green.
- Keep a human in the loop for **merging**, so automation can propose but people decide.
- Give pipeline agents the same least-privilege treatment as any CI job: scoped tokens, no production secrets, and protected branches.
- Watch the **cost**: agents triggered on every push of every PR add up.

Well-specified, low-risk, repetitive work (dependency bumps with good tests, lint fixes, docs) is where pipeline agents shine first.
