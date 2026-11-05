---
slug: "js-p-truncate-words"
title: "Practice: Truncating by Words"
type: "code"
language: "js"
xp: 15
hints: ["Split on whitespace, slice, then fix the last kept word."]
---
## Your task
`truncateWords(text, maxWords)` collapses whitespace and returns the first `maxWords` words. If anything was cut, it appends `"…"` to the last word, after removing any trailing punctuation (`,.;:`) from it. Text that already fits is returned with collapsed whitespace and no ellipsis.
