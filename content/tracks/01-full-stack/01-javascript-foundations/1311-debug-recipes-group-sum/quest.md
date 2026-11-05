---
slug: "debug-recipes-group-sum"
title: "Debug: Total calories per difficulty"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Total calories per difficulty

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes counts that are off by one. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return an object mapping each `difficulty` to the **sum** of `calories` for recipes in it.

The tests call your function with this data (also available as `RECIPES` in the tests):

```js
const RECIPES = [
  {id: 1, name: "Ramen", minutes: 68, calories: 231, cuisine: "mexican", difficulty: "easy", vegetarian: false},
  {id: 2, name: "Curry", minutes: 35, calories: 536, cuisine: "middle-eastern", difficulty: "hard", vegetarian: true},
  {id: 3, name: "Risotto", minutes: 46, calories: 866, cuisine: "asian", difficulty: "medium", vegetarian: true},
  {id: 4, name: "Lasagne", minutes: 43, calories: 695, cuisine: "middle-eastern", difficulty: "hard", vegetarian: false},
  {id: 5, name: "Chili", minutes: 65, calories: 189, cuisine: "asian", difficulty: "hard", vegetarian: true},
  {id: 6, name: "Pho", minutes: 73, calories: 290, cuisine: "italian", difficulty: "hard", vegetarian: false},
  {id: 7, name: "Paella", minutes: 104, calories: 314, cuisine: "middle-eastern", difficulty: "medium", vegetarian: true},
  {id: 8, name: "Gyoza", minutes: 53, calories: 481, cuisine: "asian", difficulty: "easy", vegetarian: false}
]
```
