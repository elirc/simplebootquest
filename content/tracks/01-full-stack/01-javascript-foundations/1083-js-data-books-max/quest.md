---
slug: "js-data-books-max"
title: "Data: The book with the highest page count"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The book with the highest page count

Return the title of the book with the **highest** `pages`. If several tie, return the first. Return `null` for an empty list.

The tests call your function with this data (also available as `BOOKS` in the tests):

```js
const BOOKS = [
  {id: 1, title: "Clean Code", pages: 151, year: 2001, genre: "fiction", available: false},
  {id: 2, title: "Emma", pages: 337, year: 1831, genre: "fiction", available: true},
  {id: 3, title: "Persuasion", pages: 555, year: 1949, genre: "classic", available: false},
  {id: 4, title: "Siddhartha", pages: 125, year: 1932, genre: "sci-fi", available: false},
  {id: 5, title: "Kindred", pages: 139, year: 1834, genre: "fiction", available: false},
  {id: 6, title: "Matilda", pages: 473, year: 1826, genre: "fiction", available: true},
  {id: 7, title: "Ulysses", pages: 752, year: 1836, genre: "fiction", available: false},
  {id: 8, title: "Neuromancer", pages: 691, year: 1868, genre: "fiction", available: false}
]
```
