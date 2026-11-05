---
slug: "js-data-workouts-paginate"
title: "Data: Paginate workouts"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Paginate workouts

Return `{ items, page, totalPages }` where `items` are the labels on page `page` (1-based) of size `size`. Out-of-range pages return an empty `items` array.

The tests call your function with this data (also available as `WORKOUTS` in the tests):

```js
const WORKOUTS = [
  {id: 1, label: "Mon lift", minutes: 93, calories: 848, kind: "strength"},
  {id: 2, label: "Mon run", minutes: 31, calories: 105, kind: "mobility"},
  {id: 3, label: "Fri yoga", minutes: 41, calories: 532, kind: "cardio"},
  {id: 4, label: "Wed lift", minutes: 40, calories: 222, kind: "cardio"},
  {id: 5, label: "Sat ride", minutes: 85, calories: 115, kind: "mobility"},
  {id: 6, label: "Tue run", minutes: 68, calories: 778, kind: "strength"},
  {id: 7, label: "Sun walk", minutes: 65, calories: 587, kind: "strength"},
  {id: 8, label: "Wed swim", minutes: 85, calories: 288, kind: "cardio"}
]
```
