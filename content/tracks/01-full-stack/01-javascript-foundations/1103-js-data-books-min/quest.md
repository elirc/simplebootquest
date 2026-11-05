---
slug: "js-data-books-min"
title: "Data: The book with the lowest page count"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The book with the lowest page count

Return the title of the book with the **lowest** `pages` (first one on ties), or `null` for an empty list.

The tests call your function with this data (also available as `BOOKS` in the tests):

```js
const BOOKS = [
  {id: 1, title: "Siddhartha", pages: 288, year: 1862, genre: "classic", available: true},
  {id: 2, title: "Clean Code", pages: 696, year: 1831, genre: "sci-fi", available: false},
  {id: 3, title: "Persuasion", pages: 280, year: 1887, genre: "tech", available: false},
  {id: 4, title: "Dune", pages: 445, year: 1825, genre: "tech", available: false},
  {id: 5, title: "Kindred", pages: 363, year: 2001, genre: "sci-fi", available: false},
  {id: 6, title: "Walden", pages: 339, year: 1884, genre: "classic", available: true},
  {id: 7, title: "Neuromancer", pages: 312, year: 1825, genre: "classic", available: true},
  {id: 8, title: "Matilda", pages: 513, year: 1921, genre: "sci-fi", available: false}
]
```
