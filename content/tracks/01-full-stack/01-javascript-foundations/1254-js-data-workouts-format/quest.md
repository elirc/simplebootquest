---
slug: "js-data-workouts-format"
title: "Data: Format workouts as labels"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Format workouts as labels

Return one string per workout: `"<label> (<minutes>)"`, e.g. `"Thu ride (66)"`.

The tests call your function with this data (also available as `WORKOUTS` in the tests):

```js
const WORKOUTS = [
  {id: 1, label: "Thu ride", minutes: 66, calories: 271, kind: "cardio"},
  {id: 2, label: "Mon lift", minutes: 71, calories: 851, kind: "cardio"},
  {id: 3, label: "Fri run", minutes: 77, calories: 178, kind: "strength"},
  {id: 4, label: "Tue run", minutes: 27, calories: 646, kind: "mobility"},
  {id: 5, label: "Tue swim", minutes: 57, calories: 314, kind: "mobility"},
  {id: 6, label: "Wed lift", minutes: 102, calories: 515, kind: "mobility"},
  {id: 7, label: "Fri yoga", minutes: 111, calories: 304, kind: "mobility"},
  {id: 8, label: "Thu yoga", minutes: 16, calories: 407, kind: "cardio"}
]
```
