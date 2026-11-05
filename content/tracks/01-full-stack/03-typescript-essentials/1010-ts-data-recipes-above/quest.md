---
slug: "ts-data-recipes-above"
title: "Data: Recipes with a calories above a limit"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Recipes with a calories above a limit

Return the name of every recipe whose `calories` is **greater than** `min`, in the original order.

The tests call your function with this data (also available as `RECIPES` in the tests):

```js
const RECIPES = [
  {id: 1, name: "Ramen", minutes: 98, calories: 357, cuisine: "middle-eastern", difficulty: "medium", vegetarian: true},
  {id: 2, name: "Tacos", minutes: 27, calories: 258, cuisine: "italian", difficulty: "hard", vegetarian: false},
  {id: 3, name: "Pancakes", minutes: 34, calories: 664, cuisine: "middle-eastern", difficulty: "hard", vegetarian: false},
  {id: 4, name: "Pho", minutes: 13, calories: 516, cuisine: "middle-eastern", difficulty: "medium", vegetarian: true},
  {id: 5, name: "Shakshuka", minutes: 94, calories: 730, cuisine: "italian", difficulty: "easy", vegetarian: false},
  {id: 6, name: "Falafel", minutes: 69, calories: 423, cuisine: "middle-eastern", difficulty: "medium", vegetarian: false},
  {id: 7, name: "Chili", minutes: 21, calories: 795, cuisine: "middle-eastern", difficulty: "easy", vegetarian: false},
  {id: 8, name: "Risotto", minutes: 85, calories: 948, cuisine: "mexican", difficulty: "medium", vegetarian: false}
]
```

Type the parameters and the return value. The interface is already written for you.
