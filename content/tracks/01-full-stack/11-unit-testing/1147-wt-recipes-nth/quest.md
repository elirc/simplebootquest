---
slug: "wt-recipes-nth"
title: "Test It: The n-th recipe by calories"
type: "code"
language: "js"
mode: "write-tests"
xp: 20
optional: true
section: "Practice: Test It (Mutation Graded)"
---
# Test It: The n-th recipe by calories

The **Code under test** tab has a correct `nthByCalories` and its dataset `RECIPES`. Write tests that pass against it **and** catch 3 hidden buggy versions (boundary mistakes, wrong rounding, mutated inputs…).

What the function does:

Return the name of the recipe ranked `n` (1 = highest `calories`), or `null` if `n` is out of range.

Tips: test the edges (an empty array, values exactly at a threshold, ties), not just one happy path. Use `toEqual` for arrays and objects.
