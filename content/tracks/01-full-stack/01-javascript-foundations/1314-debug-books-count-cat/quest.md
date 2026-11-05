---
slug: "debug-books-count-cat"
title: "Debug: Count books by genre"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Count books by genre

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an inverted condition. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return how many books have `genre` equal to `value`.

The tests call your function with this data (also available as `BOOKS` in the tests):

```js
const BOOKS = [
  {id: 1, title: "Rebecca", pages: 582, year: 1875, genre: "fiction", available: false},
  {id: 2, title: "Clean Code", pages: 363, year: 1845, genre: "tech", available: true},
  {id: 3, title: "Neuromancer", pages: 387, year: 1888, genre: "fiction", available: false},
  {id: 4, title: "Matilda", pages: 757, year: 1842, genre: "tech", available: false},
  {id: 5, title: "Emma", pages: 360, year: 1830, genre: "classic", available: true},
  {id: 6, title: "Hamlet", pages: 326, year: 1929, genre: "tech", available: false},
  {id: 7, title: "Dune", pages: 698, year: 1879, genre: "classic", available: true},
  {id: 8, title: "Ulysses", pages: 684, year: 1827, genre: "classic", available: true}
]
```
