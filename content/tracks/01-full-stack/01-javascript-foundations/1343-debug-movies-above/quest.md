---
slug: "debug-movies-above"
title: "Debug: Movies with a release year above a limit"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Movies with a release year above a limit

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an off-by-one at a boundary. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the title of every movie whose `year` is **greater than** `min`, in the original order.

The tests call your function with this data (also available as `MOVIES` in the tests):

```js
const MOVIES = [
  {id: 1, title: "Cloud Atlas", year: 1992, minutes: 143, rating: 4.3, genre: "thriller"},
  {id: 2, title: "Paper Moon", year: 2014, minutes: 136, rating: 9.3, genre: "thriller"},
  {id: 3, title: "Glass City", year: 1999, minutes: 153, rating: 8.1, genre: "drama"},
  {id: 4, title: "Winter Kings", year: 1994, minutes: 151, rating: 6.7, genre: "thriller"},
  {id: 5, title: "Iron Garden", year: 2022, minutes: 105, rating: 8.1, genre: "drama"},
  {id: 6, title: "Silver Fox", year: 2002, minutes: 87, rating: 8.6, genre: "drama"},
  {id: 7, title: "Red Harbor", year: 2007, minutes: 174, rating: 7.3, genre: "drama"},
  {id: 8, title: "Quiet Storm", year: 2007, minutes: 92, rating: 6.4, genre: "comedy"}
]
```
