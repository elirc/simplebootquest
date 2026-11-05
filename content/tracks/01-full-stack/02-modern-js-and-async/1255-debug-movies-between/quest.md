---
slug: "debug-movies-between"
title: "Debug: Movies in a runtime range"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Movies in a runtime range

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an off-by-one at a boundary. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the titles of movies whose `minutes` is between `low` and `high` **inclusive**. Use `filter` and `map`.

The tests call your function with this data (also available as `MOVIES` in the tests):

```js
const MOVIES = [
  {id: 1, title: "Winter Kings", year: 2001, minutes: 112, rating: 8.2, genre: "thriller"},
  {id: 2, title: "Glass City", year: 1983, minutes: 109, rating: 6.6, genre: "sci-fi"},
  {id: 3, title: "Blue River", year: 2000, minutes: 163, rating: 5.3, genre: "drama"},
  {id: 4, title: "Open Road", year: 1992, minutes: 103, rating: 5.1, genre: "sci-fi"},
  {id: 5, title: "Paper Moon", year: 2008, minutes: 139, rating: 6.5, genre: "sci-fi"},
  {id: 6, title: "Cloud Atlas", year: 2017, minutes: 146, rating: 6.2, genre: "sci-fi"},
  {id: 7, title: "Night Train", year: 1992, minutes: 152, rating: 5.2, genre: "drama"},
  {id: 8, title: "Red Harbor", year: 2006, minutes: 168, rating: 5.7, genre: "drama"}
]
```
