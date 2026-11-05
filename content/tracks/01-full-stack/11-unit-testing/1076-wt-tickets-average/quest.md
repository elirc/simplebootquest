---
slug: "wt-tickets-average"
title: "Test It: Average age (hours)"
type: "code"
language: "js"
mode: "write-tests"
xp: 20
optional: true
section: "Practice: Test It (Mutation Graded)"
---
# Test It: Average age (hours)

The **Code under test** tab has a correct `averageAgeHours` and its dataset `TICKETS`. Write tests that pass against it **and** catch 4 hidden buggy versions (boundary mistakes, wrong rounding, mutated inputs…).

What the function does:

Return the average `ageHours` rounded to **one decimal place** (use `Math.round(x * 10) / 10`). Return `null` for an empty list.

Tips: test the edges (an empty array, values exactly at a threshold, ties), not just one happy path. Use `toEqual` for arrays and objects.
