---
slug: "js-data-courses-count-cat"
title: "Data: Count courses by level"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Count courses by level

Return how many courses have `level` equal to `value`.

The tests call your function with this data (also available as `COURSES` in the tests):

```js
const COURSES = [
  {id: 1, title: "TypeScript 101", lessons: 17, enrolled: 3750, level: "advanced"},
  {id: 2, title: "Data Viz", lessons: 19, enrolled: 1048, level: "intermediate"},
  {id: 3, title: "CSS Layouts", lessons: 6, enrolled: 1177, level: "beginner"},
  {id: 4, title: "Web Security", lessons: 22, enrolled: 3757, level: "intermediate"},
  {id: 5, title: "React Basics", lessons: 21, enrolled: 1715, level: "advanced"},
  {id: 6, title: "Accessibility", lessons: 14, enrolled: 3497, level: "advanced"},
  {id: 7, title: "Docker Intro", lessons: 40, enrolled: 1933, level: "advanced"},
  {id: 8, title: "Testing JS", lessons: 17, enrolled: 1155, level: "advanced"}
]
```
