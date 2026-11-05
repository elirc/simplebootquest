---
slug: "js-data-books-partition"
title: "Data: Split books by \"available\""
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Split books by "available"

Return `{ yes, no }`: the titles of books where `available` is true, and those where it's false. Keep the original order.

The tests call your function with this data (also available as `BOOKS` in the tests):

```js
const BOOKS = [
  {id: 1, title: "Emma", pages: 638, year: 1969, genre: "sci-fi", available: true},
  {id: 2, title: "Matilda", pages: 231, year: 1912, genre: "sci-fi", available: false},
  {id: 3, title: "Kindred", pages: 687, year: 1994, genre: "tech", available: true},
  {id: 4, title: "Clean Code", pages: 509, year: 1948, genre: "tech", available: true},
  {id: 5, title: "Rebecca", pages: 541, year: 1972, genre: "sci-fi", available: true},
  {id: 6, title: "Walden", pages: 747, year: 1995, genre: "sci-fi", available: true},
  {id: 7, title: "Siddhartha", pages: 441, year: 1819, genre: "fiction", available: true},
  {id: 8, title: "Persuasion", pages: 469, year: 2002, genre: "classic", available: false}
]
```
