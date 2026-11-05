---
slug: "js-data-workouts-every-some"
title: "Data: Are all workouts under a calories burned limit?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Are all workouts under a calories burned limit?

Return `true` if **every** workout has `calories` below `limit` (and `true` for an empty list, like `Array.prototype.every`).

The tests call your function with this data (also available as `WORKOUTS` in the tests):

```js
const WORKOUTS = [
  {id: 1, label: "Mon run", minutes: 94, calories: 544, kind: "mobility"},
  {id: 2, label: "Thu yoga", minutes: 26, calories: 264, kind: "cardio"},
  {id: 3, label: "Thu ride", minutes: 81, calories: 882, kind: "strength"},
  {id: 4, label: "Mon lift", minutes: 50, calories: 241, kind: "strength"},
  {id: 5, label: "Sat ride", minutes: 93, calories: 340, kind: "strength"},
  {id: 6, label: "Tue swim", minutes: 113, calories: 322, kind: "strength"},
  {id: 7, label: "Sun walk", minutes: 39, calories: 100, kind: "strength"},
  {id: 8, label: "Fri run", minutes: 49, calories: 316, kind: "cardio"}
]
```
