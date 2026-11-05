---
slug: "js-data-courses-paginate"
title: "Data: Paginate courses"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Paginate courses

Return `{ items, page, totalPages }` where `items` are the titles on page `page` (1-based) of size `size`. Out-of-range pages return an empty `items` array.

The tests call your function with this data (also available as `COURSES` in the tests):

```js
const COURSES = [
  {id: 1, title: "TypeScript 101", lessons: 32, enrolled: 3573, level: "beginner"},
  {id: 2, title: "CSS Layouts", lessons: 43, enrolled: 4494, level: "beginner"},
  {id: 3, title: "Data Viz", lessons: 17, enrolled: 1966, level: "intermediate"},
  {id: 4, title: "GraphQL", lessons: 12, enrolled: 978, level: "advanced"},
  {id: 5, title: "Intro to SQL", lessons: 45, enrolled: 302, level: "beginner"},
  {id: 6, title: "Accessibility", lessons: 20, enrolled: 2940, level: "beginner"},
  {id: 7, title: "React Basics", lessons: 24, enrolled: 963, level: "beginner"},
  {id: 8, title: "Testing JS", lessons: 10, enrolled: 1807, level: "intermediate"}
]
```
