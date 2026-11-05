---
slug: "wt-hotels-update"
title: "Test It: Update hotels immutably"
type: "code"
language: "js"
mode: "write-tests"
xp: 20
optional: true
section: "Practice: Test It (Mutation Graded)"
---
# Test It: Update hotels immutably

The **Code under test** tab has a correct `bumpStars` and its dataset `HOTELS`. Write tests that pass against it **and** catch 2 hidden buggy versions (boundary mistakes, wrong rounding, mutated inputs…).

What the function does:

Return a **new** array where every hotel with `city` equal to `value` has `stars` increased by `amount`. Other hotels are unchanged. **Don't mutate** the input objects (React state depends on this).

Tips: test the edges (an empty array, values exactly at a threshold, ties), not just one happy path. Use `toEqual` for arrays and objects.
