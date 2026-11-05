---
slug: "js-data-students-every-some"
title: "Data: Are all students under a score limit?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Are all students under a score limit?

Return `true` if **every** student has `score` below `limit` (and `true` for an empty list, like `Array.prototype.every`).

The tests call your function with this data (also available as `STUDENTS` in the tests):

```js
const STUDENTS = [
  {id: 1, name: "Elif", score: 47, age: 21, course: "data", graduated: false},
  {id: 2, name: "Femi", score: 54, age: 27, course: "design", graduated: true},
  {id: 3, name: "Amara", score: 82, age: 20, course: "web", graduated: false},
  {id: 4, name: "Bilal", score: 51, age: 32, course: "data", graduated: true},
  {id: 5, name: "Gita", score: 92, age: 26, course: "web", graduated: true},
  {id: 6, name: "Luca", score: 98, age: 28, course: "design", graduated: false},
  {id: 7, name: "Dara", score: 70, age: 24, course: "design", graduated: true},
  {id: 8, name: "Chen", score: 84, age: 28, course: "web", graduated: false}
]
```
