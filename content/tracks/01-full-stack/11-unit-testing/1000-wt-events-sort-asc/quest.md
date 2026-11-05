---
slug: "wt-events-sort-asc"
title: "Test It: Sort events by registrations"
type: "code"
language: "js"
mode: "write-tests"
xp: 20
optional: true
section: "Practice: Test It (Mutation Graded)"
---
# Test It: Sort events by registrations

The **Code under test** tab has a correct `eventsByRegistered` and its dataset `EVENTS`. Write tests that pass against it **and** catch 2 hidden buggy versions (boundary mistakes, wrong rounding, mutated inputs…).

What the function does:

Return the names sorted by `registered` from **lowest to highest**. Ties keep their original order. Don't mutate the input array.

Tips: test the edges (an empty array, values exactly at a threshold, ties), not just one happy path. Use `toEqual` for arrays and objects.
