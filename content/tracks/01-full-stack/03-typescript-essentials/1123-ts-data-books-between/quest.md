---
slug: "ts-data-books-between"
title: "Data: Books in a page count range"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Books in a page count range

Return the titles of books whose `pages` is between `low` and `high` **inclusive**. Use `filter` and `map`.

The tests call your function with this data (also available as `BOOKS` in the tests):

```js
const BOOKS = [
  {id: 1, title: "Ulysses", pages: 270, year: 1930, genre: "sci-fi", available: true},
  {id: 2, title: "Rebecca", pages: 188, year: 1939, genre: "fiction", available: false},
  {id: 3, title: "Kindred", pages: 482, year: 1869, genre: "sci-fi", available: true},
  {id: 4, title: "Emma", pages: 610, year: 1837, genre: "sci-fi", available: false},
  {id: 5, title: "Neuromancer", pages: 714, year: 1822, genre: "sci-fi", available: true},
  {id: 6, title: "Dune", pages: 256, year: 1822, genre: "tech", available: false},
  {id: 7, title: "Clean Code", pages: 142, year: 1951, genre: "sci-fi", available: false},
  {id: 8, title: "Matilda", pages: 539, year: 1929, genre: "sci-fi", available: false}
]
```

Type the parameters and the return value. The interface is already written for you.
