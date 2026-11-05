---
slug: "debug-workouts-sum"
title: "Debug: Total duration (minutes) of all workouts"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Total duration (minutes) of all workouts

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes a total that is off by one. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the sum of `minutes` across all workouts. An empty list totals 0.

The tests call your function with this data (also available as `WORKOUTS` in the tests):

```js
const WORKOUTS = [
  {id: 1, label: "Fri yoga", minutes: 41, calories: 881, kind: "strength"},
  {id: 2, label: "Thu ride", minutes: 28, calories: 670, kind: "mobility"},
  {id: 3, label: "Mon lift", minutes: 50, calories: 841, kind: "strength"},
  {id: 4, label: "Tue swim", minutes: 43, calories: 770, kind: "strength"},
  {id: 5, label: "Fri run", minutes: 96, calories: 718, kind: "mobility"},
  {id: 6, label: "Wed swim", minutes: 33, calories: 312, kind: "mobility"},
  {id: 7, label: "Wed lift", minutes: 39, calories: 92, kind: "strength"},
  {id: 8, label: "Sun walk", minutes: 38, calories: 357, kind: "mobility"}
]
```
