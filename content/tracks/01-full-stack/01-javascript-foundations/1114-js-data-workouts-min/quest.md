---
slug: "js-data-workouts-min"
title: "Data: The workout with the lowest duration (minutes)"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The workout with the lowest duration (minutes)

Return the label of the workout with the **lowest** `minutes` (first one on ties), or `null` for an empty list.

The tests call your function with this data (also available as `WORKOUTS` in the tests):

```js
const WORKOUTS = [
  {id: 1, label: "Wed lift", minutes: 113, calories: 297, kind: "strength"},
  {id: 2, label: "Fri run", minutes: 88, calories: 707, kind: "strength"},
  {id: 3, label: "Wed swim", minutes: 85, calories: 721, kind: "mobility"},
  {id: 4, label: "Sun walk", minutes: 63, calories: 204, kind: "cardio"},
  {id: 5, label: "Thu yoga", minutes: 106, calories: 556, kind: "cardio"},
  {id: 6, label: "Tue run", minutes: 44, calories: 395, kind: "cardio"},
  {id: 7, label: "Fri yoga", minutes: 23, calories: 716, kind: "strength"},
  {id: 8, label: "Thu ride", minutes: 79, calories: 83, kind: "cardio"}
]
```
