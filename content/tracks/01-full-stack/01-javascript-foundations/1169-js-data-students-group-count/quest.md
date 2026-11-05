---
slug: "js-data-students-group-count"
title: "Data: How many students per course?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# How many students per course?

Return an object mapping each `course` to the number of students with it. Only include values that appear.

The tests call your function with this data (also available as `STUDENTS` in the tests):

```js
const STUDENTS = [
  {id: 1, name: "Femi", score: 45, age: 25, course: "data", graduated: false},
  {id: 2, name: "Keiko", score: 57, age: 30, course: "design", graduated: false},
  {id: 3, name: "Luca", score: 35, age: 19, course: "design", graduated: true},
  {id: 4, name: "Dara", score: 32, age: 19, course: "design", graduated: true},
  {id: 5, name: "Amara", score: 63, age: 22, course: "web", graduated: false},
  {id: 6, name: "Gita", score: 56, age: 19, course: "web", graduated: false},
  {id: 7, name: "Chen", score: 42, age: 24, course: "design", graduated: false},
  {id: 8, name: "Jonah", score: 69, age: 33, course: "data", graduated: true}
]
```
