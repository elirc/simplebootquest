---
slug: "debug-students-lookup"
title: "Debug: Look up a student's score"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Look up a student's score

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an inverted condition. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the `score` of the student whose name is `name`, or `null` if there isn't one.

The tests call your function with this data (also available as `STUDENTS` in the tests):

```js
const STUDENTS = [
  {id: 1, name: "Keiko", score: 50, age: 18, course: "web", graduated: false},
  {id: 2, name: "Bilal", score: 52, age: 28, course: "web", graduated: true},
  {id: 3, name: "Amara", score: 69, age: 31, course: "web", graduated: false},
  {id: 4, name: "Dara", score: 85, age: 25, course: "web", graduated: false},
  {id: 5, name: "Elif", score: 64, age: 30, course: "data", graduated: false},
  {id: 6, name: "Chen", score: 40, age: 20, course: "data", graduated: true},
  {id: 7, name: "Gita", score: 47, age: 32, course: "design", graduated: false},
  {id: 8, name: "Luca", score: 38, age: 30, course: "web", graduated: false}
]
```
