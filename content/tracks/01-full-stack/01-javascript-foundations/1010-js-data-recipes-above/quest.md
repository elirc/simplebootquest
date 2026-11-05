---
slug: "js-data-recipes-above"
title: "Data: Recipes with a cooking time above a limit"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Recipes with a cooking time above a limit

Return the name of every recipe whose `minutes` is **greater than** `min`, in the original order.

The tests call your function with this data (also available as `RECIPES` in the tests):

```js
const RECIPES = [
  {id: 1, name: "Paella", minutes: 32, calories: 277, cuisine: "middle-eastern", difficulty: "hard", vegetarian: true},
  {id: 2, name: "Risotto", minutes: 83, calories: 767, cuisine: "italian", difficulty: "medium", vegetarian: true},
  {id: 3, name: "Lasagne", minutes: 43, calories: 324, cuisine: "mexican", difficulty: "easy", vegetarian: false},
  {id: 4, name: "Falafel", minutes: 105, calories: 401, cuisine: "asian", difficulty: "medium", vegetarian: false},
  {id: 5, name: "Shakshuka", minutes: 36, calories: 865, cuisine: "mexican", difficulty: "medium", vegetarian: true},
  {id: 6, name: "Tacos", minutes: 107, calories: 220, cuisine: "mexican", difficulty: "hard", vegetarian: false},
  {id: 7, name: "Ramen", minutes: 93, calories: 874, cuisine: "asian", difficulty: "easy", vegetarian: false},
  {id: 8, name: "Chili", minutes: 54, calories: 462, cuisine: "mexican", difficulty: "hard", vegetarian: true}
]
```
