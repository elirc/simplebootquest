---
slug: "debug-workouts-lookup"
title: "Debug: Look up a workout's duration (minutes)"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Look up a workout's duration (minutes)

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an inverted condition. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the `minutes` of the workout whose label is `label`, or `null` if there isn't one.

The tests call your function with this data (also available as `WORKOUTS` in the tests):

```js
const WORKOUTS = [
  {id: 1, label: "Thu ride", minutes: 108, calories: 694, kind: "strength"},
  {id: 2, label: "Fri run", minutes: 94, calories: 321, kind: "strength"},
  {id: 3, label: "Wed swim", minutes: 87, calories: 353, kind: "mobility"},
  {id: 4, label: "Mon lift", minutes: 88, calories: 254, kind: "strength"},
  {id: 5, label: "Fri yoga", minutes: 61, calories: 540, kind: "mobility"},
  {id: 6, label: "Wed lift", minutes: 106, calories: 132, kind: "strength"},
  {id: 7, label: "Thu yoga", minutes: 37, calories: 545, kind: "cardio"},
  {id: 8, label: "Mon run", minutes: 34, calories: 125, kind: "strength"}
]
```
