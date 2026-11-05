---
slug: "debug-books-lookup"
title: "Debug: Look up a book's page count"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Look up a book's page count

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an inverted condition. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the `pages` of the book whose title is `title`, or `null` if there isn't one.

The tests call your function with this data (also available as `BOOKS` in the tests):

```js
const BOOKS = [
  {id: 1, title: "Dune", pages: 282, year: 1889, genre: "fiction", available: true},
  {id: 2, title: "Persuasion", pages: 235, year: 1842, genre: "classic", available: false},
  {id: 3, title: "Siddhartha", pages: 369, year: 1863, genre: "tech", available: true},
  {id: 4, title: "Kindred", pages: 530, year: 1833, genre: "tech", available: true},
  {id: 5, title: "Walden", pages: 161, year: 1870, genre: "tech", available: false},
  {id: 6, title: "Ulysses", pages: 356, year: 1911, genre: "tech", available: false},
  {id: 7, title: "Hamlet", pages: 674, year: 1873, genre: "sci-fi", available: false},
  {id: 8, title: "Matilda", pages: 593, year: 2009, genre: "sci-fi", available: false}
]
```
