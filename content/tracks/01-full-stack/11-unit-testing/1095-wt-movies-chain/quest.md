---
slug: "wt-movies-chain"
title: "Test It: Filter, sort, map: movies in one genre"
type: "code"
language: "js"
mode: "write-tests"
xp: 20
optional: true
section: "Practice: Test It (Mutation Graded)"
---
# Test It: Filter, sort, map: movies in one genre

The **Code under test** tab has a correct `moviesInGenreRanked` and its dataset `MOVIES`. Write tests that pass against it **and** catch 2 hidden buggy versions (boundary mistakes, wrong rounding, mutated inputs…).

What the function does:

Return the titles of movies whose `genre` equals `value`, sorted by `rating` **highest first**. One chain of array methods is enough.

Tips: test the edges (an empty array, values exactly at a threshold, ties), not just one happy path. Use `toEqual` for arrays and objects.
