---
slug: "ae09-next-step-3"
title: "Agent Drill: The next debugging step #3"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"**Situation:** you can reproduce the error with `npm test -- workouts`. What's the best next step?","options":["Write a failing regression test, then fix the code","Ask it to reproduce the failure first and show the output","Ask the agent for ranked hypotheses, each with a way to confirm it","Get a reproduction: exact steps, error message, browser, time"],"answer":2},{"prompt":"**Situation:** you can reproduce the error with `npm test -- books`. What's the best next step?","options":["Get a reproduction: exact steps, error message, browser, time","Write a failing regression test, then fix the code","Ask the agent for ranked hypotheses, each with a way to confirm it","Ask it to reproduce the failure first and show the output"],"answer":2},{"prompt":"**Situation:** a user reports \"the repos page is broken\" and nothing else. What's the best next step?","options":["Write a failing regression test, then fix the code","Ask the agent for ranked hypotheses, each with a way to confirm it","Get a reproduction: exact steps, error message, browser, time","Ask it to reproduce the failure first and show the output"],"answer":2},{"prompt":"**Situation:** a user reports \"the plants page is broken\" and nothing else. What's the best next step?","options":["Ask the agent for ranked hypotheses, each with a way to confirm it","Get a reproduction: exact steps, error message, browser, time","Ask it to reproduce the failure first and show the output","Write a failing regression test, then fix the code"],"answer":1},{"prompt":"**Situation:** a user reports \"the employees page is broken\" and nothing else. What's the best next step?","options":["Write a failing regression test, then fix the code","Ask the agent for ranked hypotheses, each with a way to confirm it","Ask it to reproduce the failure first and show the output","Get a reproduction: exact steps, error message, browser, time"],"answer":3}]
---
# Agent Drill: The next debugging step #3

Debugging with an agent works best as a loop: **reproduce → gather evidence → hypothesise → test the hypothesis → fix → verify with the reproduction**. Don't let it skip straight to a fix.
