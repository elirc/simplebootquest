---
slug: "ae-d-architecture-notes"
title: "Write-Up: Architecture Notes for Agents"
type: "design"
xp: 40
rubric: ["Gives a concise system overview with the request flow", "Maps the important directories and files", "Describes at least two key flows with concrete file names", "States invariants (e.g. authorization rules, money in cents)", "Includes at least one step-by-step \"how to make a common change\" recipe", "Lists known sharp edges or gotchas", "Is written to be scanned (headings, bullets), not a wall of prose"]
minWords: 150
---
# Write-Up: Architecture Notes for Agents

Your context file should stay short, so the deeper "how this system fits together" knowledge belongs in a separate doc that agents (and new teammates) read **when they need it**, for example `docs/architecture.md`, linked from `CLAUDE.md`.

Write that document for your capstone app (or for SimpleBootQuest itself, if you've been reading BUILDING.md).

### Include
1. **A system overview**: the main parts and how a request flows through them.
2. **Where things live**: a short map of the important directories.
3. **Key flows**: for example "how a user signs up" and "how a todo is saved", naming the actual files.
4. **Invariants and conventions**: rules that must never be broken.
5. **Common changes**: step-by-step recipes ("to add a new API endpoint…").
6. **Known sharp edges.**
