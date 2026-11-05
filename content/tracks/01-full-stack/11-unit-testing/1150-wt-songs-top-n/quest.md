---
slug: "wt-songs-top-n"
title: "Test It: Top songs by length in seconds"
type: "code"
language: "js"
mode: "write-tests"
xp: 20
optional: true
section: "Practice: Test It (Mutation Graded)"
---
# Test It: Top songs by length in seconds

The **Code under test** tab has a correct `topSongsBySeconds` and its dataset `SONGS`. Write tests that pass against it **and** catch 3 hidden buggy versions (boundary mistakes, wrong rounding, mutated inputs…).

What the function does:

Return the titles of the `n` songs with the **highest** `seconds`, highest first. Don't mutate the input.

Tips: test the edges (an empty array, values exactly at a threshold, ties), not just one happy path. Use `toEqual` for arrays and objects.
