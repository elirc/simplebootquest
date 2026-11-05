---
slug: "debug-movies-count-cat"
title: "Debug: Count movies by genre"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Count movies by genre

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an inverted condition. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return how many movies have `genre` equal to `value`.

The tests call your function with this data (also available as `MOVIES` in the tests):

```js
const MOVIES = [
  {id: 1, title: "Paper Moon", year: 1990, minutes: 91, rating: 4.6, genre: "comedy"},
  {id: 2, title: "Open Road", year: 2006, minutes: 101, rating: 6.7, genre: "comedy"},
  {id: 3, title: "Blue River", year: 1983, minutes: 123, rating: 8.7, genre: "sci-fi"},
  {id: 4, title: "Cloud Atlas", year: 1987, minutes: 119, rating: 5.9, genre: "drama"},
  {id: 5, title: "Glass City", year: 1990, minutes: 92, rating: 7.4, genre: "drama"},
  {id: 6, title: "Iron Garden", year: 1999, minutes: 144, rating: 4.1, genre: "sci-fi"},
  {id: 7, title: "Silver Fox", year: 1989, minutes: 118, rating: 5.4, genre: "drama"},
  {id: 8, title: "Night Train", year: 1992, minutes: 96, rating: 7.1, genre: "drama"}
]
```
