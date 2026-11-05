---
slug: "async-p-moving-average"
title: "Practice: Moving Averages"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice"
hints: ["Keep a running window sum: add the new value, subtract the one leaving the window."]
---
## Your task
1. `movingAverage(values, size)` returns the average of each window of `size` consecutive values (length `n - size + 1`), rounded to 2 decimals.
2. `runningTotals(values)` returns the cumulative sums, using `map` with a closure variable.
