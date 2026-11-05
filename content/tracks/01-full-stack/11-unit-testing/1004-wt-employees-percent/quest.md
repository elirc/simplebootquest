---
slug: "wt-employees-percent"
title: "Test It: What share of employees are remote?"
type: "code"
language: "js"
mode: "write-tests"
xp: 20
optional: true
section: "Practice: Test It (Mutation Graded)"
---
# Test It: What share of employees are remote?

The **Code under test** tab has a correct `percentRemote` and its dataset `EMPLOYEES`. Write tests that pass against it **and** catch 3 hidden buggy versions (boundary mistakes, wrong rounding, mutated inputs…).

What the function does:

Return the percentage (0–100, rounded to a whole number) of employees where `remote` is true. Return 0 for an empty list.

Tips: test the edges (an empty array, values exactly at a threshold, ties), not just one happy path. Use `toEqual` for arrays and objects.
