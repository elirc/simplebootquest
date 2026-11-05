---
slug: "js-data-workouts-index"
title: "Data: Index workouts by id"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Index workouts by id

Return an object mapping each `id` to the workout's label, for fast lookups.

The tests call your function with this data (also available as `WORKOUTS` in the tests):

```js
const WORKOUTS = [
  {id: 1, label: "Tue run", minutes: 43, calories: 873, kind: "cardio"},
  {id: 2, label: "Sun walk", minutes: 60, calories: 628, kind: "mobility"},
  {id: 3, label: "Wed swim", minutes: 26, calories: 447, kind: "mobility"},
  {id: 4, label: "Fri yoga", minutes: 50, calories: 125, kind: "mobility"},
  {id: 5, label: "Fri run", minutes: 55, calories: 291, kind: "cardio"},
  {id: 6, label: "Sat ride", minutes: 38, calories: 112, kind: "cardio"},
  {id: 7, label: "Wed lift", minutes: 120, calories: 714, kind: "strength"},
  {id: 8, label: "Thu yoga", minutes: 42, calories: 453, kind: "cardio"}
]
```
