---
slug: "ts-data-books-percent"
title: "Data: What share of books are available?"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# What share of books are available?

Return the percentage (0–100, rounded to a whole number) of books where `available` is true. Return 0 for an empty list.

The tests call your function with this data (also available as `BOOKS` in the tests):

```js
const BOOKS = [
  {id: 1, title: "Dune", pages: 583, year: 1817, genre: "fiction", available: false},
  {id: 2, title: "Emma", pages: 533, year: 1961, genre: "fiction", available: false},
  {id: 3, title: "Rebecca", pages: 225, year: 2012, genre: "sci-fi", available: true},
  {id: 4, title: "Kindred", pages: 451, year: 1860, genre: "sci-fi", available: true},
  {id: 5, title: "Siddhartha", pages: 204, year: 1916, genre: "sci-fi", available: true},
  {id: 6, title: "Hamlet", pages: 349, year: 1921, genre: "tech", available: false},
  {id: 7, title: "Walden", pages: 662, year: 1860, genre: "tech", available: false},
  {id: 8, title: "Clean Code", pages: 145, year: 1842, genre: "sci-fi", available: false}
]
```

Type the parameters and the return value. The interface is already written for you.
