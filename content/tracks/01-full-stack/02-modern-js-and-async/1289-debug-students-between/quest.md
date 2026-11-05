---
slug: "debug-students-between"
title: "Debug: Students in a score range"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Students in a score range

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an off-by-one at a boundary. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the names of students whose `score` is between `low` and `high` **inclusive**. Use `filter` and `map`.

The tests call your function with this data (also available as `STUDENTS` in the tests):

```js
const STUDENTS = [
  {id: 1, name: "Ines", score: 84, age: 17, course: "design", graduated: true},
  {id: 2, name: "Dara", score: 80, age: 22, course: "design", graduated: false},
  {id: 3, name: "Hugo", score: 70, age: 32, course: "design", graduated: true},
  {id: 4, name: "Luca", score: 55, age: 18, course: "data", graduated: true},
  {id: 5, name: "Gita", score: 94, age: 26, course: "web", graduated: false},
  {id: 6, name: "Amara", score: 82, age: 26, course: "web", graduated: true},
  {id: 7, name: "Keiko", score: 59, age: 20, course: "design", graduated: false},
  {id: 8, name: "Femi", score: 77, age: 34, course: "data", graduated: false}
]
```
