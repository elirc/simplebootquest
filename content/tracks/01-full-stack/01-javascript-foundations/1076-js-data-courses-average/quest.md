---
slug: "js-data-courses-average"
title: "Data: Average lesson count"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Average lesson count

Return the average `lessons` rounded to **one decimal place** (use `Math.round(x * 10) / 10`). Return `null` for an empty list.

The tests call your function with this data (also available as `COURSES` in the tests):

```js
const COURSES = [
  {id: 1, title: "Accessibility", lessons: 42, enrolled: 3753, level: "advanced"},
  {id: 2, title: "Testing JS", lessons: 45, enrolled: 4382, level: "advanced"},
  {id: 3, title: "React Basics", lessons: 13, enrolled: 3968, level: "advanced"},
  {id: 4, title: "Data Viz", lessons: 32, enrolled: 150, level: "intermediate"},
  {id: 5, title: "Node APIs", lessons: 11, enrolled: 604, level: "intermediate"},
  {id: 6, title: "Git Essentials", lessons: 6, enrolled: 2664, level: "advanced"},
  {id: 7, title: "Docker Intro", lessons: 8, enrolled: 3298, level: "intermediate"},
  {id: 8, title: "Intro to SQL", lessons: 39, enrolled: 1048, level: "advanced"}
]
```
