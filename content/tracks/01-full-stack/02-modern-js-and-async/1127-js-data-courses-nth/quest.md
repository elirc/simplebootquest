---
slug: "js-data-courses-nth"
title: "Data: The n-th course by lesson count"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The n-th course by lesson count

Return the title of the course ranked `n` (1 = highest `lessons`), or `null` if `n` is out of range.

The tests call your function with this data (also available as `COURSES` in the tests):

```js
const COURSES = [
  {id: 1, title: "Docker Intro", lessons: 28, enrolled: 3785, level: "beginner"},
  {id: 2, title: "CSS Layouts", lessons: 29, enrolled: 3174, level: "advanced"},
  {id: 3, title: "Node APIs", lessons: 34, enrolled: 3008, level: "advanced"},
  {id: 4, title: "Data Viz", lessons: 44, enrolled: 594, level: "intermediate"},
  {id: 5, title: "Testing JS", lessons: 22, enrolled: 3438, level: "beginner"},
  {id: 6, title: "TypeScript 101", lessons: 30, enrolled: 3832, level: "advanced"},
  {id: 7, title: "Git Essentials", lessons: 10, enrolled: 3336, level: "intermediate"},
  {id: 8, title: "Intro to SQL", lessons: 10, enrolled: 1517, level: "advanced"}
]
```
