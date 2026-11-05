---
slug: "debug-books-sum"
title: "Debug: Total page count of all books"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Total page count of all books

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes a total that is off by one. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the sum of `pages` across all books. An empty list totals 0.

The tests call your function with this data (also available as `BOOKS` in the tests):

```js
const BOOKS = [
  {id: 1, title: "Matilda", pages: 488, year: 1918, genre: "fiction", available: false},
  {id: 2, title: "Hamlet", pages: 556, year: 1891, genre: "tech", available: false},
  {id: 3, title: "Siddhartha", pages: 656, year: 1894, genre: "classic", available: false},
  {id: 4, title: "Neuromancer", pages: 200, year: 1993, genre: "classic", available: false},
  {id: 5, title: "Clean Code", pages: 424, year: 1892, genre: "sci-fi", available: false},
  {id: 6, title: "Rebecca", pages: 689, year: 1842, genre: "tech", available: true},
  {id: 7, title: "Kindred", pages: 439, year: 1980, genre: "sci-fi", available: false},
  {id: 8, title: "Persuasion", pages: 256, year: 1949, genre: "sci-fi", available: false}
]
```
