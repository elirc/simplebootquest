---
slug: "wt-plants-chain"
title: "Test It: Filter, sort, map: plants in one light needs"
type: "code"
language: "js"
mode: "write-tests"
xp: 20
optional: true
section: "Practice: Test It (Mutation Graded)"
---
# Test It: Filter, sort, map: plants in one light needs

The **Code under test** tab has a correct `plantsInLightRanked` and its dataset `PLANTS`. Write tests that pass against it **and** catch 2 hidden buggy versions (boundary mistakes, wrong rounding, mutated inputs…).

What the function does:

Return the names of plants whose `light` equals `value`, sorted by `heightCm` **highest first**. One chain of array methods is enough.

Tips: test the edges (an empty array, values exactly at a threshold, ties), not just one happy path. Use `toEqual` for arrays and objects.
