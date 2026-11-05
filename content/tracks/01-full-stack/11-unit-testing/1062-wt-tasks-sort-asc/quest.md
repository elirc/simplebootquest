---
slug: "wt-tasks-sort-asc"
title: "Test It: Sort tasks by estimate (hours)"
type: "code"
language: "js"
mode: "write-tests"
xp: 20
optional: true
section: "Practice: Test It (Mutation Graded)"
---
# Test It: Sort tasks by estimate (hours)

The **Code under test** tab has a correct `tasksByEstimate` and its dataset `TASKS`. Write tests that pass against it **and** catch 2 hidden buggy versions (boundary mistakes, wrong rounding, mutated inputs…).

What the function does:

Return the titles sorted by `estimate` from **lowest to highest**. Ties keep their original order. Don't mutate the input array.

Tips: test the edges (an empty array, values exactly at a threshold, ties), not just one happy path. Use `toEqual` for arrays and objects.
