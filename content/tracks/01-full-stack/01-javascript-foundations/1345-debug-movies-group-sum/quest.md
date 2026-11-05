---
slug: "debug-movies-group-sum"
title: "Debug: Total rating per genre"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Total rating per genre

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes counts that are off by one. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return an object mapping each `genre` to the **sum** of `rating` for movies in it.

The tests call your function with this data (also available as `MOVIES` in the tests):

```js
const MOVIES = [
  {id: 1, title: "Open Road", year: 2021, minutes: 175, rating: 7.9, genre: "comedy"},
  {id: 2, title: "Last Light", year: 2011, minutes: 137, rating: 7.2, genre: "comedy"},
  {id: 3, title: "Blue River", year: 2019, minutes: 136, rating: 8.6, genre: "comedy"},
  {id: 4, title: "Red Harbor", year: 1998, minutes: 105, rating: 5.9, genre: "comedy"},
  {id: 5, title: "Cloud Atlas", year: 1983, minutes: 100, rating: 6.7, genre: "sci-fi"},
  {id: 6, title: "Night Train", year: 1999, minutes: 94, rating: 7.1, genre: "drama"},
  {id: 7, title: "Winter Kings", year: 1982, minutes: 106, rating: 6.5, genre: "sci-fi"},
  {id: 8, title: "Quiet Storm", year: 1981, minutes: 172, rating: 9.1, genre: "drama"}
]
```
