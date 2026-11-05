---
slug: "wt-tickets-between"
title: "Test It: Tickets in a age (hours) range"
type: "code"
language: "js"
mode: "write-tests"
xp: 20
optional: true
section: "Practice: Test It (Mutation Graded)"
---
# Test It: Tickets in a age (hours) range

The **Code under test** tab has a correct `ticketsInRange` and its dataset `TICKETS`. Write tests that pass against it **and** catch 2 hidden buggy versions (boundary mistakes, wrong rounding, mutated inputs…).

What the function does:

Return the subjects of tickets whose `ageHours` is between `low` and `high` **inclusive**. Use `filter` and `map`.

Tips: test the edges (an empty array, values exactly at a threshold, ties), not just one happy path. Use `toEqual` for arrays and objects.
