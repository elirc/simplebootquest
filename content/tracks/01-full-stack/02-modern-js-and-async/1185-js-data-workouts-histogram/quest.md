---
slug: "js-data-workouts-histogram"
title: "Data: Bucket workouts by calories burned"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Bucket workouts by calories burned

Group workouts into buckets of width `width` by `calories`: the bucket key is `Math.floor(value / width) * width`. Return an object of bucket → count.

The tests call your function with this data (also available as `WORKOUTS` in the tests):

```js
const WORKOUTS = [
  {id: 1, label: "Sat ride", minutes: 99, calories: 865, kind: "cardio"},
  {id: 2, label: "Sun walk", minutes: 85, calories: 310, kind: "cardio"},
  {id: 3, label: "Wed swim", minutes: 109, calories: 111, kind: "mobility"},
  {id: 4, label: "Mon run", minutes: 71, calories: 93, kind: "cardio"},
  {id: 5, label: "Tue swim", minutes: 83, calories: 721, kind: "mobility"},
  {id: 6, label: "Mon lift", minutes: 80, calories: 121, kind: "cardio"},
  {id: 7, label: "Thu yoga", minutes: 15, calories: 799, kind: "strength"},
  {id: 8, label: "Wed lift", minutes: 65, calories: 866, kind: "strength"}
]
```
