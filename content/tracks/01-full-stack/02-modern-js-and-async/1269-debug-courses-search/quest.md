---
slug: "debug-courses-search"
title: "Debug: Search courses by title"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Search courses by title

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes case-sensitivity. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the titles that **contain** `query`, ignoring case. An empty (or whitespace-only) query returns every title.

The tests call your function with this data (also available as `COURSES` in the tests):

```js
const COURSES = [
  {id: 1, title: "Web Security", lessons: 39, enrolled: 3419, level: "beginner"},
  {id: 2, title: "Intro to SQL", lessons: 44, enrolled: 1101, level: "beginner"},
  {id: 3, title: "Node APIs", lessons: 11, enrolled: 2793, level: "beginner"},
  {id: 4, title: "TypeScript 101", lessons: 48, enrolled: 3437, level: "advanced"},
  {id: 5, title: "Git Essentials", lessons: 31, enrolled: 989, level: "advanced"},
  {id: 6, title: "Docker Intro", lessons: 38, enrolled: 2937, level: "advanced"},
  {id: 7, title: "Accessibility", lessons: 6, enrolled: 558, level: "intermediate"},
  {id: 8, title: "Testing JS", lessons: 7, enrolled: 612, level: "intermediate"}
]
```
