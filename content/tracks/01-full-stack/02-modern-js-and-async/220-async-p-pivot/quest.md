---
slug: "async-p-pivot"
title: "Practice: Pivot Tables"
type: "code"
language: "js"
xp: 15
hints: ["`(acc[key] ??= {})` creates the row object on first use."]
---
## Your task
`pivot(rows, rowKey, colKey, valueKey)` sums `valueKey` into a nested object: `pivot(sales, 'region', 'month', 'amount')` → `{ north: { jan: 30, feb: 5 }, south: { jan: 7 } }`.
