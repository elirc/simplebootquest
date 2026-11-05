---
slug: "ae-q-evidence-for-agents"
title: "Giving the Agent the Right Evidence"
type: "quiz"
xp: 15
questions: [{"prompt": "Which piece of evidence is usually most useful?", "options": ["\"It does not work\"", "The exact error message and stack trace", "A screenshot of the IDE theme"], "answer": 1}, {"prompt": "How should you share logs with the agent?", "options": ["Paste all 10,000 lines", "Share the trimmed relevant lines around the failure, with request ids", "Never share logs"], "answer": 1}, {"prompt": "Should you paste production environment variable values?", "options": ["Yes, all of them", "No: share names and relevant non-secret settings only"], "answer": 1}, {"prompt": "Why tell the agent what you already tried?", "options": ["To show effort", "It avoids repeating dead ends and narrows the search", "It is required"], "answer": 1}, {"prompt": "What must happen to temporary debug logging before committing?", "options": ["Keep it forever", "Remove it (or turn it into proper structured logging if it is useful)", "Comment it out"], "answer": 1}]
---
# Giving the Agent the Right Evidence

An agent debugging from "it's broken" is guessing. An agent with **the right evidence** is often fast and accurate. Good evidence:

- **The exact error and stack trace**, with the top frames that are *your* code.
- **The relevant log lines** around the failure, with timestamps and request ids. Trim them, don't dump 10,000 lines.
- **The input that triggers it**: the request body, the query params, the user's data shape (anonymised).
- **What changed**: `git log --oneline -10`, the deploy time, a dependency bump.
- **Environment differences**: Node version, OS, browser, environment variables (names only, never values).
- **What you already tried** and ruled out.

Let the agent gather evidence itself where it safely can: run the failing test, add a temporary `console.log`, read the stack's source files, or run `git bisect`. **Then remove the temporary logging** before committing.

And never paste secrets, tokens or customer personal data into the session.
