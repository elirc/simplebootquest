---
slug: "wt-cities-top-n"
title: "Test It: Top cities by population (thousands)"
type: "code"
language: "js"
mode: "write-tests"
xp: 20
optional: true
section: "Practice: Test It (Mutation Graded)"
---
# Test It: Top cities by population (thousands)

The **Code under test** tab has a correct `topCitiesByPopulation` and its dataset `CITIES`. Write tests that pass against it **and** catch 3 hidden buggy versions (boundary mistakes, wrong rounding, mutated inputs…).

What the function does:

Return the names of the `n` cities with the **highest** `population`, highest first. Don't mutate the input.

Tips: test the edges (an empty array, values exactly at a threshold, ties), not just one happy path. Use `toEqual` for arrays and objects.
