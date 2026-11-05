---
slug: "js-data-books-paginate"
title: "Data: Paginate books"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Paginate books

Return `{ items, page, totalPages }` where `items` are the titles on page `page` (1-based) of size `size`. Out-of-range pages return an empty `items` array.

The tests call your function with this data (also available as `BOOKS` in the tests):

```js
const BOOKS = [
  {id: 1, title: "Hamlet", pages: 144, year: 1898, genre: "tech", available: true},
  {id: 2, title: "Matilda", pages: 485, year: 1832, genre: "tech", available: true},
  {id: 3, title: "Siddhartha", pages: 214, year: 1864, genre: "sci-fi", available: false},
  {id: 4, title: "Persuasion", pages: 698, year: 1978, genre: "sci-fi", available: true},
  {id: 5, title: "Kindred", pages: 336, year: 1987, genre: "sci-fi", available: false},
  {id: 6, title: "Emma", pages: 272, year: 1951, genre: "tech", available: true},
  {id: 7, title: "Clean Code", pages: 672, year: 1863, genre: "tech", available: true},
  {id: 8, title: "Dune", pages: 392, year: 1813, genre: "classic", available: true}
]
```
