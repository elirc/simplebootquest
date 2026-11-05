---
slug: "wt-flights-update"
title: "Test It: Update flights immutably"
type: "code"
language: "js"
mode: "write-tests"
xp: 20
optional: true
section: "Practice: Test It (Mutation Graded)"
---
# Test It: Update flights immutably

The **Code under test** tab has a correct `bumpDurationMin` and its dataset `FLIGHTS`. Write tests that pass against it **and** catch 2 hidden buggy versions (boundary mistakes, wrong rounding, mutated inputs…).

What the function does:

Return a **new** array where every flight with `airline` equal to `value` has `durationMin` increased by `amount`. Other flights are unchanged. **Don't mutate** the input objects (React state depends on this).

Tips: test the edges (an empty array, values exactly at a threshold, ties), not just one happy path. Use `toEqual` for arrays and objects.
