---
slug: "debug-books-top-n"
title: "Debug: Top books by page count"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Top books by page count

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes results in the wrong order. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the titles of the `n` books with the **highest** `pages`, highest first. Don't mutate the input.

The tests call your function with this data (also available as `BOOKS` in the tests):

```js
const BOOKS = [
  {id: 1, title: "Matilda", pages: 503, year: 2003, genre: "classic", available: false},
  {id: 2, title: "Persuasion", pages: 727, year: 1865, genre: "fiction", available: true},
  {id: 3, title: "Neuromancer", pages: 312, year: 1947, genre: "sci-fi", available: false},
  {id: 4, title: "Rebecca", pages: 531, year: 1864, genre: "tech", available: true},
  {id: 5, title: "Dune", pages: 140, year: 1886, genre: "classic", available: false},
  {id: 6, title: "Siddhartha", pages: 212, year: 1968, genre: "tech", available: true},
  {id: 7, title: "Kindred", pages: 258, year: 2005, genre: "sci-fi", available: true},
  {id: 8, title: "Walden", pages: 265, year: 1933, genre: "tech", available: false}
]
```
