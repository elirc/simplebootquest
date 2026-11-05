---
slug: "ae-q-bug-reports"
title: "Bug Reports an Agent Can Fix"
type: "quiz"
xp: 15
questions: [{"prompt": "What is the most valuable thing to give an agent for a bug?", "options": ["A long description of your frustration", "A reliable reproduction, ideally a failing test or a command", "The project history"], "answer": 1}, {"prompt": "Why include the exact error text?", "options": ["Politeness", "It lets the agent search the code and logs precisely, instead of guessing", "It is shorter"], "answer": 1}, {"prompt": "\"It started after Tuesday's deploy\" is useful because…", "options": ["It blames someone", "It narrows the search to recent changes (git log, git bisect)", "Deploys are always the cause"], "answer": 1}, {"prompt": "What should \"fixed\" mean for an agent?", "options": ["The agent says it is fixed", "The reproduction passes, a regression test exists, and the other tests still pass", "The code compiles"], "answer": 1}, {"prompt": "The bug only happens in Safari. Why mention it?", "options": ["It is not relevant", "It points to browser-specific behaviour, such as date parsing or cookie rules", "Agents prefer Safari"], "answer": 1}]
---
# Bug Reports an Agent Can Fix

"Login is broken, please fix" is a poor task for a human and a worse one for an agent. It will guess, change something plausible, and declare success.

A bug report that works:
1. **Observed behaviour**: the exact error message, status code, stack trace or screenshot.
2. **Expected behaviour.**
3. **Reproduction steps**: ideally a **command** (`curl ...`, `npm test -- auth.login`) or a failing test.
4. **Environment**: branch or commit, local vs staging, browser, and the relevant config.
5. **What you already know**: "started after commit abc123", "only for users created before March", "works in Chrome, fails in Safari".
6. **Definition of fixed**: "the reproduction passes, there's a new regression test, and the other auth tests still pass."

The single most valuable step is turning the bug into a **failing automated test** first. Then the agent has a clear target, and "fixed" isn't a matter of opinion.
