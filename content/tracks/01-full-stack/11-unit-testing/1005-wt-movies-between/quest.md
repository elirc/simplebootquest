---
slug: "wt-movies-between"
title: "Test It: Movies in a release year range"
type: "code"
language: "js"
mode: "write-tests"
xp: 20
optional: true
section: "Practice: Test It (Mutation Graded)"
---
# Test It: Movies in a release year range

The **Code under test** tab has a correct `moviesInRange` and its dataset `MOVIES`. Write tests that pass against it **and** catch 2 hidden buggy versions (boundary mistakes, wrong rounding, mutated inputs…).

What the function does:

Return the titles of movies whose `year` is between `low` and `high` **inclusive**. Use `filter` and `map`.

Tips: test the edges (an empty array, values exactly at a threshold, ties), not just one happy path. Use `toEqual` for arrays and objects.
