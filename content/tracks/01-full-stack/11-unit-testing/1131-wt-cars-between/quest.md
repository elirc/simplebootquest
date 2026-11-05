---
slug: "wt-cars-between"
title: "Test It: Cars in a price (thousands) range"
type: "code"
language: "js"
mode: "write-tests"
xp: 20
optional: true
section: "Practice: Test It (Mutation Graded)"
---
# Test It: Cars in a price (thousands) range

The **Code under test** tab has a correct `carsInRange` and its dataset `CARS`. Write tests that pass against it **and** catch 2 hidden buggy versions (boundary mistakes, wrong rounding, mutated inputs…).

What the function does:

Return the models of cars whose `priceK` is between `low` and `high` **inclusive**. Use `filter` and `map`.

Tips: test the edges (an empty array, values exactly at a threshold, ties), not just one happy path. Use `toEqual` for arrays and objects.
