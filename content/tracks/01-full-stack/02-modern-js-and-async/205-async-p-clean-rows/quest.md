---
slug: "async-p-clean-rows"
title: "Practice: Cleaning CSV Rows"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice"
hints: ["`Number(\"abc\")` is NaN, and `NaN >= 0` is false, which filters it out for free."]
---
# Practice: Cleaning CSV Rows

Imported data is always messy. A cleaning pipeline of small `map`/`filter` steps keeps it readable.

## Your task
`cleanRows(rows)` takes rows parsed from a CSV (all values are strings) like `{ name: ' Pen ', price: '1.50', stock: '10' }` and returns `{ name, priceCents, stock }` objects:

- `name` is trimmed, and rows with an empty name are dropped.
- `priceCents` = the price × 100, rounded. Rows whose price isn't a valid non-negative number are dropped.
- `stock` is an integer; blank stock means 0, and non-integer stock drops the row.
- Duplicate names (case-insensitive) keep only the first.
