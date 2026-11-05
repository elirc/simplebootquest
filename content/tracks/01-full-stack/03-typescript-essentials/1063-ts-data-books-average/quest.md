---
slug: "ts-data-books-average"
title: "Data: Average page count"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Average page count

Return the average `pages` rounded to **one decimal place** (use `Math.round(x * 10) / 10`). Return `null` for an empty list.

The tests call your function with this data (also available as `BOOKS` in the tests):

```js
const BOOKS = [
  {id: 1, title: "Clean Code", pages: 216, year: 1852, genre: "classic", available: false},
  {id: 2, title: "Siddhartha", pages: 589, year: 1830, genre: "classic", available: true},
  {id: 3, title: "Rebecca", pages: 123, year: 1965, genre: "sci-fi", available: false},
  {id: 4, title: "Matilda", pages: 502, year: 1930, genre: "tech", available: false},
  {id: 5, title: "Walden", pages: 199, year: 2002, genre: "classic", available: true},
  {id: 6, title: "Neuromancer", pages: 389, year: 2007, genre: "classic", available: true},
  {id: 7, title: "Persuasion", pages: 346, year: 1927, genre: "sci-fi", available: true},
  {id: 8, title: "Hamlet", pages: 615, year: 1967, genre: "tech", available: true}
]
```

Type the parameters and the return value. The interface is already written for you.
