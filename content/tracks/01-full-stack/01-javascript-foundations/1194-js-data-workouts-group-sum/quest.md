---
slug: "js-data-workouts-group-sum"
title: "Data: Total duration (minutes) per kind"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Total duration (minutes) per kind

Return an object mapping each `kind` to the **sum** of `minutes` for workouts in it.

The tests call your function with this data (also available as `WORKOUTS` in the tests):

```js
const WORKOUTS = [
  {id: 1, label: "Wed lift", minutes: 119, calories: 197, kind: "mobility"},
  {id: 2, label: "Wed swim", minutes: 102, calories: 181, kind: "mobility"},
  {id: 3, label: "Tue run", minutes: 56, calories: 775, kind: "strength"},
  {id: 4, label: "Thu yoga", minutes: 38, calories: 552, kind: "cardio"},
  {id: 5, label: "Fri yoga", minutes: 34, calories: 187, kind: "mobility"},
  {id: 6, label: "Sun walk", minutes: 41, calories: 664, kind: "mobility"},
  {id: 7, label: "Fri run", minutes: 74, calories: 800, kind: "mobility"},
  {id: 8, label: "Mon lift", minutes: 20, calories: 737, kind: "mobility"}
]
```
