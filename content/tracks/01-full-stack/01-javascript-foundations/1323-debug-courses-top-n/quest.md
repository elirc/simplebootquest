---
slug: "debug-courses-top-n"
title: "Debug: Top courses by lesson count"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Top courses by lesson count

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes results in the wrong order. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the titles of the `n` courses with the **highest** `lessons`, highest first. Don't mutate the input.

The tests call your function with this data (also available as `COURSES` in the tests):

```js
const COURSES = [
  {id: 1, title: "TypeScript 101", lessons: 16, enrolled: 1915, level: "advanced"},
  {id: 2, title: "Git Essentials", lessons: 21, enrolled: 3257, level: "advanced"},
  {id: 3, title: "Node APIs", lessons: 44, enrolled: 4418, level: "advanced"},
  {id: 4, title: "GraphQL", lessons: 33, enrolled: 3655, level: "intermediate"},
  {id: 5, title: "Accessibility", lessons: 31, enrolled: 2906, level: "beginner"},
  {id: 6, title: "React Basics", lessons: 32, enrolled: 508, level: "advanced"},
  {id: 7, title: "Testing JS", lessons: 15, enrolled: 2128, level: "intermediate"},
  {id: 8, title: "CSS Layouts", lessons: 9, enrolled: 1250, level: "beginner"}
]
```
