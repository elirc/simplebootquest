---
slug: "debug-recipes-count-cat"
title: "Debug: Count recipes by cuisine"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Count recipes by cuisine

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an inverted condition. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return how many recipes have `cuisine` equal to `value`.

The tests call your function with this data (also available as `RECIPES` in the tests):

```js
const RECIPES = [
  {id: 1, name: "Pancakes", minutes: 40, calories: 795, cuisine: "middle-eastern", difficulty: "easy", vegetarian: true},
  {id: 2, name: "Risotto", minutes: 109, calories: 571, cuisine: "mexican", difficulty: "easy", vegetarian: true},
  {id: 3, name: "Pho", minutes: 39, calories: 609, cuisine: "italian", difficulty: "hard", vegetarian: false},
  {id: 4, name: "Lasagne", minutes: 23, calories: 728, cuisine: "asian", difficulty: "medium", vegetarian: true},
  {id: 5, name: "Ramen", minutes: 61, calories: 295, cuisine: "asian", difficulty: "hard", vegetarian: true},
  {id: 6, name: "Tacos", minutes: 45, calories: 473, cuisine: "mexican", difficulty: "medium", vegetarian: true},
  {id: 7, name: "Paella", minutes: 113, calories: 746, cuisine: "italian", difficulty: "easy", vegetarian: false},
  {id: 8, name: "Curry", minutes: 68, calories: 840, cuisine: "middle-eastern", difficulty: "easy", vegetarian: false}
]
```
