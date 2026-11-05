---
slug: "js-data-books-histogram"
title: "Data: Bucket books by page count"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Bucket books by page count

Group books into buckets of width `width` by `pages`: the bucket key is `Math.floor(value / width) * width`. Return an object of bucket → count.

The tests call your function with this data (also available as `BOOKS` in the tests):

```js
const BOOKS = [
  {id: 1, title: "Dune", pages: 230, year: 1950, genre: "classic", available: true},
  {id: 2, title: "Emma", pages: 491, year: 1865, genre: "fiction", available: false},
  {id: 3, title: "Clean Code", pages: 214, year: 1815, genre: "fiction", available: true},
  {id: 4, title: "Walden", pages: 185, year: 1880, genre: "sci-fi", available: true},
  {id: 5, title: "Hamlet", pages: 258, year: 1923, genre: "tech", available: true},
  {id: 6, title: "Kindred", pages: 399, year: 1920, genre: "classic", available: true},
  {id: 7, title: "Siddhartha", pages: 366, year: 1929, genre: "sci-fi", available: false},
  {id: 8, title: "Rebecca", pages: 647, year: 1951, genre: "tech", available: true}
]
```
