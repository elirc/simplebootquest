---
slug: "js-data-courses-max"
title: "Data: The course with the highest lesson count"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The course with the highest lesson count

Return the title of the course with the **highest** `lessons`. If several tie, return the first. Return `null` for an empty list.

The tests call your function with this data (also available as `COURSES` in the tests):

```js
const COURSES = [
  {id: 1, title: "GraphQL", lessons: 18, enrolled: 934, level: "advanced"},
  {id: 2, title: "React Basics", lessons: 26, enrolled: 4604, level: "beginner"},
  {id: 3, title: "Git Essentials", lessons: 33, enrolled: 2209, level: "beginner"},
  {id: 4, title: "CSS Layouts", lessons: 44, enrolled: 4075, level: "advanced"},
  {id: 5, title: "TypeScript 101", lessons: 20, enrolled: 4555, level: "advanced"},
  {id: 6, title: "Docker Intro", lessons: 40, enrolled: 2490, level: "advanced"},
  {id: 7, title: "Node APIs", lessons: 14, enrolled: 4015, level: "advanced"},
  {id: 8, title: "Data Viz", lessons: 42, enrolled: 3882, level: "intermediate"}
]
```
