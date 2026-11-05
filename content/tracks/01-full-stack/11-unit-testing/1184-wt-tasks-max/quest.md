---
slug: "wt-tasks-max"
title: "Test It: The task with the highest estimate (hours)"
type: "code"
language: "js"
mode: "write-tests"
xp: 20
optional: true
section: "Practice: Test It (Mutation Graded)"
---
# Test It: The task with the highest estimate (hours)

The **Code under test** tab has a correct `highestEstimate` and its dataset `TASKS`. Write tests that pass against it **and** catch 2 hidden buggy versions (boundary mistakes, wrong rounding, mutated inputs…).

What the function does:

Return the title of the task with the **highest** `estimate`. If several tie, return the first. Return `null` for an empty list.

Tips: test the edges (an empty array, values exactly at a threshold, ties), not just one happy path. Use `toEqual` for arrays and objects.
