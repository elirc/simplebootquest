---
slug: "js-data-workouts-between"
title: "Data: Workouts in a duration (minutes) range"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Workouts in a duration (minutes) range

Return the labels of workouts whose `minutes` is between `low` and `high` **inclusive**. Use `filter` and `map`.

The tests call your function with this data (also available as `WORKOUTS` in the tests):

```js
const WORKOUTS = [
  {id: 1, label: "Wed lift", minutes: 33, calories: 442, kind: "strength"},
  {id: 2, label: "Sun walk", minutes: 20, calories: 214, kind: "mobility"},
  {id: 3, label: "Tue run", minutes: 50, calories: 526, kind: "mobility"},
  {id: 4, label: "Fri yoga", minutes: 56, calories: 613, kind: "mobility"},
  {id: 5, label: "Mon lift", minutes: 89, calories: 714, kind: "cardio"},
  {id: 6, label: "Thu yoga", minutes: 62, calories: 262, kind: "strength"},
  {id: 7, label: "Sat ride", minutes: 52, calories: 642, kind: "cardio"},
  {id: 8, label: "Wed swim", minutes: 80, calories: 176, kind: "mobility"}
]
```
