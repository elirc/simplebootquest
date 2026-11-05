---
slug: "ae-write-claude-md"
title: "Write-Up: A Context File for Your Capstone"
type: "design"
xp: 40
hints: ["Write down every instruction you have repeated to an agent more than once."]
rubric: ["Lists exact commands: install, dev, test (all + single file), typecheck, lint, migrate", "Gives a short map of the architecture and where new code goes", "States coding conventions (error handling, validation, naming, test style)", "Captures project-specific gotchas", "Sets clear boundaries: things never to do (secrets, generated files, new deps, pushing)", "Is concise (bullets, no history or fluff)"]
minWords: 150
---
# Write-Up: A Context File for Your Capstone

Write the `CLAUDE.md` (or `AGENTS.md`) for your capstone repository: the file that every agent session will load first.

It should let a capable agent that has never seen the project:

- set up, run, test and typecheck it,
- find where things live,
- follow your conventions,
- avoid your known pitfalls,
- know what it must never do.

Keep it **concise**: every line costs context in every session. Prefer bullet points and exact commands over prose. Then commit it to your repo!
