---
slug: "debug-courses-group-sum"
title: "Debug: Total enrolments per level"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Total enrolments per level

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes counts that are off by one. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return an object mapping each `level` to the **sum** of `enrolled` for courses in it.

The tests call your function with this data (also available as `COURSES` in the tests):

```js
const COURSES = [
  {id: 1, title: "TypeScript 101", lessons: 40, enrolled: 729, level: "intermediate"},
  {id: 2, title: "Node APIs", lessons: 19, enrolled: 4587, level: "advanced"},
  {id: 3, title: "Intro to SQL", lessons: 20, enrolled: 94, level: "beginner"},
  {id: 4, title: "CSS Layouts", lessons: 14, enrolled: 3920, level: "advanced"},
  {id: 5, title: "GraphQL", lessons: 15, enrolled: 1007, level: "advanced"},
  {id: 6, title: "Git Essentials", lessons: 27, enrolled: 3373, level: "advanced"},
  {id: 7, title: "Data Viz", lessons: 15, enrolled: 4053, level: "advanced"},
  {id: 8, title: "Testing JS", lessons: 48, enrolled: 1107, level: "advanced"}
]
```
