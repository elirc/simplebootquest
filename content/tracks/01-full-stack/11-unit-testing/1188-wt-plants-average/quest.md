---
slug: "wt-plants-average"
title: "Test It: Average watering interval (days)"
type: "code"
language: "js"
mode: "write-tests"
xp: 20
optional: true
section: "Practice: Test It (Mutation Graded)"
---
# Test It: Average watering interval (days)

The **Code under test** tab has a correct `averageWaterEveryDays` and its dataset `PLANTS`. Write tests that pass against it **and** catch 4 hidden buggy versions (boundary mistakes, wrong rounding, mutated inputs…).

What the function does:

Return the average `waterEveryDays` rounded to **one decimal place** (use `Math.round(x * 10) / 10`). Return `null` for an empty list.

Tips: test the edges (an empty array, values exactly at a threshold, ties), not just one happy path. Use `toEqual` for arrays and objects.
