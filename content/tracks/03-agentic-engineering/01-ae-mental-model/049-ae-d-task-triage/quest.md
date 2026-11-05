---
slug: "ae-d-task-triage"
title: "Write-Up: Triage Tasks for Delegation"
type: "design"
xp: 40
rubric: ["Gives a decision, mode and verification for every task", "Delegates mechanical, well-verified tasks (like the rename)", "Keeps judgment-heavy decisions (like an architecture choice) with the human, using the agent only as a research aid", "Uses plan mode and extra review for security-sensitive work (rate limiting)", "Names concrete verification (tests, type-check, a reproduction loop, comparing metrics)", "Explains the reasoning, not just the labels"]
minWords: 150
---
# Write-Up: Triage Tasks for Delegation

Not every task should go to an agent, and the ones that do need different amounts of supervision. Below is a sprint's backlog. For **each** task, decide:

- **Delegate**, **pair** (you and the agent together, step by step), or **do it yourself**.
- The **mode** (ask, plan, act with approvals, autonomous).
- **How you'll verify it.**
- One sentence on **why**.

Tasks:
1. Rename `getUserData` to `fetchUserProfile` across 40 files.
2. Add rate limiting to the login endpoint.
3. Decide whether to move from REST to tRPC.
4. Fix a flaky test that fails 1 in 20 runs on CI.
5. Write the onboarding page copy for new users.
6. Upgrade the app from Express 4 to Express 5.
7. Investigate why the production bill doubled last month.
