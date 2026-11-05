---
slug: "async-p-deep-merge"
title: "Practice: Deep Merge"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice"
hints: ["Recurse only when both sides are plain objects."]
---
# Practice: Deep Merge

Merging nested config ("defaults + user overrides") needs a **deep** merge, because spread only merges the top level.

## Your task
`deepMerge(base, override)` returns a new object where plain-object values are merged recursively, and every other value (including arrays) from `override` replaces the one in `base`. `undefined` in `override` is ignored. Neither input may be mutated.
