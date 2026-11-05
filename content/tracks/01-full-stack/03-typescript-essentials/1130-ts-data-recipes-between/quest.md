---
slug: "ts-data-recipes-between"
title: "Data: Recipes in a cooking time range"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Recipes in a cooking time range

Return the names of recipes whose `minutes` is between `low` and `high` **inclusive**. Use `filter` and `map`.

The tests call your function with this data (also available as `RECIPES` in the tests):

```js
const RECIPES = [
  {id: 1, name: "Paella", minutes: 51, calories: 780, cuisine: "mexican", difficulty: "medium", vegetarian: false},
  {id: 2, name: "Falafel", minutes: 33, calories: 685, cuisine: "mexican", difficulty: "hard", vegetarian: false},
  {id: 3, name: "Risotto", minutes: 16, calories: 185, cuisine: "asian", difficulty: "medium", vegetarian: false},
  {id: 4, name: "Curry", minutes: 67, calories: 808, cuisine: "middle-eastern", difficulty: "medium", vegetarian: true},
  {id: 5, name: "Lasagne", minutes: 68, calories: 871, cuisine: "middle-eastern", difficulty: "medium", vegetarian: false},
  {id: 6, name: "Ramen", minutes: 43, calories: 657, cuisine: "italian", difficulty: "easy", vegetarian: true},
  {id: 7, name: "Gyoza", minutes: 55, calories: 397, cuisine: "italian", difficulty: "hard", vegetarian: true},
  {id: 8, name: "Tacos", minutes: 79, calories: 422, cuisine: "mexican", difficulty: "hard", vegetarian: false}
]
```

Type the parameters and the return value. The interface is already written for you.
