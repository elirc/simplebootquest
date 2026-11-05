---
slug: "debug-books-nth"
title: "Debug: The n-th book by publication year"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: The n-th book by publication year

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an off-by-one at a boundary. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the title of the book ranked `n` (1 = highest `year`), or `null` if `n` is out of range.

The tests call your function with this data (also available as `BOOKS` in the tests):

```js
const BOOKS = [
  {id: 1, title: "Persuasion", pages: 621, year: 1904, genre: "tech", available: true},
  {id: 2, title: "Clean Code", pages: 300, year: 1889, genre: "tech", available: true},
  {id: 3, title: "Matilda", pages: 195, year: 1915, genre: "sci-fi", available: false},
  {id: 4, title: "Ulysses", pages: 576, year: 1843, genre: "tech", available: false},
  {id: 5, title: "Siddhartha", pages: 776, year: 1895, genre: "tech", available: false},
  {id: 6, title: "Kindred", pages: 454, year: 1856, genre: "sci-fi", available: true},
  {id: 7, title: "Emma", pages: 611, year: 1928, genre: "fiction", available: false},
  {id: 8, title: "Neuromancer", pages: 278, year: 1853, genre: "tech", available: false}
]
```
