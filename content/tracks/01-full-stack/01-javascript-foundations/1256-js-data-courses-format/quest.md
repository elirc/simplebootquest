---
slug: "js-data-courses-format"
title: "Data: Format courses as labels"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Format courses as labels

Return one string per course: `"<title> (<lessons>)"`, e.g. `"Accessibility (18)"`.

The tests call your function with this data (also available as `COURSES` in the tests):

```js
const COURSES = [
  {id: 1, title: "Accessibility", lessons: 18, enrolled: 3361, level: "advanced"},
  {id: 2, title: "CSS Layouts", lessons: 13, enrolled: 2573, level: "advanced"},
  {id: 3, title: "Data Viz", lessons: 45, enrolled: 612, level: "advanced"},
  {id: 4, title: "Intro to SQL", lessons: 30, enrolled: 4682, level: "beginner"},
  {id: 5, title: "Web Security", lessons: 8, enrolled: 4759, level: "beginner"},
  {id: 6, title: "Git Essentials", lessons: 14, enrolled: 4084, level: "intermediate"},
  {id: 7, title: "TypeScript 101", lessons: 32, enrolled: 1759, level: "beginner"},
  {id: 8, title: "Testing JS", lessons: 11, enrolled: 4667, level: "beginner"}
]
```
