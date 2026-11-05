---
slug: "debug-movies-sum"
title: "Debug: Total release year of all movies"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Total release year of all movies

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes a total that is off by one. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the sum of `year` across all movies. An empty list totals 0.

The tests call your function with this data (also available as `MOVIES` in the tests):

```js
const MOVIES = [
  {id: 1, title: "Blue River", year: 1997, minutes: 134, rating: 4.6, genre: "comedy"},
  {id: 2, title: "Quiet Storm", year: 1980, minutes: 103, rating: 8.2, genre: "sci-fi"},
  {id: 3, title: "Cloud Atlas", year: 1995, minutes: 141, rating: 4.1, genre: "sci-fi"},
  {id: 4, title: "Night Train", year: 2001, minutes: 170, rating: 6.8, genre: "drama"},
  {id: 5, title: "Red Harbor", year: 2001, minutes: 85, rating: 4.7, genre: "comedy"},
  {id: 6, title: "Winter Kings", year: 2006, minutes: 139, rating: 4.9, genre: "comedy"},
  {id: 7, title: "Glass City", year: 2002, minutes: 154, rating: 7.6, genre: "comedy"},
  {id: 8, title: "Iron Garden", year: 2024, minutes: 99, rating: 6.9, genre: "comedy"}
]
```
