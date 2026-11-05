---
slug: "wt-tasks-top-n"
title: "Test It: Top tasks by estimate (hours)"
type: "code"
language: "js"
mode: "write-tests"
xp: 20
optional: true
section: "Practice: Test It (Mutation Graded)"
---
# Test It: Top tasks by estimate (hours)

The **Code under test** tab has a correct `topTasksByEstimate` and its dataset `TASKS`. Write tests that pass against it **and** catch 3 hidden buggy versions (boundary mistakes, wrong rounding, mutated inputs…).

What the function does:

Return the titles of the `n` tasks with the **highest** `estimate`, highest first. Don't mutate the input.

Tips: test the edges (an empty array, values exactly at a threshold, ties), not just one happy path. Use `toEqual` for arrays and objects.
