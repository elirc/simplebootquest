---
slug: "wt-recipes-update"
title: "Test It: Update recipes immutably"
type: "code"
language: "js"
mode: "write-tests"
xp: 20
optional: true
section: "Practice: Test It (Mutation Graded)"
---
# Test It: Update recipes immutably

The **Code under test** tab has a correct `bumpMinutes` and its dataset `RECIPES`. Write tests that pass against it **and** catch 2 hidden buggy versions (boundary mistakes, wrong rounding, mutated inputs…).

What the function does:

Return a **new** array where every recipe with `cuisine` equal to `value` has `minutes` increased by `amount`. Other recipes are unchanged. **Don't mutate** the input objects (React state depends on this).

Tips: test the edges (an empty array, values exactly at a threshold, ties), not just one happy path. Use `toEqual` for arrays and objects.
