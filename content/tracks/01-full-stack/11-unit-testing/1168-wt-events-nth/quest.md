---
slug: "wt-events-nth"
title: "Test It: The n-th event by registrations"
type: "code"
language: "js"
mode: "write-tests"
xp: 20
optional: true
section: "Practice: Test It (Mutation Graded)"
---
# Test It: The n-th event by registrations

The **Code under test** tab has a correct `nthByRegistered` and its dataset `EVENTS`. Write tests that pass against it **and** catch 3 hidden buggy versions (boundary mistakes, wrong rounding, mutated inputs…).

What the function does:

Return the name of the event ranked `n` (1 = highest `registered`), or `null` if `n` is out of range.

Tips: test the edges (an empty array, values exactly at a threshold, ties), not just one happy path. Use `toEqual` for arrays and objects.
