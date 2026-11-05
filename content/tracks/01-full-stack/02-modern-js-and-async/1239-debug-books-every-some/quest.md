---
slug: "debug-books-every-some"
title: "Debug: Are all books under a page count limit?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Are all books under a page count limit?

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an off-by-one at a boundary. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return `true` if **every** book has `pages` below `limit` (and `true` for an empty list, like `Array.prototype.every`).

The tests call your function with this data (also available as `BOOKS` in the tests):

```js
const BOOKS = [
  {id: 1, title: "Rebecca", pages: 426, year: 1835, genre: "classic", available: true},
  {id: 2, title: "Persuasion", pages: 343, year: 1966, genre: "fiction", available: false},
  {id: 3, title: "Ulysses", pages: 709, year: 1891, genre: "tech", available: false},
  {id: 4, title: "Hamlet", pages: 622, year: 1979, genre: "tech", available: false},
  {id: 5, title: "Emma", pages: 756, year: 1959, genre: "sci-fi", available: false},
  {id: 6, title: "Dune", pages: 158, year: 1854, genre: "sci-fi", available: true},
  {id: 7, title: "Neuromancer", pages: 184, year: 1983, genre: "tech", available: true},
  {id: 8, title: "Walden", pages: 438, year: 1816, genre: "fiction", available: false}
]
```
