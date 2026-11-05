---
slug: "wt-workouts-average"
title: "Test It: Average calories burned"
type: "code"
language: "js"
mode: "write-tests"
xp: 20
optional: true
section: "Practice: Test It (Mutation Graded)"
---
# Test It: Average calories burned

The **Code under test** tab has a correct `averageCalories` and its dataset `WORKOUTS`. Write tests that pass against it **and** catch 3 hidden buggy versions (boundary mistakes, wrong rounding, mutated inputs…).

What the function does:

Return the average `calories` rounded to **one decimal place** (use `Math.round(x * 10) / 10`). Return `null` for an empty list.

Tips: test the edges (an empty array, values exactly at a threshold, ties), not just one happy path. Use `toEqual` for arrays and objects.
