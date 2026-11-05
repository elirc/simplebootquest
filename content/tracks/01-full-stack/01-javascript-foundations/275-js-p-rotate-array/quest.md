---
slug: "js-p-rotate-array"
title: "Practice: Rotating Arrays"
type: "code"
language: "js"
xp: 15
hints: ["Normalise k with `((k % n) + n) % n`."]
---
## Your task
`rotate(array, k)` returns a **new** array rotated right by `k` (`rotate([1,2,3,4,5], 2)` → `[4,5,1,2,3]`). Negative `k` rotates left. `k` larger than the length wraps around.
