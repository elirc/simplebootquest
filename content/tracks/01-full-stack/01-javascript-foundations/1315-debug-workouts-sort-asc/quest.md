---
slug: "debug-workouts-sort-asc"
title: "Debug: Sort workouts by calories burned"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Sort workouts by calories burned

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes results in the wrong order. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the labels sorted by `calories` from **lowest to highest**. Ties keep their original order. Don't mutate the input array.

The tests call your function with this data (also available as `WORKOUTS` in the tests):

```js
const WORKOUTS = [
  {id: 1, label: "Sat ride", minutes: 34, calories: 613, kind: "strength"},
  {id: 2, label: "Fri run", minutes: 54, calories: 296, kind: "strength"},
  {id: 3, label: "Thu ride", minutes: 89, calories: 622, kind: "mobility"},
  {id: 4, label: "Tue swim", minutes: 111, calories: 548, kind: "strength"},
  {id: 5, label: "Mon lift", minutes: 32, calories: 743, kind: "strength"},
  {id: 6, label: "Sun walk", minutes: 72, calories: 549, kind: "mobility"},
  {id: 7, label: "Tue run", minutes: 94, calories: 679, kind: "mobility"},
  {id: 8, label: "Thu yoga", minutes: 97, calories: 783, kind: "mobility"}
]
```
