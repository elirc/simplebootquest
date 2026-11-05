---
slug: "js-data-books-every-some"
title: "Data: Are all books under a page count limit?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Are all books under a page count limit?

Return `true` if **every** book has `pages` below `limit` (and `true` for an empty list, like `Array.prototype.every`).

The tests call your function with this data (also available as `BOOKS` in the tests):

```js
const BOOKS = [
  {id: 1, title: "Rebecca", pages: 663, year: 1986, genre: "classic", available: false},
  {id: 2, title: "Hamlet", pages: 153, year: 1975, genre: "fiction", available: true},
  {id: 3, title: "Persuasion", pages: 568, year: 1822, genre: "fiction", available: true},
  {id: 4, title: "Neuromancer", pages: 465, year: 1894, genre: "sci-fi", available: true},
  {id: 5, title: "Dune", pages: 570, year: 1826, genre: "sci-fi", available: false},
  {id: 6, title: "Ulysses", pages: 674, year: 1954, genre: "classic", available: false},
  {id: 7, title: "Walden", pages: 590, year: 1941, genre: "fiction", available: true},
  {id: 8, title: "Siddhartha", pages: 232, year: 1921, genre: "tech", available: false}
]
```
