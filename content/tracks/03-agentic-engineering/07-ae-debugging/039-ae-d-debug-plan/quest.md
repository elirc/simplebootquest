---
slug: "ae-d-debug-plan"
title: "Write-Up: A Debugging Session Plan"
type: "design"
xp: 40
rubric: ["Gathers concrete evidence first (logs with request ids, affected user agents, timing)", "Lists several ranked hypotheses tied to the deploy changes", "Gives each hypothesis a specific confirmation test", "Plans a reproduction before any fix", "Constrains the agent (no production changes, evidence before fixes)", "Verifies with the reproduction and adds a regression test or monitoring"]
minWords: 150
---
# Write-Up: A Debugging Session Plan

Here's a bug report from production:

> "Since Monday, some users get **'Invalid session'** and are logged out a few minutes after logging in. It doesn't happen to everyone. It happens more on mobile. Monday's deploy included: an Express 5 upgrade, a new `SameSite` cookie setting, and moving the API behind a new load balancer."

Write the plan you'd follow with a coding agent to find and fix the cause. You don't need to know the answer. The **process** is what matters.

### Include
1. **Initial evidence** you'd gather, and what you'd give the agent.
2. **Hypotheses**, ranked, each with a way to confirm or rule it out.
3. **How to reproduce** it (locally or in staging).
4. **Your instructions to the agent**, step by step, including what it may and may not do.
5. **How you'll verify the fix**, and prevent regressions.
