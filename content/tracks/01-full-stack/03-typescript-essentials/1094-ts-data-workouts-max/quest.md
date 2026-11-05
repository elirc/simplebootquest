---
slug: "ts-data-workouts-max"
title: "Data: The workout with the highest calories burned"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The workout with the highest calories burned

Return the label of the workout with the **highest** `calories`. If several tie, return the first. Return `null` for an empty list.

The tests call your function with this data (also available as `WORKOUTS` in the tests):

```js
const WORKOUTS = [
  {id: 1, label: "Thu yoga", minutes: 109, calories: 678, kind: "mobility"},
  {id: 2, label: "Sun walk", minutes: 66, calories: 700, kind: "strength"},
  {id: 3, label: "Sat ride", minutes: 72, calories: 204, kind: "strength"},
  {id: 4, label: "Thu ride", minutes: 54, calories: 804, kind: "strength"},
  {id: 5, label: "Wed lift", minutes: 20, calories: 850, kind: "strength"},
  {id: 6, label: "Tue run", minutes: 68, calories: 683, kind: "mobility"},
  {id: 7, label: "Wed swim", minutes: 101, calories: 209, kind: "strength"},
  {id: 8, label: "Mon run", minutes: 70, calories: 243, kind: "mobility"}
]
```

Type the parameters and the return value. The interface is already written for you.
