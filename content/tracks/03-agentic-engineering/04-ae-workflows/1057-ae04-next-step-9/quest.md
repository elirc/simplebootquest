---
slug: "ae04-next-step-9"
title: "Agent Drill: The next debugging step #9"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"**Situation:** a hypothesis is confirmed by a log line showing `model` is null. What's the best next step?","options":["Write a failing regression test, then fix the code","Ask the agent for ranked hypotheses, each with a way to confirm it","Get a reproduction: exact steps, error message, browser, time","Ask it to reproduce the failure first and show the output"],"answer":0},{"prompt":"**Situation:** you can reproduce the error with `npm test -- events`. What's the best next step?","options":["Ask the agent for ranked hypotheses, each with a way to confirm it","Ask it to reproduce the failure first and show the output","Write a failing regression test, then fix the code","Get a reproduction: exact steps, error message, browser, time"],"answer":0},{"prompt":"**Situation:** a user reports \"the recipes page is broken\" and nothing else. What's the best next step?","options":["Write a failing regression test, then fix the code","Get a reproduction: exact steps, error message, browser, time","Ask it to reproduce the failure first and show the output","Ask the agent for ranked hypotheses, each with a way to confirm it"],"answer":1},{"prompt":"**Situation:** a hypothesis is confirmed by a log line showing `code` is null. What's the best next step?","options":["Write a failing regression test, then fix the code","Ask it to reproduce the failure first and show the output","Get a reproduction: exact steps, error message, browser, time","Ask the agent for ranked hypotheses, each with a way to confirm it"],"answer":0},{"prompt":"**Situation:** you can reproduce the error with `npm test -- movies`. What's the best next step?","options":["Ask the agent for ranked hypotheses, each with a way to confirm it","Write a failing regression test, then fix the code","Get a reproduction: exact steps, error message, browser, time","Ask it to reproduce the failure first and show the output"],"answer":0}]
---
# Agent Drill: The next debugging step #9

Debugging with an agent works best as a loop: **reproduce → gather evidence → hypothesise → test the hypothesis → fix → verify with the reproduction**. Don't let it skip straight to a fix.
