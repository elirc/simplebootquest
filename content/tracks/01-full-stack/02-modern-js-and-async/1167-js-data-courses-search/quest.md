---
slug: "js-data-courses-search"
title: "Data: Search courses by title"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Search courses by title

Return the titles that **contain** `query`, ignoring case. An empty (or whitespace-only) query returns every title.

The tests call your function with this data (also available as `COURSES` in the tests):

```js
const COURSES = [
  {id: 1, title: "Git Essentials", lessons: 35, enrolled: 3347, level: "beginner"},
  {id: 2, title: "CSS Layouts", lessons: 32, enrolled: 653, level: "beginner"},
  {id: 3, title: "Accessibility", lessons: 12, enrolled: 1370, level: "advanced"},
  {id: 4, title: "Node APIs", lessons: 47, enrolled: 4724, level: "advanced"},
  {id: 5, title: "Testing JS", lessons: 35, enrolled: 1878, level: "intermediate"},
  {id: 6, title: "GraphQL", lessons: 19, enrolled: 1707, level: "beginner"},
  {id: 7, title: "Data Viz", lessons: 11, enrolled: 3192, level: "intermediate"},
  {id: 8, title: "Docker Intro", lessons: 45, enrolled: 993, level: "advanced"}
]
```
