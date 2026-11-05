---
slug: "js-data-books-between"
title: "Data: Books in a page count range"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Books in a page count range

Return the titles of books whose `pages` is between `low` and `high` **inclusive**. Use `filter` and `map`.

The tests call your function with this data (also available as `BOOKS` in the tests):

```js
const BOOKS = [
  {id: 1, title: "Clean Code", pages: 396, year: 1823, genre: "classic", available: true},
  {id: 2, title: "Rebecca", pages: 739, year: 1848, genre: "fiction", available: false},
  {id: 3, title: "Dune", pages: 474, year: 1983, genre: "classic", available: false},
  {id: 4, title: "Persuasion", pages: 374, year: 1988, genre: "fiction", available: true},
  {id: 5, title: "Hamlet", pages: 690, year: 1860, genre: "tech", available: false},
  {id: 6, title: "Matilda", pages: 747, year: 1818, genre: "fiction", available: true},
  {id: 7, title: "Ulysses", pages: 767, year: 1984, genre: "sci-fi", available: true},
  {id: 8, title: "Siddhartha", pages: 312, year: 1820, genre: "sci-fi", available: true}
]
```
