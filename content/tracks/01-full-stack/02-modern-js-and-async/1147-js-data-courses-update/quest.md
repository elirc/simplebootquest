---
slug: "js-data-courses-update"
title: "Data: Update courses immutably"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Spread to copy: `{ ...x, field: newValue }`.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Update courses immutably

Return a **new** array where every course with `level` equal to `value` has `lessons` increased by `amount`. Other courses are unchanged. **Don't mutate** the input objects (React state depends on this).

The tests call your function with this data (also available as `COURSES` in the tests):

```js
const COURSES = [
  {id: 1, title: "Web Security", lessons: 21, enrolled: 278, level: "advanced"},
  {id: 2, title: "GraphQL", lessons: 44, enrolled: 4041, level: "advanced"},
  {id: 3, title: "Data Viz", lessons: 8, enrolled: 1565, level: "intermediate"},
  {id: 4, title: "TypeScript 101", lessons: 15, enrolled: 3278, level: "advanced"},
  {id: 5, title: "Node APIs", lessons: 21, enrolled: 2281, level: "beginner"},
  {id: 6, title: "Git Essentials", lessons: 25, enrolled: 206, level: "beginner"},
  {id: 7, title: "React Basics", lessons: 21, enrolled: 312, level: "intermediate"},
  {id: 8, title: "CSS Layouts", lessons: 13, enrolled: 3749, level: "beginner"}
]
```
