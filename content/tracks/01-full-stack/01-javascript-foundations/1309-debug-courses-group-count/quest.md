---
slug: "debug-courses-group-count"
title: "Debug: How many courses per level?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: How many courses per level?

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes counts that are off by one. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return an object mapping each `level` to the number of courses with it. Only include values that appear.

The tests call your function with this data (also available as `COURSES` in the tests):

```js
const COURSES = [
  {id: 1, title: "TypeScript 101", lessons: 19, enrolled: 1150, level: "beginner"},
  {id: 2, title: "Web Security", lessons: 14, enrolled: 4104, level: "beginner"},
  {id: 3, title: "Data Viz", lessons: 16, enrolled: 2938, level: "advanced"},
  {id: 4, title: "Docker Intro", lessons: 39, enrolled: 3360, level: "advanced"},
  {id: 5, title: "Node APIs", lessons: 28, enrolled: 2727, level: "beginner"},
  {id: 6, title: "Testing JS", lessons: 43, enrolled: 156, level: "intermediate"},
  {id: 7, title: "React Basics", lessons: 11, enrolled: 3564, level: "intermediate"},
  {id: 8, title: "GraphQL", lessons: 22, enrolled: 1789, level: "beginner"}
]
```
