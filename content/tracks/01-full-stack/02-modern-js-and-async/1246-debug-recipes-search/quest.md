---
slug: "debug-recipes-search"
title: "Debug: Search recipes by name"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Search recipes by name

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes case-sensitivity. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the names that **contain** `query`, ignoring case. An empty (or whitespace-only) query returns every name.

The tests call your function with this data (also available as `RECIPES` in the tests):

```js
const RECIPES = [
  {id: 1, name: "Ramen", minutes: 71, calories: 926, cuisine: "italian", difficulty: "hard", vegetarian: false},
  {id: 2, name: "Chili", minutes: 38, calories: 392, cuisine: "italian", difficulty: "hard", vegetarian: true},
  {id: 3, name: "Pho", minutes: 74, calories: 299, cuisine: "italian", difficulty: "hard", vegetarian: false},
  {id: 4, name: "Pancakes", minutes: 118, calories: 802, cuisine: "asian", difficulty: "hard", vegetarian: true},
  {id: 5, name: "Gyoza", minutes: 52, calories: 895, cuisine: "italian", difficulty: "easy", vegetarian: true},
  {id: 6, name: "Tacos", minutes: 24, calories: 474, cuisine: "asian", difficulty: "easy", vegetarian: true},
  {id: 7, name: "Risotto", minutes: 31, calories: 284, cuisine: "italian", difficulty: "hard", vegetarian: true},
  {id: 8, name: "Curry", minutes: 63, calories: 514, cuisine: "mexican", difficulty: "easy", vegetarian: true}
]
```
