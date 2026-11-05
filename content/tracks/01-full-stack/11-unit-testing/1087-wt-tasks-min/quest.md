---
slug: "wt-tasks-min"
title: "Test It: The task with the lowest estimate (hours)"
type: "code"
language: "js"
mode: "write-tests"
xp: 20
optional: true
section: "Practice: Test It (Mutation Graded)"
---
# Test It: The task with the lowest estimate (hours)

The **Code under test** tab has a correct `lowestEstimate` and its dataset `TASKS`. Write tests that pass against it **and** catch 2 hidden buggy versions (boundary mistakes, wrong rounding, mutated inputs…).

What the function does:

Return the title of the task with the **lowest** `estimate` (first one on ties), or `null` for an empty list.

Tips: test the edges (an empty array, values exactly at a threshold, ties), not just one happy path. Use `toEqual` for arrays and objects.
