---
slug: "ae04-next-step-5"
title: "Agent Drill: The next debugging step #5"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"**Situation:** a user reports \"the tasks page is broken\" and nothing else. What's the best next step?","options":["Write a failing regression test, then fix the code","Get a reproduction: exact steps, error message, browser, time","Ask it to reproduce the failure first and show the output","Ask the agent for ranked hypotheses, each with a way to confirm it"],"answer":1},{"prompt":"**Situation:** you can reproduce the error with `npm test -- repos`. What's the best next step?","options":["Get a reproduction: exact steps, error message, browser, time","Write a failing regression test, then fix the code","Ask the agent for ranked hypotheses, each with a way to confirm it","Ask it to reproduce the failure first and show the output"],"answer":2},{"prompt":"**Situation:** a user reports \"the movies page is broken\" and nothing else. What's the best next step?","options":["Write a failing regression test, then fix the code","Get a reproduction: exact steps, error message, browser, time","Ask the agent for ranked hypotheses, each with a way to confirm it","Ask it to reproduce the failure first and show the output"],"answer":1},{"prompt":"**Situation:** you can reproduce the error with `npm test -- plants`. What's the best next step?","options":["Write a failing regression test, then fix the code","Get a reproduction: exact steps, error message, browser, time","Ask the agent for ranked hypotheses, each with a way to confirm it","Ask it to reproduce the failure first and show the output"],"answer":2},{"prompt":"**Situation:** you can reproduce the error with `npm test -- tasks`. What's the best next step?","options":["Get a reproduction: exact steps, error message, browser, time","Write a failing regression test, then fix the code","Ask the agent for ranked hypotheses, each with a way to confirm it","Ask it to reproduce the failure first and show the output"],"answer":2}]
---
# Agent Drill: The next debugging step #5

Debugging with an agent works best as a loop: **reproduce → gather evidence → hypothesise → test the hypothesis → fix → verify with the reproduction**. Don't let it skip straight to a fix.
