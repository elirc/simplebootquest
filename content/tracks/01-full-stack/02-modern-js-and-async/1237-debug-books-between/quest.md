---
slug: "debug-books-between"
title: "Debug: Books in a page count range"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Books in a page count range

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an off-by-one at a boundary. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the titles of books whose `pages` is between `low` and `high` **inclusive**. Use `filter` and `map`.

The tests call your function with this data (also available as `BOOKS` in the tests):

```js
const BOOKS = [
  {id: 1, title: "Rebecca", pages: 621, year: 1980, genre: "fiction", available: true},
  {id: 2, title: "Hamlet", pages: 203, year: 1843, genre: "fiction", available: true},
  {id: 3, title: "Ulysses", pages: 503, year: 1951, genre: "classic", available: true},
  {id: 4, title: "Emma", pages: 351, year: 1824, genre: "sci-fi", available: true},
  {id: 5, title: "Clean Code", pages: 626, year: 1933, genre: "classic", available: true},
  {id: 6, title: "Walden", pages: 159, year: 2005, genre: "classic", available: false},
  {id: 7, title: "Neuromancer", pages: 621, year: 1817, genre: "tech", available: true},
  {id: 8, title: "Persuasion", pages: 672, year: 1918, genre: "sci-fi", available: false}
]
```
