---
slug: "js-data-workouts-chain"
title: "Data: Filter, sort, map: workouts in one kind"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Filter, sort, map: workouts in one kind

Return the labels of workouts whose `kind` equals `value`, sorted by `minutes` **highest first**. One chain of array methods is enough.

The tests call your function with this data (also available as `WORKOUTS` in the tests):

```js
const WORKOUTS = [
  {id: 1, label: "Sun walk", minutes: 68, calories: 624, kind: "mobility"},
  {id: 2, label: "Sat ride", minutes: 24, calories: 199, kind: "cardio"},
  {id: 3, label: "Mon lift", minutes: 54, calories: 280, kind: "cardio"},
  {id: 4, label: "Mon run", minutes: 44, calories: 555, kind: "strength"},
  {id: 5, label: "Fri run", minutes: 48, calories: 93, kind: "mobility"},
  {id: 6, label: "Wed lift", minutes: 117, calories: 767, kind: "cardio"},
  {id: 7, label: "Fri yoga", minutes: 98, calories: 652, kind: "mobility"},
  {id: 8, label: "Tue swim", minutes: 76, calories: 87, kind: "mobility"}
]
```
