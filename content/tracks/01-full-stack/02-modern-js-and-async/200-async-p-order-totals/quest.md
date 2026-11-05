---
slug: "async-p-order-totals"
title: "Practice: Totals per Customer"
type: "code"
language: "js"
xp: 15
hints: ["A Map keyed by customer is a good accumulator."]
---
## Your task
`customerTotals(orders)` takes orders `{ customer, items: [{ price, qty }] }` and returns `[{ customer, total, orders }]` (total spend in cents, number of orders), sorted by total descending, then by customer name. Use `reduce`/`map`/`sort` rather than loops.
