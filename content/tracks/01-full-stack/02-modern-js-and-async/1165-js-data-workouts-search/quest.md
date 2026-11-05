---
slug: "js-data-workouts-search"
title: "Data: Search workouts by label"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Search workouts by label

Return the labels that **contain** `query`, ignoring case. An empty (or whitespace-only) query returns every label.

The tests call your function with this data (also available as `WORKOUTS` in the tests):

```js
const WORKOUTS = [
  {id: 1, label: "Tue swim", minutes: 20, calories: 696, kind: "mobility"},
  {id: 2, label: "Sat ride", minutes: 113, calories: 457, kind: "cardio"},
  {id: 3, label: "Thu ride", minutes: 95, calories: 274, kind: "mobility"},
  {id: 4, label: "Wed lift", minutes: 95, calories: 390, kind: "mobility"},
  {id: 5, label: "Thu yoga", minutes: 111, calories: 260, kind: "strength"},
  {id: 6, label: "Fri yoga", minutes: 17, calories: 760, kind: "strength"},
  {id: 7, label: "Mon lift", minutes: 35, calories: 691, kind: "mobility"},
  {id: 8, label: "Tue run", minutes: 83, calories: 544, kind: "cardio"}
]
```
