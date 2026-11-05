---
slug: "wt-employees-chain"
title: "Test It: Filter, sort, map: employees in one team"
type: "code"
language: "js"
mode: "write-tests"
xp: 20
optional: true
section: "Practice: Test It (Mutation Graded)"
---
# Test It: Filter, sort, map: employees in one team

The **Code under test** tab has a correct `employeesInTeamRanked` and its dataset `EMPLOYEES`. Write tests that pass against it **and** catch 2 hidden buggy versions (boundary mistakes, wrong rounding, mutated inputs…).

What the function does:

Return the names of employees whose `team` equals `value`, sorted by `salary` **highest first**. One chain of array methods is enough.

Tips: test the edges (an empty array, values exactly at a threshold, ties), not just one happy path. Use `toEqual` for arrays and objects.
