---
slug: "wt-songs-chain"
title: "Test It: Filter, sort, map: songs in one artist"
type: "code"
language: "js"
mode: "write-tests"
xp: 20
optional: true
section: "Practice: Test It (Mutation Graded)"
---
# Test It: Filter, sort, map: songs in one artist

The **Code under test** tab has a correct `songsInArtistRanked` and its dataset `SONGS`. Write tests that pass against it **and** catch 2 hidden buggy versions (boundary mistakes, wrong rounding, mutated inputs…).

What the function does:

Return the titles of songs whose `artist` equals `value`, sorted by `plays` **highest first**. One chain of array methods is enough.

Tips: test the edges (an empty array, values exactly at a threshold, ties), not just one happy path. Use `toEqual` for arrays and objects.
