---
slug: "ts-data-books-sum"
title: "Data: Total page count of all books"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Total page count of all books

Return the sum of `pages` across all books. An empty list totals 0.

The tests call your function with this data (also available as `BOOKS` in the tests):

```js
const BOOKS = [
  {id: 1, title: "Kindred", pages: 620, year: 1981, genre: "sci-fi", available: true},
  {id: 2, title: "Ulysses", pages: 664, year: 2004, genre: "classic", available: false},
  {id: 3, title: "Hamlet", pages: 538, year: 1836, genre: "fiction", available: false},
  {id: 4, title: "Neuromancer", pages: 618, year: 1878, genre: "tech", available: true},
  {id: 5, title: "Dune", pages: 628, year: 1948, genre: "classic", available: true},
  {id: 6, title: "Rebecca", pages: 599, year: 1916, genre: "fiction", available: true},
  {id: 7, title: "Emma", pages: 777, year: 1881, genre: "sci-fi", available: false},
  {id: 8, title: "Siddhartha", pages: 298, year: 1964, genre: "sci-fi", available: false}
]
```

Type the parameters and the return value. The interface is already written for you.
