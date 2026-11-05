---
slug: "js-data-students-index"
title: "Data: Index students by id"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Index students by id

Return an object mapping each `id` to the student's name, for fast lookups.

The tests call your function with this data (also available as `STUDENTS` in the tests):

```js
const STUDENTS = [
  {id: 1, name: "Ines", score: 94, age: 18, course: "data", graduated: true},
  {id: 2, name: "Chen", score: 88, age: 25, course: "design", graduated: true},
  {id: 3, name: "Amara", score: 61, age: 19, course: "web", graduated: false},
  {id: 4, name: "Luca", score: 44, age: 21, course: "web", graduated: false},
  {id: 5, name: "Jonah", score: 33, age: 28, course: "data", graduated: true},
  {id: 6, name: "Hugo", score: 91, age: 31, course: "data", graduated: true},
  {id: 7, name: "Bilal", score: 96, age: 19, course: "data", graduated: true},
  {id: 8, name: "Elif", score: 99, age: 19, course: "web", graduated: true}
]
```
