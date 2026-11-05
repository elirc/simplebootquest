---
slug: "ts-data-courses-every-some"
title: "Data: Are all courses under a lesson count limit?"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Are all courses under a lesson count limit?

Return `true` if **every** course has `lessons` below `limit` (and `true` for an empty list, like `Array.prototype.every`).

The tests call your function with this data (also available as `COURSES` in the tests):

```js
const COURSES = [
  {id: 1, title: "CSS Layouts", lessons: 15, enrolled: 4048, level: "beginner"},
  {id: 2, title: "Accessibility", lessons: 21, enrolled: 2519, level: "beginner"},
  {id: 3, title: "Git Essentials", lessons: 38, enrolled: 3439, level: "beginner"},
  {id: 4, title: "Testing JS", lessons: 40, enrolled: 2038, level: "advanced"},
  {id: 5, title: "React Basics", lessons: 26, enrolled: 439, level: "advanced"},
  {id: 6, title: "Intro to SQL", lessons: 26, enrolled: 1705, level: "intermediate"},
  {id: 7, title: "Docker Intro", lessons: 7, enrolled: 4012, level: "advanced"},
  {id: 8, title: "GraphQL", lessons: 33, enrolled: 979, level: "intermediate"}
]
```

Type the parameters and the return value. The interface is already written for you.
