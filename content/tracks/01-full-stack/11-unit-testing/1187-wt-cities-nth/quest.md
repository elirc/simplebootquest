---
slug: "wt-cities-nth"
title: "Test It: The n-th city by average temperature"
type: "code"
language: "js"
mode: "write-tests"
xp: 20
optional: true
section: "Practice: Test It (Mutation Graded)"
---
# Test It: The n-th city by average temperature

The **Code under test** tab has a correct `nthByAvgTemp` and its dataset `CITIES`. Write tests that pass against it **and** catch 3 hidden buggy versions (boundary mistakes, wrong rounding, mutated inputs…).

What the function does:

Return the name of the city ranked `n` (1 = highest `avgTemp`), or `null` if `n` is out of range.

Tips: test the edges (an empty array, values exactly at a threshold, ties), not just one happy path. Use `toEqual` for arrays and objects.
