---
slug: "debug-courses-average"
title: "Debug: Average enrolments"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Average enrolments

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes a total that is off by one. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the average `enrolled` rounded to **one decimal place** (use `Math.round(x * 10) / 10`). Return `null` for an empty list.

The tests call your function with this data (also available as `COURSES` in the tests):

```js
const COURSES = [
  {id: 1, title: "Testing JS", lessons: 12, enrolled: 575, level: "advanced"},
  {id: 2, title: "GraphQL", lessons: 31, enrolled: 2951, level: "advanced"},
  {id: 3, title: "Git Essentials", lessons: 15, enrolled: 3997, level: "intermediate"},
  {id: 4, title: "Data Viz", lessons: 36, enrolled: 877, level: "advanced"},
  {id: 5, title: "TypeScript 101", lessons: 39, enrolled: 3301, level: "intermediate"},
  {id: 6, title: "Accessibility", lessons: 29, enrolled: 3329, level: "beginner"},
  {id: 7, title: "Docker Intro", lessons: 8, enrolled: 2652, level: "advanced"},
  {id: 8, title: "Web Security", lessons: 18, enrolled: 928, level: "advanced"}
]
```
