---
slug: "js-data-students-lookup"
title: "Data: Look up a student's score"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Look up a student's score

Return the `score` of the student whose name is `name`, or `null` if there isn't one.

The tests call your function with this data (also available as `STUDENTS` in the tests):

```js
const STUDENTS = [
  {id: 1, name: "Chen", score: 62, age: 25, course: "web", graduated: false},
  {id: 2, name: "Ines", score: 39, age: 28, course: "data", graduated: true},
  {id: 3, name: "Dara", score: 89, age: 27, course: "data", graduated: true},
  {id: 4, name: "Amara", score: 57, age: 26, course: "design", graduated: true},
  {id: 5, name: "Luca", score: 71, age: 29, course: "design", graduated: true},
  {id: 6, name: "Elif", score: 88, age: 22, course: "data", graduated: true},
  {id: 7, name: "Jonah", score: 43, age: 31, course: "web", graduated: false},
  {id: 8, name: "Gita", score: 56, age: 21, course: "web", graduated: true}
]
```
