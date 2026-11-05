---
slug: "js-data-books-search"
title: "Data: Search books by title"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Search books by title

Return the titles that **contain** `query`, ignoring case. An empty (or whitespace-only) query returns every title.

The tests call your function with this data (also available as `BOOKS` in the tests):

```js
const BOOKS = [
  {id: 1, title: "Dune", pages: 660, year: 1925, genre: "tech", available: false},
  {id: 2, title: "Persuasion", pages: 360, year: 1947, genre: "tech", available: false},
  {id: 3, title: "Matilda", pages: 169, year: 1893, genre: "sci-fi", available: true},
  {id: 4, title: "Neuromancer", pages: 425, year: 1841, genre: "tech", available: false},
  {id: 5, title: "Rebecca", pages: 193, year: 1899, genre: "sci-fi", available: false},
  {id: 6, title: "Walden", pages: 422, year: 1823, genre: "sci-fi", available: false},
  {id: 7, title: "Ulysses", pages: 760, year: 1995, genre: "fiction", available: true},
  {id: 8, title: "Siddhartha", pages: 733, year: 1844, genre: "tech", available: true}
]
```
