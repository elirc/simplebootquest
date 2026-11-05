---
slug: "wt-plants-update"
title: "Test It: Update plants immutably"
type: "code"
language: "js"
mode: "write-tests"
xp: 20
optional: true
section: "Practice: Test It (Mutation Graded)"
---
# Test It: Update plants immutably

The **Code under test** tab has a correct `bumpWaterEveryDays` and its dataset `PLANTS`. Write tests that pass against it **and** catch 2 hidden buggy versions (boundary mistakes, wrong rounding, mutated inputs…).

What the function does:

Return a **new** array where every plant with `light` equal to `value` has `waterEveryDays` increased by `amount`. Other plants are unchanged. **Don't mutate** the input objects (React state depends on this).

Tips: test the edges (an empty array, values exactly at a threshold, ties), not just one happy path. Use `toEqual` for arrays and objects.
