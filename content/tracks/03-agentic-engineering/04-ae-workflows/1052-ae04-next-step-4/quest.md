---
slug: "ae04-next-step-4"
title: "Agent Drill: The next debugging step #4"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"**Situation:** you can reproduce the error with `npm test -- employees`. What's the best next step?","options":["Ask it to reproduce the failure first and show the output","Write a failing regression test, then fix the code","Get a reproduction: exact steps, error message, browser, time","Ask the agent for ranked hypotheses, each with a way to confirm it"],"answer":3},{"prompt":"**Situation:** a user reports \"the employees page is broken\" and nothing else. What's the best next step?","options":["Get a reproduction: exact steps, error message, browser, time","Ask it to reproduce the failure first and show the output","Ask the agent for ranked hypotheses, each with a way to confirm it","Write a failing regression test, then fix the code"],"answer":0},{"prompt":"**Situation:** a user reports \"the events page is broken\" and nothing else. What's the best next step?","options":["Get a reproduction: exact steps, error message, browser, time","Ask it to reproduce the failure first and show the output","Write a failing regression test, then fix the code","Ask the agent for ranked hypotheses, each with a way to confirm it"],"answer":0},{"prompt":"**Situation:** a user reports \"the orders page is broken\" and nothing else. What's the best next step?","options":["Ask it to reproduce the failure first and show the output","Ask the agent for ranked hypotheses, each with a way to confirm it","Write a failing regression test, then fix the code","Get a reproduction: exact steps, error message, browser, time"],"answer":3},{"prompt":"**Situation:** a user reports \"the books page is broken\" and nothing else. What's the best next step?","options":["Ask it to reproduce the failure first and show the output","Write a failing regression test, then fix the code","Get a reproduction: exact steps, error message, browser, time","Ask the agent for ranked hypotheses, each with a way to confirm it"],"answer":2}]
---
# Agent Drill: The next debugging step #4

Debugging with an agent works best as a loop: **reproduce → gather evidence → hypothesise → test the hypothesis → fix → verify with the reproduction**. Don't let it skip straight to a fix.
