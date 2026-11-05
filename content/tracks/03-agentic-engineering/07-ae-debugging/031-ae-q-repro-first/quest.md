---
slug: "ae-q-repro-first"
title: "Reproduce Before You Fix"
type: "quiz"
xp: 15
questions: [{"prompt": "What should happen before an agent changes code to fix a bug?", "options": ["Nothing, just fix it", "Reproduce the failure with a command or a test, and observe it", "Rewrite the module"], "answer": 1}, {"prompt": "Why ask the agent for several ranked hypotheses?", "options": ["To waste time", "It avoids tunnel vision on the first plausible idea, and each one comes with a way to test it", "Agents need practice"], "answer": 1}, {"prompt": "The bug cannot be reproduced locally. What is a good next step?", "options": ["A speculative fix", "Add logging or capture failing inputs in the environment where it happens", "Close the ticket"], "answer": 1}, {"prompt": "What happens to the reproduction after the fix?", "options": ["Delete it", "Keep it as a regression test", "Comment it out"], "answer": 1}, {"prompt": "What is the benefit of minimising a reproduction?", "options": ["Smaller files", "Fewer moving parts make the cause much easier to see and confirm", "Faster CI only"], "answer": 1}]
---
# Reproduce Before You Fix

The most common agent debugging failure is **fixing a guess**. The agent reads the symptoms, spots something plausible, changes it, and declares victory, without ever having seen the bug happen.

Insist on this order:
1. **Reproduce**: a command, a test or a script that shows the failure *right now*. "Run `npm test -- cart` and show me the failing output."
2. **Minimise**: strip the reproduction down to the smallest input that still fails.
3. **Hypothesise**: list 2–3 possible causes, ranked, each with **how to confirm or rule it out**.
4. **Confirm** the cause with evidence: a log line, a debugger value, a bisect result.
5. **Fix**, then **re-run the reproduction**, which must now pass.
6. **Keep the reproduction as a regression test.**

If a bug can't be reproduced, the next step is **more observability** (logging, capturing inputs), not a speculative fix.
