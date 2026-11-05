---
slug: "debug-courses-between"
title: "Debug: Courses in a enrolments range"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Courses in a enrolments range

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an off-by-one at a boundary. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the titles of courses whose `enrolled` is between `low` and `high` **inclusive**. Use `filter` and `map`.

The tests call your function with this data (also available as `COURSES` in the tests):

```js
const COURSES = [
  {id: 1, title: "Git Essentials", lessons: 46, enrolled: 1078, level: "advanced"},
  {id: 2, title: "Web Security", lessons: 39, enrolled: 2975, level: "beginner"},
  {id: 3, title: "GraphQL", lessons: 21, enrolled: 318, level: "advanced"},
  {id: 4, title: "React Basics", lessons: 27, enrolled: 3544, level: "beginner"},
  {id: 5, title: "Data Viz", lessons: 28, enrolled: 972, level: "intermediate"},
  {id: 6, title: "Accessibility", lessons: 27, enrolled: 3213, level: "beginner"},
  {id: 7, title: "Testing JS", lessons: 39, enrolled: 1860, level: "intermediate"},
  {id: 8, title: "Intro to SQL", lessons: 9, enrolled: 3059, level: "advanced"}
]
```
