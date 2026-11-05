---
slug: "debug-workouts-avg-per"
title: "Debug: Average duration (minutes) per kind"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Average duration (minutes) per kind

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes wrong rounding. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return an object mapping each `kind` to the average `minutes` of its workouts, rounded to a whole number.

The tests call your function with this data (also available as `WORKOUTS` in the tests):

```js
const WORKOUTS = [
  {id: 1, label: "Fri yoga", minutes: 83, calories: 138, kind: "mobility"},
  {id: 2, label: "Tue swim", minutes: 91, calories: 889, kind: "strength"},
  {id: 3, label: "Mon lift", minutes: 105, calories: 286, kind: "mobility"},
  {id: 4, label: "Sat ride", minutes: 44, calories: 515, kind: "cardio"},
  {id: 5, label: "Thu yoga", minutes: 107, calories: 761, kind: "mobility"},
  {id: 6, label: "Mon run", minutes: 95, calories: 444, kind: "cardio"},
  {id: 7, label: "Fri run", minutes: 39, calories: 281, kind: "cardio"},
  {id: 8, label: "Wed lift", minutes: 100, calories: 823, kind: "mobility"}
]
```
