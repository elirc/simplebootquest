---
slug: "debug-students-chain"
title: "Debug: Filter, sort, map: students in one course"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Filter, sort, map: students in one course

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes results in the wrong order. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the names of students whose `course` equals `value`, sorted by `score` **highest first**. One chain of array methods is enough.

The tests call your function with this data (also available as `STUDENTS` in the tests):

```js
const STUDENTS = [
  {id: 1, name: "Dara", score: 85, age: 19, course: "web", graduated: false},
  {id: 2, name: "Luca", score: 51, age: 19, course: "web", graduated: true},
  {id: 3, name: "Amara", score: 59, age: 22, course: "web", graduated: true},
  {id: 4, name: "Hugo", score: 38, age: 20, course: "web", graduated: false},
  {id: 5, name: "Chen", score: 88, age: 29, course: "design", graduated: false},
  {id: 6, name: "Jonah", score: 71, age: 31, course: "design", graduated: false},
  {id: 7, name: "Ines", score: 33, age: 34, course: "design", graduated: false},
  {id: 8, name: "Bilal", score: 50, age: 19, course: "data", graduated: true}
]
```
