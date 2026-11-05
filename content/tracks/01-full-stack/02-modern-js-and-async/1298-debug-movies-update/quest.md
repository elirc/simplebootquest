---
slug: "debug-movies-update"
title: "Debug: Update movies immutably"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Update movies immutably

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an inverted condition. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return a **new** array where every movie with `genre` equal to `value` has `rating` increased by `amount`. Other movies are unchanged. **Don't mutate** the input objects (React state depends on this).

The tests call your function with this data (also available as `MOVIES` in the tests):

```js
const MOVIES = [
  {id: 1, title: "Blue River", year: 1992, minutes: 120, rating: 7.3, genre: "comedy"},
  {id: 2, title: "Open Road", year: 2018, minutes: 142, rating: 6.5, genre: "sci-fi"},
  {id: 3, title: "Iron Garden", year: 2005, minutes: 90, rating: 7, genre: "sci-fi"},
  {id: 4, title: "Last Light", year: 1995, minutes: 124, rating: 8.9, genre: "sci-fi"},
  {id: 5, title: "Red Harbor", year: 1986, minutes: 120, rating: 8.3, genre: "sci-fi"},
  {id: 6, title: "Winter Kings", year: 1987, minutes: 95, rating: 7.4, genre: "drama"},
  {id: 7, title: "Silver Fox", year: 2021, minutes: 136, rating: 7.1, genre: "drama"},
  {id: 8, title: "Cloud Atlas", year: 2019, minutes: 139, rating: 5.6, genre: "drama"}
]
```
