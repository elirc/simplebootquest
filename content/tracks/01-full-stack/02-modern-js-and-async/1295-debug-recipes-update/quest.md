---
slug: "debug-recipes-update"
title: "Debug: Update recipes immutably"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Update recipes immutably

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an inverted condition. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return a **new** array where every recipe with `difficulty` equal to `value` has `minutes` increased by `amount`. Other recipes are unchanged. **Don't mutate** the input objects (React state depends on this).

The tests call your function with this data (also available as `RECIPES` in the tests):

```js
const RECIPES = [
  {id: 1, name: "Gyoza", minutes: 35, calories: 196, cuisine: "italian", difficulty: "hard", vegetarian: false},
  {id: 2, name: "Chili", minutes: 56, calories: 824, cuisine: "italian", difficulty: "medium", vegetarian: false},
  {id: 3, name: "Curry", minutes: 10, calories: 419, cuisine: "middle-eastern", difficulty: "easy", vegetarian: false},
  {id: 4, name: "Ramen", minutes: 61, calories: 390, cuisine: "asian", difficulty: "easy", vegetarian: true},
  {id: 5, name: "Falafel", minutes: 54, calories: 428, cuisine: "italian", difficulty: "easy", vegetarian: false},
  {id: 6, name: "Lasagne", minutes: 77, calories: 231, cuisine: "italian", difficulty: "medium", vegetarian: false},
  {id: 7, name: "Shakshuka", minutes: 62, calories: 189, cuisine: "asian", difficulty: "easy", vegetarian: false},
  {id: 8, name: "Tacos", minutes: 56, calories: 827, cuisine: "italian", difficulty: "medium", vegetarian: false}
]
```
