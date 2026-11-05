---
slug: "ts-data-students-every-some"
title: "Data: Are all students under a score limit?"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Are all students under a score limit?

Return `true` if **every** student has `score` below `limit` (and `true` for an empty list, like `Array.prototype.every`).

The tests call your function with this data (also available as `STUDENTS` in the tests):

```js
const STUDENTS = [
  {id: 1, name: "Dara", score: 39, age: 23, course: "web", graduated: false},
  {id: 2, name: "Amara", score: 90, age: 21, course: "web", graduated: true},
  {id: 3, name: "Luca", score: 37, age: 17, course: "data", graduated: false},
  {id: 4, name: "Chen", score: 80, age: 18, course: "design", graduated: true},
  {id: 5, name: "Gita", score: 67, age: 24, course: "design", graduated: true},
  {id: 6, name: "Keiko", score: 98, age: 18, course: "design", graduated: false},
  {id: 7, name: "Ines", score: 60, age: 18, course: "design", graduated: true},
  {id: 8, name: "Jonah", score: 100, age: 19, course: "web", graduated: true}
]
```

Type the parameters and the return value. The interface is already written for you.
