---
slug: "wt-events-between"
title: "Test It: Events in a capacity range"
type: "code"
language: "js"
mode: "write-tests"
xp: 20
optional: true
section: "Practice: Test It (Mutation Graded)"
---
# Test It: Events in a capacity range

The **Code under test** tab has a correct `eventsInRange` and its dataset `EVENTS`. Write tests that pass against it **and** catch 2 hidden buggy versions (boundary mistakes, wrong rounding, mutated inputs…).

What the function does:

Return the names of events whose `capacity` is between `low` and `high` **inclusive**. Use `filter` and `map`.

Tips: test the edges (an empty array, values exactly at a threshold, ties), not just one happy path. Use `toEqual` for arrays and objects.
