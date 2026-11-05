---
slug: "wt-workouts-sort-asc"
title: "Test It: Sort workouts by duration (minutes)"
type: "code"
language: "js"
mode: "write-tests"
xp: 20
optional: true
section: "Practice: Test It (Mutation Graded)"
---
# Test It: Sort workouts by duration (minutes)

The **Code under test** tab has a correct `workoutsByMinutes` and its dataset `WORKOUTS`. Write tests that pass against it **and** catch 2 hidden buggy versions (boundary mistakes, wrong rounding, mutated inputs…).

What the function does:

Return the labels sorted by `minutes` from **lowest to highest**. Ties keep their original order. Don't mutate the input array.

Tips: test the edges (an empty array, values exactly at a threshold, ties), not just one happy path. Use `toEqual` for arrays and objects.
