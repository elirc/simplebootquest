---
slug: "wt-flights-chain"
title: "Test It: Filter, sort, map: flights in one airline group"
type: "code"
language: "js"
mode: "write-tests"
xp: 20
optional: true
section: "Practice: Test It (Mutation Graded)"
---
# Test It: Filter, sort, map: flights in one airline group

The **Code under test** tab has a correct `flightsInAirlineRanked` and its dataset `FLIGHTS`. Write tests that pass against it **and** catch 2 hidden buggy versions (boundary mistakes, wrong rounding, mutated inputs…).

What the function does:

Return the numbers of flights whose `airline` equals `value`, sorted by `durationMin` **highest first**. One chain of array methods is enough.

Tips: test the edges (an empty array, values exactly at a threshold, ties), not just one happy path. Use `toEqual` for arrays and objects.
