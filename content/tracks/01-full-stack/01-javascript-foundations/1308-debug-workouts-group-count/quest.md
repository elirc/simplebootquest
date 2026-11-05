---
slug: "debug-workouts-group-count"
title: "Debug: How many workouts per kind?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: How many workouts per kind?

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes counts that are off by one. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return an object mapping each `kind` to the number of workouts with it. Only include values that appear.

The tests call your function with this data (also available as `WORKOUTS` in the tests):

```js
const WORKOUTS = [
  {id: 1, label: "Wed swim", minutes: 90, calories: 843, kind: "cardio"},
  {id: 2, label: "Fri yoga", minutes: 55, calories: 342, kind: "cardio"},
  {id: 3, label: "Wed lift", minutes: 78, calories: 353, kind: "cardio"},
  {id: 4, label: "Thu ride", minutes: 100, calories: 98, kind: "mobility"},
  {id: 5, label: "Fri run", minutes: 73, calories: 294, kind: "cardio"},
  {id: 6, label: "Thu yoga", minutes: 63, calories: 794, kind: "strength"},
  {id: 7, label: "Mon lift", minutes: 73, calories: 251, kind: "cardio"},
  {id: 8, label: "Sat ride", minutes: 33, calories: 724, kind: "mobility"}
]
```
