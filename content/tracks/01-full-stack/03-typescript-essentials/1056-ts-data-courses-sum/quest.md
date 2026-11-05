---
slug: "ts-data-courses-sum"
title: "Data: Total enrolments of all courses"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Total enrolments of all courses

Return the sum of `enrolled` across all courses. An empty list totals 0.

The tests call your function with this data (also available as `COURSES` in the tests):

```js
const COURSES = [
  {id: 1, title: "GraphQL", lessons: 43, enrolled: 3256, level: "beginner"},
  {id: 2, title: "Web Security", lessons: 24, enrolled: 2147, level: "beginner"},
  {id: 3, title: "TypeScript 101", lessons: 47, enrolled: 2367, level: "intermediate"},
  {id: 4, title: "Git Essentials", lessons: 40, enrolled: 4240, level: "intermediate"},
  {id: 5, title: "Accessibility", lessons: 25, enrolled: 3256, level: "advanced"},
  {id: 6, title: "Docker Intro", lessons: 45, enrolled: 2815, level: "advanced"},
  {id: 7, title: "CSS Layouts", lessons: 7, enrolled: 31, level: "advanced"},
  {id: 8, title: "Testing JS", lessons: 6, enrolled: 3929, level: "intermediate"}
]
```

Type the parameters and the return value. The interface is already written for you.
