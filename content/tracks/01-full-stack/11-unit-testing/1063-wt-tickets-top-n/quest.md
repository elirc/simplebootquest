---
slug: "wt-tickets-top-n"
title: "Test It: Top tickets by age (hours)"
type: "code"
language: "js"
mode: "write-tests"
xp: 20
optional: true
section: "Practice: Test It (Mutation Graded)"
---
# Test It: Top tickets by age (hours)

The **Code under test** tab has a correct `topTicketsByAgeHours` and its dataset `TICKETS`. Write tests that pass against it **and** catch 3 hidden buggy versions (boundary mistakes, wrong rounding, mutated inputs…).

What the function does:

Return the subjects of the `n` tickets with the **highest** `ageHours`, highest first. Don't mutate the input.

Tips: test the edges (an empty array, values exactly at a threshold, ties), not just one happy path. Use `toEqual` for arrays and objects.
