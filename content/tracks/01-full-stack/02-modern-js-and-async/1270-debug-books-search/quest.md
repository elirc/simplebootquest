---
slug: "debug-books-search"
title: "Debug: Search books by title"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Search books by title

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes case-sensitivity. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the titles that **contain** `query`, ignoring case. An empty (or whitespace-only) query returns every title.

The tests call your function with this data (also available as `BOOKS` in the tests):

```js
const BOOKS = [
  {id: 1, title: "Dune", pages: 302, year: 1868, genre: "fiction", available: true},
  {id: 2, title: "Kindred", pages: 297, year: 1853, genre: "sci-fi", available: true},
  {id: 3, title: "Matilda", pages: 162, year: 1991, genre: "fiction", available: true},
  {id: 4, title: "Siddhartha", pages: 183, year: 1962, genre: "classic", available: true},
  {id: 5, title: "Neuromancer", pages: 767, year: 2008, genre: "tech", available: true},
  {id: 6, title: "Rebecca", pages: 376, year: 1919, genre: "fiction", available: false},
  {id: 7, title: "Clean Code", pages: 215, year: 1859, genre: "sci-fi", available: true},
  {id: 8, title: "Hamlet", pages: 668, year: 1866, genre: "classic", available: true}
]
```
