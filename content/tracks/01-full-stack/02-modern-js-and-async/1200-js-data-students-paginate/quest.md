---
slug: "js-data-students-paginate"
title: "Data: Paginate students"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Paginate students

Return `{ items, page, totalPages }` where `items` are the names on page `page` (1-based) of size `size`. Out-of-range pages return an empty `items` array.

The tests call your function with this data (also available as `STUDENTS` in the tests):

```js
const STUDENTS = [
  {id: 1, name: "Hugo", score: 46, age: 22, course: "design", graduated: true},
  {id: 2, name: "Amara", score: 31, age: 28, course: "data", graduated: false},
  {id: 3, name: "Bilal", score: 64, age: 25, course: "web", graduated: true},
  {id: 4, name: "Elif", score: 54, age: 23, course: "web", graduated: false},
  {id: 5, name: "Ines", score: 88, age: 25, course: "design", graduated: false},
  {id: 6, name: "Gita", score: 77, age: 33, course: "design", graduated: false},
  {id: 7, name: "Dara", score: 38, age: 22, course: "data", graduated: true},
  {id: 8, name: "Luca", score: 97, age: 23, course: "design", graduated: true}
]
```
