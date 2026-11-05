---
slug: "debug-books-average"
title: "Debug: Average publication year"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Average publication year

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes a total that is off by one. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the average `year` rounded to **one decimal place** (use `Math.round(x * 10) / 10`). Return `null` for an empty list.

The tests call your function with this data (also available as `BOOKS` in the tests):

```js
const BOOKS = [
  {id: 1, title: "Emma", pages: 548, year: 1907, genre: "classic", available: false},
  {id: 2, title: "Neuromancer", pages: 442, year: 1906, genre: "fiction", available: true},
  {id: 3, title: "Persuasion", pages: 655, year: 1835, genre: "classic", available: true},
  {id: 4, title: "Ulysses", pages: 768, year: 1912, genre: "tech", available: true},
  {id: 5, title: "Matilda", pages: 228, year: 2000, genre: "sci-fi", available: false},
  {id: 6, title: "Rebecca", pages: 616, year: 1898, genre: "fiction", available: false},
  {id: 7, title: "Hamlet", pages: 674, year: 1840, genre: "tech", available: false},
  {id: 8, title: "Dune", pages: 567, year: 1884, genre: "sci-fi", available: false}
]
```
