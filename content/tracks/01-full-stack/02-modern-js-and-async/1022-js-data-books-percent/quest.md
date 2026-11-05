---
slug: "js-data-books-percent"
title: "Data: What share of books are available?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# What share of books are available?

Return the percentage (0–100, rounded to a whole number) of books where `available` is true. Return 0 for an empty list.

The tests call your function with this data (also available as `BOOKS` in the tests):

```js
const BOOKS = [
  {id: 1, title: "Hamlet", pages: 195, year: 1916, genre: "sci-fi", available: true},
  {id: 2, title: "Persuasion", pages: 248, year: 1825, genre: "classic", available: false},
  {id: 3, title: "Matilda", pages: 330, year: 1929, genre: "sci-fi", available: true},
  {id: 4, title: "Emma", pages: 462, year: 1988, genre: "fiction", available: false},
  {id: 5, title: "Neuromancer", pages: 599, year: 1971, genre: "fiction", available: false},
  {id: 6, title: "Ulysses", pages: 255, year: 1867, genre: "fiction", available: false},
  {id: 7, title: "Kindred", pages: 619, year: 1955, genre: "classic", available: false},
  {id: 8, title: "Rebecca", pages: 429, year: 1974, genre: "tech", available: true}
]
```
