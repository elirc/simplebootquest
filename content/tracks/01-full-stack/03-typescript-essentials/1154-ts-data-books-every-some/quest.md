---
slug: "ts-data-books-every-some"
title: "Data: Are all books under a page count limit?"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Are all books under a page count limit?

Return `true` if **every** book has `pages` below `limit` (and `true` for an empty list, like `Array.prototype.every`).

The tests call your function with this data (also available as `BOOKS` in the tests):

```js
const BOOKS = [
  {id: 1, title: "Clean Code", pages: 467, year: 1997, genre: "fiction", available: false},
  {id: 2, title: "Rebecca", pages: 650, year: 1914, genre: "sci-fi", available: true},
  {id: 3, title: "Kindred", pages: 138, year: 1845, genre: "fiction", available: true},
  {id: 4, title: "Ulysses", pages: 556, year: 1846, genre: "fiction", available: true},
  {id: 5, title: "Matilda", pages: 436, year: 1889, genre: "classic", available: true},
  {id: 6, title: "Siddhartha", pages: 303, year: 1985, genre: "classic", available: false},
  {id: 7, title: "Neuromancer", pages: 183, year: 1854, genre: "sci-fi", available: false},
  {id: 8, title: "Dune", pages: 635, year: 2005, genre: "fiction", available: true}
]
```

Type the parameters and the return value. The interface is already written for you.
