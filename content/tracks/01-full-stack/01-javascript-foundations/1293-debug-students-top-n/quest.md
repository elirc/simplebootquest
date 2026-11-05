---
slug: "debug-students-top-n"
title: "Debug: Top students by age"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Top students by age

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes results in the wrong order. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the names of the `n` students with the **highest** `age`, highest first. Don't mutate the input.

The tests call your function with this data (also available as `STUDENTS` in the tests):

```js
const STUDENTS = [
  {id: 1, name: "Dara", score: 80, age: 26, course: "web", graduated: true},
  {id: 2, name: "Bilal", score: 95, age: 21, course: "design", graduated: true},
  {id: 3, name: "Amara", score: 47, age: 33, course: "design", graduated: false},
  {id: 4, name: "Ines", score: 38, age: 18, course: "data", graduated: true},
  {id: 5, name: "Jonah", score: 98, age: 20, course: "data", graduated: true},
  {id: 6, name: "Hugo", score: 79, age: 22, course: "data", graduated: true},
  {id: 7, name: "Gita", score: 71, age: 33, course: "data", graduated: true},
  {id: 8, name: "Femi", score: 86, age: 21, course: "web", graduated: true}
]
```
