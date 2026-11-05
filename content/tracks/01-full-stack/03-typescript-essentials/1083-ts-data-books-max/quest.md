---
slug: "ts-data-books-max"
title: "Data: The book with the highest page count"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The book with the highest page count

Return the title of the book with the **highest** `pages`. If several tie, return the first. Return `null` for an empty list.

The tests call your function with this data (also available as `BOOKS` in the tests):

```js
const BOOKS = [
  {id: 1, title: "Siddhartha", pages: 567, year: 1966, genre: "fiction", available: false},
  {id: 2, title: "Neuromancer", pages: 431, year: 2004, genre: "fiction", available: true},
  {id: 3, title: "Kindred", pages: 707, year: 1919, genre: "fiction", available: false},
  {id: 4, title: "Clean Code", pages: 288, year: 1887, genre: "tech", available: true},
  {id: 5, title: "Persuasion", pages: 176, year: 1817, genre: "classic", available: true},
  {id: 6, title: "Matilda", pages: 497, year: 1945, genre: "classic", available: false},
  {id: 7, title: "Ulysses", pages: 595, year: 1894, genre: "tech", available: false},
  {id: 8, title: "Hamlet", pages: 288, year: 1860, genre: "tech", available: false}
]
```

Type the parameters and the return value. The interface is already written for you.
