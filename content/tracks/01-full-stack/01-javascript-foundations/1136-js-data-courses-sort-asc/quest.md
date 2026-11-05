---
slug: "js-data-courses-sort-asc"
title: "Data: Sort courses by lesson count"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["`[...array].sort(...)` copies first, so the original stays untouched.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Sort courses by lesson count

Return the titles sorted by `lessons` from **lowest to highest**. Ties keep their original order. Don't mutate the input array.

The tests call your function with this data (also available as `COURSES` in the tests):

```js
const COURSES = [
  {id: 1, title: "Git Essentials", lessons: 33, enrolled: 94, level: "beginner"},
  {id: 2, title: "Web Security", lessons: 25, enrolled: 3897, level: "advanced"},
  {id: 3, title: "Testing JS", lessons: 42, enrolled: 2500, level: "advanced"},
  {id: 4, title: "Data Viz", lessons: 29, enrolled: 4157, level: "intermediate"},
  {id: 5, title: "Docker Intro", lessons: 32, enrolled: 1049, level: "beginner"},
  {id: 6, title: "CSS Layouts", lessons: 23, enrolled: 1334, level: "advanced"},
  {id: 7, title: "Intro to SQL", lessons: 45, enrolled: 174, level: "intermediate"},
  {id: 8, title: "Accessibility", lessons: 47, enrolled: 1594, level: "intermediate"}
]
```
