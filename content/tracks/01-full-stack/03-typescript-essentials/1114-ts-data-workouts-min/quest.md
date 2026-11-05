---
slug: "ts-data-workouts-min"
title: "Data: The workout with the lowest duration (minutes)"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The workout with the lowest duration (minutes)

Return the label of the workout with the **lowest** `minutes` (first one on ties), or `null` for an empty list.

The tests call your function with this data (also available as `WORKOUTS` in the tests):

```js
const WORKOUTS = [
  {id: 1, label: "Tue swim", minutes: 74, calories: 491, kind: "mobility"},
  {id: 2, label: "Mon run", minutes: 58, calories: 80, kind: "mobility"},
  {id: 3, label: "Tue run", minutes: 90, calories: 601, kind: "cardio"},
  {id: 4, label: "Fri yoga", minutes: 15, calories: 500, kind: "mobility"},
  {id: 5, label: "Thu ride", minutes: 67, calories: 785, kind: "mobility"},
  {id: 6, label: "Wed lift", minutes: 21, calories: 360, kind: "strength"},
  {id: 7, label: "Fri run", minutes: 116, calories: 188, kind: "cardio"},
  {id: 8, label: "Wed swim", minutes: 106, calories: 783, kind: "mobility"}
]
```

Type the parameters and the return value. The interface is already written for you.
