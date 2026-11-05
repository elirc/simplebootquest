---
slug: "js-data-students-group-sum"
title: "Data: Total score per course"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Total score per course

Return an object mapping each `course` to the **sum** of `score` for students in it.

The tests call your function with this data (also available as `STUDENTS` in the tests):

```js
const STUDENTS = [
  {id: 1, name: "Keiko", score: 45, age: 24, course: "data", graduated: false},
  {id: 2, name: "Jonah", score: 72, age: 22, course: "data", graduated: false},
  {id: 3, name: "Femi", score: 72, age: 18, course: "web", graduated: false},
  {id: 4, name: "Luca", score: 84, age: 24, course: "web", graduated: true},
  {id: 5, name: "Hugo", score: 60, age: 31, course: "web", graduated: true},
  {id: 6, name: "Chen", score: 32, age: 31, course: "design", graduated: false},
  {id: 7, name: "Ines", score: 87, age: 33, course: "design", graduated: false},
  {id: 8, name: "Dara", score: 82, age: 28, course: "web", graduated: false}
]
```
