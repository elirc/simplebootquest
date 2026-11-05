---
slug: "ae09-next-step-7"
title: "Agent Drill: The next debugging step #7"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"**Situation:** you can reproduce the error with `npm test -- repos`. What's the best next step?","options":["Write a failing regression test, then fix the code","Ask it to reproduce the failure first and show the output","Get a reproduction: exact steps, error message, browser, time","Ask the agent for ranked hypotheses, each with a way to confirm it"],"answer":3},{"prompt":"**Situation:** a user reports \"the books page is broken\" and nothing else. What's the best next step?","options":["Ask the agent for ranked hypotheses, each with a way to confirm it","Write a failing regression test, then fix the code","Get a reproduction: exact steps, error message, browser, time","Ask it to reproduce the failure first and show the output"],"answer":2},{"prompt":"**Situation:** a hypothesis is confirmed by a log line showing `label` is null. What's the best next step?","options":["Write a failing regression test, then fix the code","Ask it to reproduce the failure first and show the output","Ask the agent for ranked hypotheses, each with a way to confirm it","Get a reproduction: exact steps, error message, browser, time"],"answer":0},{"prompt":"**Situation:** you can reproduce the error with `npm test -- transactions`. What's the best next step?","options":["Ask the agent for ranked hypotheses, each with a way to confirm it","Write a failing regression test, then fix the code","Ask it to reproduce the failure first and show the output","Get a reproduction: exact steps, error message, browser, time"],"answer":0},{"prompt":"**Situation:** you can reproduce the error with `npm test -- events`. What's the best next step?","options":["Get a reproduction: exact steps, error message, browser, time","Write a failing regression test, then fix the code","Ask it to reproduce the failure first and show the output","Ask the agent for ranked hypotheses, each with a way to confirm it"],"answer":3}]
---
# Agent Drill: The next debugging step #7

Debugging with an agent works best as a loop: **reproduce → gather evidence → hypothesise → test the hypothesis → fix → verify with the reproduction**. Don't let it skip straight to a fix.
