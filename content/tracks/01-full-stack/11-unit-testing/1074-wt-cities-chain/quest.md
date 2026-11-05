---
slug: "wt-cities-chain"
title: "Test It: Filter, sort, map: cities in one continent"
type: "code"
language: "js"
mode: "write-tests"
xp: 20
optional: true
section: "Practice: Test It (Mutation Graded)"
---
# Test It: Filter, sort, map: cities in one continent

The **Code under test** tab has a correct `citiesInContinentRanked` and its dataset `CITIES`. Write tests that pass against it **and** catch 2 hidden buggy versions (boundary mistakes, wrong rounding, mutated inputs…).

What the function does:

Return the names of cities whose `continent` equals `value`, sorted by `avgTemp` **highest first**. One chain of array methods is enough.

Tips: test the edges (an empty array, values exactly at a threshold, ties), not just one happy path. Use `toEqual` for arrays and objects.
