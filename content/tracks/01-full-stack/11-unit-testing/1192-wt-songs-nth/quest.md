---
slug: "wt-songs-nth"
title: "Test It: The n-th song by play count"
type: "code"
language: "js"
mode: "write-tests"
xp: 20
optional: true
section: "Practice: Test It (Mutation Graded)"
---
# Test It: The n-th song by play count

The **Code under test** tab has a correct `nthByPlays` and its dataset `SONGS`. Write tests that pass against it **and** catch 3 hidden buggy versions (boundary mistakes, wrong rounding, mutated inputs…).

What the function does:

Return the title of the song ranked `n` (1 = highest `plays`), or `null` if `n` is out of range.

Tips: test the edges (an empty array, values exactly at a threshold, ties), not just one happy path. Use `toEqual` for arrays and objects.
