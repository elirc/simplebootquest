---
slug: "js-p-make-change"
title: "Practice: Making Change"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice"
hints: ["Use `Math.floor(left / coin)` for each coin, from largest to smallest."]
---
## Your task
`makeChange(cents)` returns the coins needed for an amount, using the fewest coins from `[200, 100, 50, 20, 10, 5, 2, 1]` (a greedy algorithm works for this coin set). Return an object mapping each coin value used to its count: `makeChange(287)` → `{ 200: 1, 50: 1, 20: 1, 10: 1, 5: 1, 2: 1 }`.
