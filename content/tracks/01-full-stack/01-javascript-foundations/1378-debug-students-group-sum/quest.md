---
slug: "debug-students-group-sum"
title: "Debug: Total age per course"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Total age per course

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes counts that are off by one. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return an object mapping each `course` to the **sum** of `age` for students in it.

The tests call your function with this data (also available as `STUDENTS` in the tests):

```js
const STUDENTS = [
  {id: 1, name: "Keiko", score: 99, age: 20, course: "web", graduated: false},
  {id: 2, name: "Elif", score: 84, age: 27, course: "data", graduated: true},
  {id: 3, name: "Hugo", score: 38, age: 31, course: "design", graduated: true},
  {id: 4, name: "Jonah", score: 43, age: 27, course: "data", graduated: false},
  {id: 5, name: "Luca", score: 91, age: 28, course: "data", graduated: false},
  {id: 6, name: "Gita", score: 98, age: 32, course: "web", graduated: true},
  {id: 7, name: "Ines", score: 37, age: 34, course: "data", graduated: false},
  {id: 8, name: "Chen", score: 46, age: 31, course: "data", graduated: true}
]
```
