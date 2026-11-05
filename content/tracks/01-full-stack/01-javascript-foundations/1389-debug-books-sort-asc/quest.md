---
slug: "debug-books-sort-asc"
title: "Debug: Sort books by page count"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Sort books by page count

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes results in the wrong order. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the titles sorted by `pages` from **lowest to highest**. Ties keep their original order. Don't mutate the input array.

The tests call your function with this data (also available as `BOOKS` in the tests):

```js
const BOOKS = [
  {id: 1, title: "Ulysses", pages: 434, year: 1929, genre: "tech", available: false},
  {id: 2, title: "Emma", pages: 329, year: 1898, genre: "classic", available: false},
  {id: 3, title: "Neuromancer", pages: 403, year: 2011, genre: "sci-fi", available: true},
  {id: 4, title: "Rebecca", pages: 454, year: 1992, genre: "classic", available: false},
  {id: 5, title: "Dune", pages: 702, year: 2002, genre: "classic", available: false},
  {id: 6, title: "Persuasion", pages: 628, year: 1830, genre: "tech", available: false},
  {id: 7, title: "Kindred", pages: 216, year: 1964, genre: "sci-fi", available: false},
  {id: 8, title: "Hamlet", pages: 691, year: 1835, genre: "tech", available: true}
]
```
