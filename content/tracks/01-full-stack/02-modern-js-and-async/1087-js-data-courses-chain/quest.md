---
slug: "js-data-courses-chain"
title: "Data: Filter, sort, map: courses in one level"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Filter, sort, map: courses in one level

Return the titles of courses whose `level` equals `value`, sorted by `enrolled` **highest first**. One chain of array methods is enough.

The tests call your function with this data (also available as `COURSES` in the tests):

```js
const COURSES = [
  {id: 1, title: "GraphQL", lessons: 13, enrolled: 3312, level: "intermediate"},
  {id: 2, title: "Node APIs", lessons: 44, enrolled: 403, level: "beginner"},
  {id: 3, title: "Data Viz", lessons: 36, enrolled: 3767, level: "advanced"},
  {id: 4, title: "CSS Layouts", lessons: 33, enrolled: 866, level: "intermediate"},
  {id: 5, title: "Accessibility", lessons: 11, enrolled: 4465, level: "intermediate"},
  {id: 6, title: "Git Essentials", lessons: 12, enrolled: 4263, level: "advanced"},
  {id: 7, title: "Docker Intro", lessons: 24, enrolled: 2104, level: "beginner"},
  {id: 8, title: "Web Security", lessons: 36, enrolled: 1906, level: "advanced"}
]
```
