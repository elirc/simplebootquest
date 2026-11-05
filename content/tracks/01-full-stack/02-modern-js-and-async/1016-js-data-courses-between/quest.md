---
slug: "js-data-courses-between"
title: "Data: Courses in a lesson count range"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Courses in a lesson count range

Return the titles of courses whose `lessons` is between `low` and `high` **inclusive**. Use `filter` and `map`.

The tests call your function with this data (also available as `COURSES` in the tests):

```js
const COURSES = [
  {id: 1, title: "GraphQL", lessons: 28, enrolled: 2094, level: "beginner"},
  {id: 2, title: "CSS Layouts", lessons: 25, enrolled: 2697, level: "beginner"},
  {id: 3, title: "Web Security", lessons: 11, enrolled: 2390, level: "intermediate"},
  {id: 4, title: "Node APIs", lessons: 42, enrolled: 903, level: "advanced"},
  {id: 5, title: "Docker Intro", lessons: 11, enrolled: 147, level: "intermediate"},
  {id: 6, title: "TypeScript 101", lessons: 16, enrolled: 1166, level: "beginner"},
  {id: 7, title: "Testing JS", lessons: 14, enrolled: 106, level: "intermediate"},
  {id: 8, title: "Git Essentials", lessons: 11, enrolled: 1138, level: "advanced"}
]
```
