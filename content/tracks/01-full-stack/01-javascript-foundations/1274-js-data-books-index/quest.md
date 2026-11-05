---
slug: "js-data-books-index"
title: "Data: Index books by id"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Index books by id

Return an object mapping each `id` to the book's title, for fast lookups.

The tests call your function with this data (also available as `BOOKS` in the tests):

```js
const BOOKS = [
  {id: 1, title: "Kindred", pages: 304, year: 1988, genre: "fiction", available: false},
  {id: 2, title: "Neuromancer", pages: 519, year: 1916, genre: "sci-fi", available: false},
  {id: 3, title: "Clean Code", pages: 518, year: 1826, genre: "classic", available: true},
  {id: 4, title: "Matilda", pages: 570, year: 1856, genre: "sci-fi", available: false},
  {id: 5, title: "Siddhartha", pages: 472, year: 1845, genre: "tech", available: true},
  {id: 6, title: "Walden", pages: 336, year: 1862, genre: "classic", available: true},
  {id: 7, title: "Persuasion", pages: 378, year: 1871, genre: "fiction", available: false},
  {id: 8, title: "Ulysses", pages: 525, year: 1853, genre: "tech", available: true}
]
```
