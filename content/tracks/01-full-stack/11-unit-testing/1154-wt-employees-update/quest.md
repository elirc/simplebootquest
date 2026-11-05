---
slug: "wt-employees-update"
title: "Test It: Update employees immutably"
type: "code"
language: "js"
mode: "write-tests"
xp: 20
optional: true
section: "Practice: Test It (Mutation Graded)"
---
# Test It: Update employees immutably

The **Code under test** tab has a correct `bumpYearsAtCompany` and its dataset `EMPLOYEES`. Write tests that pass against it **and** catch 2 hidden buggy versions (boundary mistakes, wrong rounding, mutated inputs…).

What the function does:

Return a **new** array where every employee with `team` equal to `value` has `yearsAtCompany` increased by `amount`. Other employees are unchanged. **Don't mutate** the input objects (React state depends on this).

Tips: test the edges (an empty array, values exactly at a threshold, ties), not just one happy path. Use `toEqual` for arrays and objects.
