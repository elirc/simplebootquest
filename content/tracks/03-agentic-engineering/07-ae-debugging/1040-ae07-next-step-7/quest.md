---
slug: "ae07-next-step-7"
title: "Agent Drill: The next debugging step #7"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"**Situation:** a user reports \"the tickets page is broken\" and nothing else. What's the best next step?","options":["Ask it to reproduce the failure first and show the output","Get a reproduction: exact steps, error message, browser, time","Write a failing regression test, then fix the code","Ask the agent for ranked hypotheses, each with a way to confirm it"],"answer":1},{"prompt":"**Situation:** a user reports \"the plants page is broken\" and nothing else. What's the best next step?","options":["Ask it to reproduce the failure first and show the output","Write a failing regression test, then fix the code","Get a reproduction: exact steps, error message, browser, time","Ask the agent for ranked hypotheses, each with a way to confirm it"],"answer":2},{"prompt":"**Situation:** you can reproduce the error with `npm test -- repos`. What's the best next step?","options":["Ask it to reproduce the failure first and show the output","Write a failing regression test, then fix the code","Ask the agent for ranked hypotheses, each with a way to confirm it","Get a reproduction: exact steps, error message, browser, time"],"answer":2},{"prompt":"**Situation:** a user reports \"the students page is broken\" and nothing else. What's the best next step?","options":["Ask it to reproduce the failure first and show the output","Write a failing regression test, then fix the code","Ask the agent for ranked hypotheses, each with a way to confirm it","Get a reproduction: exact steps, error message, browser, time"],"answer":3},{"prompt":"**Situation:** you can reproduce the error with `npm test -- cars`. What's the best next step?","options":["Get a reproduction: exact steps, error message, browser, time","Ask the agent for ranked hypotheses, each with a way to confirm it","Ask it to reproduce the failure first and show the output","Write a failing regression test, then fix the code"],"answer":1}]
---
# Agent Drill: The next debugging step #7

Debugging with an agent works best as a loop: **reproduce → gather evidence → hypothesise → test the hypothesis → fix → verify with the reproduction**. Don't let it skip straight to a fix.
