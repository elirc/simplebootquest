---
slug: "js-p-inventory-value"
title: "Practice: Inventory Value"
type: "code"
language: "js"
xp: 15
hints: ["Sort by qty, then by sku with `||` for ties."]
---
## Your task
Items look like `{ sku, name, price, qty, category }` (prices in cents).

1. `totalValue(items)` returns the sum of `price * qty`.
2. `valueByCategory(items)` returns `{ category: totalValue }`.
3. `restockList(items, threshold)` returns the skus with `qty < threshold`, lowest stock first (ties by sku).
