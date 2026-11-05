---
slug: "js-data-recipes-nth"
title: "Data: The n-th recipe by cooking time"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The n-th recipe by cooking time

Return the name of the recipe ranked `n` (1 = highest `minutes`), or `null` if `n` is out of range.

The tests call your function with this data (also available as `RECIPES` in the tests):

```js
const RECIPES = [
  {id: 1, name: "Chili", minutes: 93, calories: 217, cuisine: "asian", difficulty: "medium", vegetarian: false},
  {id: 2, name: "Gyoza", minutes: 116, calories: 758, cuisine: "italian", difficulty: "hard", vegetarian: true},
  {id: 3, name: "Risotto", minutes: 66, calories: 470, cuisine: "asian", difficulty: "medium", vegetarian: true},
  {id: 4, name: "Shakshuka", minutes: 71, calories: 253, cuisine: "mexican", difficulty: "medium", vegetarian: false},
  {id: 5, name: "Tacos", minutes: 87, calories: 726, cuisine: "asian", difficulty: "medium", vegetarian: true},
  {id: 6, name: "Paella", minutes: 63, calories: 559, cuisine: "italian", difficulty: "medium", vegetarian: true},
  {id: 7, name: "Curry", minutes: 38, calories: 634, cuisine: "mexican", difficulty: "easy", vegetarian: true},
  {id: 8, name: "Pho", minutes: 99, calories: 946, cuisine: "asian", difficulty: "medium", vegetarian: true}
]
```
