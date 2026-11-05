---
slug: "ae-feature-spec"
title: "Write-Up: A Spec an Agent Can Execute"
type: "design"
xp: 40
hints: ["Write acceptance criteria you could turn into tests line by line."]
rubric: ["States the goal and the user value (the \"why\")", "Points to specific files and existing patterns to follow", "Lists constraints (tech choices, no new dependencies, conventions)", "Has testable acceptance criteria, including security and unhappy paths", "Has an explicit out-of-scope list", "Breaks execution into small, independently verifiable steps", "Says what the agent should do when something is ambiguous"]
minWords: 200
---
# Write-Up: A Spec an Agent Can Execute

Pick a **real feature** you want in your capstone (e.g. "favourite recipes", "export to CSV", "due-date reminders", "share a read-only link"). Write the spec you'd hand to an agent, detailed enough that a new teammate could implement it without asking you anything.

Then add a short **execution plan**: the sequence of small prompts or steps you'd give the agent, and how each one is verified before the next.
