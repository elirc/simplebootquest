---
slug: "js-data-workouts-max"
title: "Data: The workout with the highest calories burned"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The workout with the highest calories burned

Return the label of the workout with the **highest** `calories`. If several tie, return the first. Return `null` for an empty list.

The tests call your function with this data (also available as `WORKOUTS` in the tests):

```js
const WORKOUTS = [
  {id: 1, label: "Fri run", minutes: 97, calories: 767, kind: "strength"},
  {id: 2, label: "Sun walk", minutes: 46, calories: 221, kind: "cardio"},
  {id: 3, label: "Sat ride", minutes: 23, calories: 158, kind: "cardio"},
  {id: 4, label: "Thu ride", minutes: 102, calories: 788, kind: "cardio"},
  {id: 5, label: "Mon run", minutes: 81, calories: 661, kind: "mobility"},
  {id: 6, label: "Thu yoga", minutes: 36, calories: 347, kind: "cardio"},
  {id: 7, label: "Mon lift", minutes: 83, calories: 113, kind: "strength"},
  {id: 8, label: "Wed swim", minutes: 62, calories: 834, kind: "strength"}
]
```
