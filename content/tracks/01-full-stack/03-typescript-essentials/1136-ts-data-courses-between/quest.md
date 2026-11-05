---
slug: "ts-data-courses-between"
title: "Data: Courses in a lesson count range"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Courses in a lesson count range

Return the titles of courses whose `lessons` is between `low` and `high` **inclusive**. Use `filter` and `map`.

The tests call your function with this data (also available as `COURSES` in the tests):

```js
const COURSES = [
  {id: 1, title: "Web Security", lessons: 27, enrolled: 4604, level: "intermediate"},
  {id: 2, title: "Accessibility", lessons: 11, enrolled: 4276, level: "intermediate"},
  {id: 3, title: "TypeScript 101", lessons: 35, enrolled: 1025, level: "beginner"},
  {id: 4, title: "React Basics", lessons: 41, enrolled: 2025, level: "beginner"},
  {id: 5, title: "Data Viz", lessons: 39, enrolled: 4433, level: "beginner"},
  {id: 6, title: "GraphQL", lessons: 35, enrolled: 1096, level: "beginner"},
  {id: 7, title: "Testing JS", lessons: 34, enrolled: 4211, level: "beginner"},
  {id: 8, title: "Node APIs", lessons: 47, enrolled: 4706, level: "intermediate"}
]
```

Type the parameters and the return value. The interface is already written for you.
