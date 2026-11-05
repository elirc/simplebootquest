---
slug: "js-data-workouts-diff"
title: "Data: What changed between two snapshots?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# What changed between two snapshots?

Given yesterday's and today's workouts (same ids), return the ids whose `minutes` changed, in today's order.

The tests call your function with this data (also available as `BEFORE` / `AFTER` in the tests):

```js
const BEFORE = [
  {id: 1, label: "Mon lift", minutes: 62, calories: 533, kind: "cardio"},
  {id: 2, label: "Thu ride", minutes: 40, calories: 457, kind: "cardio"},
  {id: 3, label: "Fri run", minutes: 31, calories: 512, kind: "strength"},
  {id: 4, label: "Tue swim", minutes: 115, calories: 890, kind: "cardio"},
  {id: 5, label: "Thu yoga", minutes: 108, calories: 703, kind: "mobility"},
  {id: 6, label: "Mon run", minutes: 38, calories: 862, kind: "strength"},
  {id: 7, label: "Wed swim", minutes: 25, calories: 227, kind: "mobility"},
  {id: 8, label: "Fri yoga", minutes: 85, calories: 412, kind: "cardio"}
]
```
