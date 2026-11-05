---
slug: "debug-students-above"
title: "Debug: Students with a score above a limit"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Students with a score above a limit

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an off-by-one at a boundary. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the name of every student whose `score` is **greater than** `min`, in the original order.

The tests call your function with this data (also available as `STUDENTS` in the tests):

```js
const STUDENTS = [
  {id: 1, name: "Gita", score: 72, age: 30, course: "design", graduated: false},
  {id: 2, name: "Chen", score: 47, age: 18, course: "web", graduated: false},
  {id: 3, name: "Keiko", score: 87, age: 28, course: "data", graduated: true},
  {id: 4, name: "Luca", score: 95, age: 26, course: "design", graduated: false},
  {id: 5, name: "Femi", score: 45, age: 27, course: "web", graduated: true},
  {id: 6, name: "Jonah", score: 47, age: 24, course: "data", graduated: false},
  {id: 7, name: "Bilal", score: 56, age: 19, course: "web", graduated: false},
  {id: 8, name: "Dara", score: 96, age: 30, course: "web", graduated: false}
]
```
