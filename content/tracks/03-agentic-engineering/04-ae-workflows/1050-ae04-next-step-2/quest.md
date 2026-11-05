---
slug: "ae04-next-step-2"
title: "Agent Drill: The next debugging step #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"**Situation:** the bug only happens in production. What's the best next step?","options":["Add targeted logging or metrics to capture the failing input","Ask the agent for ranked hypotheses, each with a way to confirm it","Ask it to reproduce the failure first and show the output","Get a reproduction: exact steps, error message, browser, time"],"answer":0},{"prompt":"**Situation:** a user reports \"the transactions page is broken\" and nothing else. What's the best next step?","options":["Write a failing regression test, then fix the code","Get a reproduction: exact steps, error message, browser, time","Ask it to reproduce the failure first and show the output","Ask the agent for ranked hypotheses, each with a way to confirm it"],"answer":1},{"prompt":"**Situation:** a user reports \"the students page is broken\" and nothing else. What's the best next step?","options":["Get a reproduction: exact steps, error message, browser, time","Ask the agent for ranked hypotheses, each with a way to confirm it","Write a failing regression test, then fix the code","Ask it to reproduce the failure first and show the output"],"answer":0},{"prompt":"**Situation:** the fix is in, and the reproduction test passes. What's the best next step?","options":["Ask it to reproduce the failure first and show the output","Ask the agent for ranked hypotheses, each with a way to confirm it","Get a reproduction: exact steps, error message, browser, time","Run the full suite and remove temporary logging before committing"],"answer":3},{"prompt":"**Situation:** a hypothesis is confirmed by a log line showing `name` is null. What's the best next step?","options":["Get a reproduction: exact steps, error message, browser, time","Write a failing regression test, then fix the code","Ask the agent for ranked hypotheses, each with a way to confirm it","Ask it to reproduce the failure first and show the output"],"answer":1}]
---
# Agent Drill: The next debugging step #2

Debugging with an agent works best as a loop: **reproduce → gather evidence → hypothesise → test the hypothesis → fix → verify with the reproduction**. Don't let it skip straight to a fix.
