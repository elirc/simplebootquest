---
slug: "ts-data-books-min"
title: "Data: The book with the lowest page count"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The book with the lowest page count

Return the title of the book with the **lowest** `pages` (first one on ties), or `null` for an empty list.

The tests call your function with this data (also available as `BOOKS` in the tests):

```js
const BOOKS = [
  {id: 1, title: "Matilda", pages: 629, year: 1935, genre: "sci-fi", available: true},
  {id: 2, title: "Rebecca", pages: 485, year: 1841, genre: "fiction", available: false},
  {id: 3, title: "Walden", pages: 474, year: 1961, genre: "fiction", available: false},
  {id: 4, title: "Neuromancer", pages: 637, year: 1814, genre: "classic", available: true},
  {id: 5, title: "Ulysses", pages: 625, year: 1991, genre: "classic", available: true},
  {id: 6, title: "Dune", pages: 503, year: 1816, genre: "fiction", available: true},
  {id: 7, title: "Hamlet", pages: 606, year: 1873, genre: "classic", available: true},
  {id: 8, title: "Persuasion", pages: 778, year: 1825, genre: "tech", available: false}
]
```

Type the parameters and the return value. The interface is already written for you.
