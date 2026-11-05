---
slug: "js-data-students-diff"
title: "Data: What changed between two snapshots?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# What changed between two snapshots?

Given yesterday's and today's students (same ids), return the ids whose `score` changed, in today's order.

The tests call your function with this data (also available as `BEFORE` / `AFTER` in the tests):

```js
const BEFORE = [
  {id: 1, name: "Hugo", score: 48, age: 31, course: "data", graduated: true},
  {id: 2, name: "Dara", score: 86, age: 25, course: "data", graduated: false},
  {id: 3, name: "Jonah", score: 54, age: 23, course: "web", graduated: true},
  {id: 4, name: "Amara", score: 51, age: 28, course: "web", graduated: false},
  {id: 5, name: "Luca", score: 47, age: 26, course: "web", graduated: true},
  {id: 6, name: "Bilal", score: 74, age: 21, course: "data", graduated: false},
  {id: 7, name: "Keiko", score: 59, age: 27, course: "design", graduated: true},
  {id: 8, name: "Femi", score: 64, age: 22, course: "data", graduated: true}
]
```
