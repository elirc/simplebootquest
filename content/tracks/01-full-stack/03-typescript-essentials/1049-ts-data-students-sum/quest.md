---
slug: "ts-data-students-sum"
title: "Data: Total age of all students"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Total age of all students

Return the sum of `age` across all students. An empty list totals 0.

The tests call your function with this data (also available as `STUDENTS` in the tests):

```js
const STUDENTS = [
  {id: 1, name: "Bilal", score: 75, age: 26, course: "web", graduated: true},
  {id: 2, name: "Chen", score: 41, age: 24, course: "design", graduated: true},
  {id: 3, name: "Luca", score: 98, age: 30, course: "data", graduated: true},
  {id: 4, name: "Ines", score: 63, age: 20, course: "design", graduated: true},
  {id: 5, name: "Hugo", score: 63, age: 25, course: "data", graduated: false},
  {id: 6, name: "Amara", score: 100, age: 18, course: "web", graduated: false},
  {id: 7, name: "Jonah", score: 49, age: 33, course: "design", graduated: false},
  {id: 8, name: "Keiko", score: 61, age: 30, course: "web", graduated: true}
]
```

Type the parameters and the return value. The interface is already written for you.
