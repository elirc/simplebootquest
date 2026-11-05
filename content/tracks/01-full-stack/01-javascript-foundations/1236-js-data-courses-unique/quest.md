---
slug: "js-data-courses-unique"
title: "Data: Distinct level values"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Distinct level values

Return every distinct `level` that appears, sorted alphabetically.

The tests call your function with this data (also available as `COURSES` in the tests):

```js
const COURSES = [
  {id: 1, title: "Docker Intro", lessons: 11, enrolled: 1678, level: "intermediate"},
  {id: 2, title: "Intro to SQL", lessons: 31, enrolled: 679, level: "beginner"},
  {id: 3, title: "Node APIs", lessons: 21, enrolled: 3991, level: "beginner"},
  {id: 4, title: "Testing JS", lessons: 40, enrolled: 275, level: "advanced"},
  {id: 5, title: "Accessibility", lessons: 31, enrolled: 2916, level: "advanced"},
  {id: 6, title: "Git Essentials", lessons: 37, enrolled: 2830, level: "intermediate"},
  {id: 7, title: "CSS Layouts", lessons: 35, enrolled: 3223, level: "beginner"},
  {id: 8, title: "Web Security", lessons: 36, enrolled: 380, level: "intermediate"}
]
```
