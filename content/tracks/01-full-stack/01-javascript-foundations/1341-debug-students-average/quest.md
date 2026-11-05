---
slug: "debug-students-average"
title: "Debug: Average age"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Average age

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes a total that is off by one. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the average `age` rounded to **one decimal place** (use `Math.round(x * 10) / 10`). Return `null` for an empty list.

The tests call your function with this data (also available as `STUDENTS` in the tests):

```js
const STUDENTS = [
  {id: 1, name: "Femi", score: 51, age: 34, course: "data", graduated: false},
  {id: 2, name: "Keiko", score: 60, age: 31, course: "web", graduated: false},
  {id: 3, name: "Amara", score: 96, age: 19, course: "design", graduated: true},
  {id: 4, name: "Gita", score: 91, age: 25, course: "web", graduated: false},
  {id: 5, name: "Chen", score: 52, age: 20, course: "web", graduated: true},
  {id: 6, name: "Luca", score: 78, age: 31, course: "design", graduated: true},
  {id: 7, name: "Elif", score: 46, age: 30, course: "data", graduated: true},
  {id: 8, name: "Hugo", score: 42, age: 25, course: "data", graduated: false}
]
```
