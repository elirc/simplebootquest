---
slug: "wt-recipes-top-n"
title: "Test It: Top recipes by cooking time"
type: "code"
language: "js"
mode: "write-tests"
xp: 20
optional: true
section: "Practice: Test It (Mutation Graded)"
---
# Test It: Top recipes by cooking time

The **Code under test** tab has a correct `topRecipesByMinutes` and its dataset `RECIPES`. Write tests that pass against it **and** catch 3 hidden buggy versions (boundary mistakes, wrong rounding, mutated inputs…).

What the function does:

Return the names of the `n` recipes with the **highest** `minutes`, highest first. Don't mutate the input.

Tips: test the edges (an empty array, values exactly at a threshold, ties), not just one happy path. Use `toEqual` for arrays and objects.
