---
slug: "js-data-books-count-cat"
title: "Data: Count books by genre"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Count books by genre

Return how many books have `genre` equal to `value`.

The tests call your function with this data (also available as `BOOKS` in the tests):

```js
const BOOKS = [
  {id: 1, title: "Hamlet", pages: 120, year: 1943, genre: "tech", available: false},
  {id: 2, title: "Siddhartha", pages: 753, year: 1949, genre: "sci-fi", available: false},
  {id: 3, title: "Persuasion", pages: 249, year: 1904, genre: "classic", available: false},
  {id: 4, title: "Matilda", pages: 519, year: 1913, genre: "fiction", available: true},
  {id: 5, title: "Kindred", pages: 312, year: 2014, genre: "fiction", available: true},
  {id: 6, title: "Clean Code", pages: 151, year: 1987, genre: "tech", available: false},
  {id: 7, title: "Emma", pages: 487, year: 1898, genre: "tech", available: true},
  {id: 8, title: "Rebecca", pages: 329, year: 1988, genre: "fiction", available: false}
]
```
