---
slug: "debug-books-group-count"
title: "Debug: How many books per genre?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: How many books per genre?

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes counts that are off by one. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return an object mapping each `genre` to the number of books with it. Only include values that appear.

The tests call your function with this data (also available as `BOOKS` in the tests):

```js
const BOOKS = [
  {id: 1, title: "Matilda", pages: 675, year: 2004, genre: "tech", available: true},
  {id: 2, title: "Clean Code", pages: 433, year: 1915, genre: "fiction", available: true},
  {id: 3, title: "Siddhartha", pages: 394, year: 1988, genre: "fiction", available: false},
  {id: 4, title: "Rebecca", pages: 268, year: 1943, genre: "sci-fi", available: false},
  {id: 5, title: "Walden", pages: 313, year: 2005, genre: "fiction", available: false},
  {id: 6, title: "Hamlet", pages: 421, year: 1859, genre: "fiction", available: false},
  {id: 7, title: "Kindred", pages: 728, year: 1957, genre: "fiction", available: false},
  {id: 8, title: "Neuromancer", pages: 247, year: 1878, genre: "tech", available: true}
]
```
