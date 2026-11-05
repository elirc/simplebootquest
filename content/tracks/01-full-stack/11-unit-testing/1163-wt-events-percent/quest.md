---
slug: "wt-events-percent"
title: "Test It: What share of events are free?"
type: "code"
language: "js"
mode: "write-tests"
xp: 20
optional: true
section: "Practice: Test It (Mutation Graded)"
---
# Test It: What share of events are free?

The **Code under test** tab has a correct `percentFree` and its dataset `EVENTS`. Write tests that pass against it **and** catch 2 hidden buggy versions (boundary mistakes, wrong rounding, mutated inputs…).

What the function does:

Return the percentage (0–100, rounded to a whole number) of events where `free` is true. Return 0 for an empty list.

Tips: test the edges (an empty array, values exactly at a threshold, ties), not just one happy path. Use `toEqual` for arrays and objects.
