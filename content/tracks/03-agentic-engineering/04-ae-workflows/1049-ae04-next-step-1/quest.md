---
slug: "ae04-next-step-1"
title: "Agent Drill: The next debugging step #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"**Situation:** the agent proposes a fix without having run anything. What's the best next step?","options":["Write a failing regression test, then fix the code","Ask it to reproduce the failure first and show the output","Get a reproduction: exact steps, error message, browser, time","Ask the agent for ranked hypotheses, each with a way to confirm it"],"answer":1},{"prompt":"**Situation:** you can reproduce the error with `npm test -- courses`. What's the best next step?","options":["Ask the agent for ranked hypotheses, each with a way to confirm it","Ask it to reproduce the failure first and show the output","Get a reproduction: exact steps, error message, browser, time","Write a failing regression test, then fix the code"],"answer":0},{"prompt":"**Situation:** a hypothesis is confirmed by a log line showing `number` is null. What's the best next step?","options":["Get a reproduction: exact steps, error message, browser, time","Write a failing regression test, then fix the code","Ask the agent for ranked hypotheses, each with a way to confirm it","Ask it to reproduce the failure first and show the output"],"answer":1},{"prompt":"**Situation:** you can reproduce the error with `npm test -- workouts`. What's the best next step?","options":["Ask the agent for ranked hypotheses, each with a way to confirm it","Ask it to reproduce the failure first and show the output","Get a reproduction: exact steps, error message, browser, time","Write a failing regression test, then fix the code"],"answer":0},{"prompt":"**Situation:** a user reports \"the hotels page is broken\" and nothing else. What's the best next step?","options":["Write a failing regression test, then fix the code","Ask it to reproduce the failure first and show the output","Ask the agent for ranked hypotheses, each with a way to confirm it","Get a reproduction: exact steps, error message, browser, time"],"answer":3}]
---
# Agent Drill: The next debugging step #1

Debugging with an agent works best as a loop: **reproduce → gather evidence → hypothesise → test the hypothesis → fix → verify with the reproduction**. Don't let it skip straight to a fix.
