---
slug: "js-data-students-sum"
title: "Data: Total age of all students"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Total age of all students

Return the sum of `age` across all students. An empty list totals 0.

The tests call your function with this data (also available as `STUDENTS` in the tests):

```js
const STUDENTS = [
  {id: 1, name: "Dara", score: 47, age: 25, course: "web", graduated: false},
  {id: 2, name: "Elif", score: 75, age: 23, course: "web", graduated: false},
  {id: 3, name: "Keiko", score: 74, age: 25, course: "design", graduated: true},
  {id: 4, name: "Chen", score: 61, age: 29, course: "design", graduated: true},
  {id: 5, name: "Amara", score: 55, age: 24, course: "data", graduated: false},
  {id: 6, name: "Bilal", score: 74, age: 31, course: "design", graduated: true},
  {id: 7, name: "Ines", score: 58, age: 25, course: "design", graduated: false},
  {id: 8, name: "Luca", score: 71, age: 20, course: "data", graduated: false}
]
```
