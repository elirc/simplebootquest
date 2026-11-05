---
slug: "wt-cars-nth"
title: "Test It: The n-th car by mileage (km)"
type: "code"
language: "js"
mode: "write-tests"
xp: 20
optional: true
section: "Practice: Test It (Mutation Graded)"
---
# Test It: The n-th car by mileage (km)

The **Code under test** tab has a correct `nthByKm` and its dataset `CARS`. Write tests that pass against it **and** catch 3 hidden buggy versions (boundary mistakes, wrong rounding, mutated inputs…).

What the function does:

Return the model of the car ranked `n` (1 = highest `km`), or `null` if `n` is out of range.

Tips: test the edges (an empty array, values exactly at a threshold, ties), not just one happy path. Use `toEqual` for arrays and objects.
