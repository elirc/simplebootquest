---
slug: "js-data-courses-pluck"
title: "Data: Pick just the fields the UI needs"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Destructure the parameter: `({ id, name }) => ({ id, name })`.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Pick just the fields the UI needs

Return a new array of objects with only `id`, `title` and `lessons` (in that order). APIs should never send more than the client needs.

The tests call your function with this data (also available as `COURSES` in the tests):

```js
const COURSES = [
  {id: 1, title: "GraphQL", lessons: 38, enrolled: 884, level: "beginner"},
  {id: 2, title: "Docker Intro", lessons: 17, enrolled: 3129, level: "intermediate"},
  {id: 3, title: "Testing JS", lessons: 42, enrolled: 1017, level: "advanced"},
  {id: 4, title: "React Basics", lessons: 31, enrolled: 2632, level: "advanced"},
  {id: 5, title: "TypeScript 101", lessons: 25, enrolled: 3516, level: "beginner"},
  {id: 6, title: "Accessibility", lessons: 32, enrolled: 3331, level: "intermediate"},
  {id: 7, title: "Git Essentials", lessons: 30, enrolled: 37, level: "advanced"},
  {id: 8, title: "Data Viz", lessons: 40, enrolled: 4318, level: "beginner"}
]
```
