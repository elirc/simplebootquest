---
slug: "wt-hotels-nth"
title: "Test It: The n-th hotel by nightly price"
type: "code"
language: "js"
mode: "write-tests"
xp: 20
optional: true
section: "Practice: Test It (Mutation Graded)"
---
# Test It: The n-th hotel by nightly price

The **Code under test** tab has a correct `nthByNightlyPrice` and its dataset `HOTELS`. Write tests that pass against it **and** catch 3 hidden buggy versions (boundary mistakes, wrong rounding, mutated inputs…).

What the function does:

Return the name of the hotel ranked `n` (1 = highest `nightlyPrice`), or `null` if `n` is out of range.

Tips: test the edges (an empty array, values exactly at a threshold, ties), not just one happy path. Use `toEqual` for arrays and objects.
