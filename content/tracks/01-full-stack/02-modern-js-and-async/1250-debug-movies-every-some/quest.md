---
slug: "debug-movies-every-some"
title: "Debug: Are all movies under a release year limit?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Are all movies under a release year limit?

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an off-by-one at a boundary. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return `true` if **every** movie has `year` below `limit` (and `true` for an empty list, like `Array.prototype.every`).

The tests call your function with this data (also available as `MOVIES` in the tests):

```js
const MOVIES = [
  {id: 1, title: "Winter Kings", year: 1999, minutes: 165, rating: 4.9, genre: "thriller"},
  {id: 2, title: "Silver Fox", year: 1996, minutes: 109, rating: 6.3, genre: "sci-fi"},
  {id: 3, title: "Red Harbor", year: 1982, minutes: 100, rating: 5.8, genre: "sci-fi"},
  {id: 4, title: "Iron Garden", year: 2014, minutes: 91, rating: 5.9, genre: "sci-fi"},
  {id: 5, title: "Quiet Storm", year: 2007, minutes: 172, rating: 8.6, genre: "drama"},
  {id: 6, title: "Open Road", year: 1990, minutes: 150, rating: 9, genre: "thriller"},
  {id: 7, title: "Night Train", year: 2005, minutes: 171, rating: 9.3, genre: "comedy"},
  {id: 8, title: "Glass City", year: 1987, minutes: 166, rating: 7.4, genre: "comedy"}
]
```
