---
slug: "async-p-dedupe-latest"
title: "Practice: Keep the Latest Record"
type: "code"
language: "js"
xp: 15
hints: ["ISO date strings compare correctly with `>`."]
---
## Your task
`latestBy(records, key, dateField)` keeps only the most recent record for each value of `key` (by the ISO date in `dateField`). Return the result sorted by date, newest first. This is useful for "latest status per order" or "most recent login per user".
