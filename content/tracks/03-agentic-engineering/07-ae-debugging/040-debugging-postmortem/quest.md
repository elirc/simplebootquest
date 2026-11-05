---
slug: "ae-debugging-postmortem"
title: "Write-Up: A Debugging Session Postmortem"
type: "design"
xp: 40
hints: ["A good postmortem shows the path, including the dead ends, not just the answer."]
rubric: ["Describes the symptom with concrete evidence (error messages, frequency, conditions)", "Lists hypotheses and the experiment used to test each", "Shows systematic narrowing (bisecting time, code or data), not random changes", "Is honest about where the agent helped and where it misled", "Explains the root cause separately from the fix", "Includes verification and a regression test", "Ends with concrete lessons"]
minWords: 200
---
# Write-Up: A Debugging Session Postmortem

Think of a real bug you fixed (in your capstone, at work, or in this course), ideally with an agent's help. If you don't have one yet, use this scenario: *"After upgrading a dependency, the API returns 500 for about 5% of requests, only under load."*

Write a short postmortem of the **debugging process** itself:

- The symptom, and how it was reported.
- Your hypotheses, in order, and the experiment that confirmed or eliminated each one.
- Where the agent helped, and where it misled you (or would have).
- The root cause and the fix, and how you verified it (including a regression test).
- What you'd do differently next time.
