---
slug: "ts-data-books-above"
title: "Data: Books with a page count above a limit"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Books with a page count above a limit

Return the title of every book whose `pages` is **greater than** `min`, in the original order.

The tests call your function with this data (also available as `BOOKS` in the tests):

```js
const BOOKS = [
  {id: 1, title: "Ulysses", pages: 164, year: 1978, genre: "tech", available: true},
  {id: 2, title: "Kindred", pages: 276, year: 1870, genre: "sci-fi", available: true},
  {id: 3, title: "Rebecca", pages: 632, year: 1994, genre: "classic", available: false},
  {id: 4, title: "Walden", pages: 232, year: 1904, genre: "tech", available: false},
  {id: 5, title: "Siddhartha", pages: 229, year: 1938, genre: "tech", available: true},
  {id: 6, title: "Hamlet", pages: 142, year: 1819, genre: "tech", available: true},
  {id: 7, title: "Emma", pages: 537, year: 2009, genre: "classic", available: false},
  {id: 8, title: "Clean Code", pages: 646, year: 1974, genre: "fiction", available: false}
]
```

Type the parameters and the return value. The interface is already written for you.
