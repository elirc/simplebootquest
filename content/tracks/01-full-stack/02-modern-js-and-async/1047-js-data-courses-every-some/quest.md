---
slug: "js-data-courses-every-some"
title: "Data: Are all courses under a lesson count limit?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Are all courses under a lesson count limit?

Return `true` if **every** course has `lessons` below `limit` (and `true` for an empty list, like `Array.prototype.every`).

The tests call your function with this data (also available as `COURSES` in the tests):

```js
const COURSES = [
  {id: 1, title: "Git Essentials", lessons: 13, enrolled: 3516, level: "beginner"},
  {id: 2, title: "Intro to SQL", lessons: 28, enrolled: 333, level: "intermediate"},
  {id: 3, title: "CSS Layouts", lessons: 10, enrolled: 1968, level: "advanced"},
  {id: 4, title: "React Basics", lessons: 26, enrolled: 3895, level: "intermediate"},
  {id: 5, title: "Web Security", lessons: 39, enrolled: 1766, level: "advanced"},
  {id: 6, title: "Testing JS", lessons: 20, enrolled: 3476, level: "intermediate"},
  {id: 7, title: "GraphQL", lessons: 46, enrolled: 1840, level: "intermediate"},
  {id: 8, title: "TypeScript 101", lessons: 11, enrolled: 4059, level: "intermediate"}
]
```
