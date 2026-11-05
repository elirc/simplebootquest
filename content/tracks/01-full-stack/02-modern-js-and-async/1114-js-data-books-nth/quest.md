---
slug: "js-data-books-nth"
title: "Data: The n-th book by publication year"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The n-th book by publication year

Return the title of the book ranked `n` (1 = highest `year`), or `null` if `n` is out of range.

The tests call your function with this data (also available as `BOOKS` in the tests):

```js
const BOOKS = [
  {id: 1, title: "Hamlet", pages: 761, year: 1850, genre: "tech", available: true},
  {id: 2, title: "Emma", pages: 161, year: 1829, genre: "sci-fi", available: false},
  {id: 3, title: "Clean Code", pages: 211, year: 1861, genre: "tech", available: true},
  {id: 4, title: "Dune", pages: 412, year: 1938, genre: "classic", available: false},
  {id: 5, title: "Ulysses", pages: 534, year: 1925, genre: "classic", available: false},
  {id: 6, title: "Neuromancer", pages: 570, year: 1849, genre: "tech", available: true},
  {id: 7, title: "Matilda", pages: 624, year: 2014, genre: "tech", available: false},
  {id: 8, title: "Rebecca", pages: 751, year: 1931, genre: "classic", available: false}
]
```
