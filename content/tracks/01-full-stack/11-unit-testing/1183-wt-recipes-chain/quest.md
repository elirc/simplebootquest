---
slug: "wt-recipes-chain"
title: "Test It: Filter, sort, map: recipes in one cuisine"
type: "code"
language: "js"
mode: "write-tests"
xp: 20
optional: true
section: "Practice: Test It (Mutation Graded)"
---
# Test It: Filter, sort, map: recipes in one cuisine

The **Code under test** tab has a correct `recipesInCuisineRanked` and its dataset `RECIPES`. Write tests that pass against it **and** catch 2 hidden buggy versions (boundary mistakes, wrong rounding, mutated inputs…).

What the function does:

Return the names of recipes whose `cuisine` equals `value`, sorted by `calories` **highest first**. One chain of array methods is enough.

Tips: test the edges (an empty array, values exactly at a threshold, ties), not just one happy path. Use `toEqual` for arrays and objects.
