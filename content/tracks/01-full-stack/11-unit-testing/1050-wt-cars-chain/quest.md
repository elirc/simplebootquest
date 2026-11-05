---
slug: "wt-cars-chain"
title: "Test It: Filter, sort, map: cars in one fuel type"
type: "code"
language: "js"
mode: "write-tests"
xp: 20
optional: true
section: "Practice: Test It (Mutation Graded)"
---
# Test It: Filter, sort, map: cars in one fuel type

The **Code under test** tab has a correct `carsInFuelRanked` and its dataset `CARS`. Write tests that pass against it **and** catch 2 hidden buggy versions (boundary mistakes, wrong rounding, mutated inputs…).

What the function does:

Return the models of cars whose `fuel` equals `value`, sorted by `km` **highest first**. One chain of array methods is enough.

Tips: test the edges (an empty array, values exactly at a threshold, ties), not just one happy path. Use `toEqual` for arrays and objects.
