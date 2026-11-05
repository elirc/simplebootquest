---
slug: "js-data-workouts-count-cat"
title: "Data: Count workouts by kind"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Count workouts by kind

Return how many workouts have `kind` equal to `value`.

The tests call your function with this data (also available as `WORKOUTS` in the tests):

```js
const WORKOUTS = [
  {id: 1, label: "Fri run", minutes: 85, calories: 708, kind: "mobility"},
  {id: 2, label: "Tue swim", minutes: 114, calories: 417, kind: "mobility"},
  {id: 3, label: "Sun walk", minutes: 119, calories: 574, kind: "cardio"},
  {id: 4, label: "Thu ride", minutes: 38, calories: 647, kind: "strength"},
  {id: 5, label: "Wed lift", minutes: 77, calories: 475, kind: "cardio"},
  {id: 6, label: "Mon run", minutes: 116, calories: 681, kind: "mobility"},
  {id: 7, label: "Fri yoga", minutes: 105, calories: 124, kind: "cardio"},
  {id: 8, label: "Tue run", minutes: 95, calories: 159, kind: "cardio"}
]
```
