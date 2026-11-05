---
slug: "wt-hotels-top-n"
title: "Test It: Top hotels by nightly price"
type: "code"
language: "js"
mode: "write-tests"
xp: 20
optional: true
section: "Practice: Test It (Mutation Graded)"
---
# Test It: Top hotels by nightly price

The **Code under test** tab has a correct `topHotelsByNightlyPrice` and its dataset `HOTELS`. Write tests that pass against it **and** catch 3 hidden buggy versions (boundary mistakes, wrong rounding, mutated inputs…).

What the function does:

Return the names of the `n` hotels with the **highest** `nightlyPrice`, highest first. Don't mutate the input.

Tips: test the edges (an empty array, values exactly at a threshold, ties), not just one happy path. Use `toEqual` for arrays and objects.
