---
slug: "ts-data-workouts-every-some"
title: "Data: Are all workouts under a calories burned limit?"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Are all workouts under a calories burned limit?

Return `true` if **every** workout has `calories` below `limit` (and `true` for an empty list, like `Array.prototype.every`).

The tests call your function with this data (also available as `WORKOUTS` in the tests):

```js
const WORKOUTS = [
  {id: 1, label: "Sun walk", minutes: 26, calories: 488, kind: "strength"},
  {id: 2, label: "Tue swim", minutes: 106, calories: 608, kind: "cardio"},
  {id: 3, label: "Mon lift", minutes: 33, calories: 497, kind: "mobility"},
  {id: 4, label: "Thu yoga", minutes: 57, calories: 871, kind: "cardio"},
  {id: 5, label: "Mon run", minutes: 100, calories: 643, kind: "mobility"},
  {id: 6, label: "Fri run", minutes: 89, calories: 396, kind: "cardio"},
  {id: 7, label: "Wed swim", minutes: 54, calories: 94, kind: "mobility"},
  {id: 8, label: "Tue run", minutes: 25, calories: 376, kind: "cardio"}
]
```

Type the parameters and the return value. The interface is already written for you.
