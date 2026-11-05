---
slug: "wt-flights-top-n"
title: "Test It: Top flights by delay (minutes)"
type: "code"
language: "js"
mode: "write-tests"
xp: 20
optional: true
section: "Practice: Test It (Mutation Graded)"
---
# Test It: Top flights by delay (minutes)

The **Code under test** tab has a correct `topFlightsByDelayMin` and its dataset `FLIGHTS`. Write tests that pass against it **and** catch 3 hidden buggy versions (boundary mistakes, wrong rounding, mutated inputs…).

What the function does:

Return the numbers of the `n` flights with the **highest** `delayMin`, highest first. Don't mutate the input.

Tips: test the edges (an empty array, values exactly at a threshold, ties), not just one happy path. Use `toEqual` for arrays and objects.
