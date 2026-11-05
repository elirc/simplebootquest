---
slug: "ts-data-recipes-max"
title: "Data: The recipe with the highest cooking time"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The recipe with the highest cooking time

Return the name of the recipe with the **highest** `minutes`. If several tie, return the first. Return `null` for an empty list.

The tests call your function with this data (also available as `RECIPES` in the tests):

```js
const RECIPES = [
  {id: 1, name: "Shakshuka", minutes: 15, calories: 855, cuisine: "italian", difficulty: "medium", vegetarian: true},
  {id: 2, name: "Tacos", minutes: 61, calories: 366, cuisine: "mexican", difficulty: "hard", vegetarian: true},
  {id: 3, name: "Chili", minutes: 13, calories: 761, cuisine: "mexican", difficulty: "medium", vegetarian: true},
  {id: 4, name: "Pho", minutes: 101, calories: 279, cuisine: "mexican", difficulty: "hard", vegetarian: false},
  {id: 5, name: "Gyoza", minutes: 116, calories: 793, cuisine: "asian", difficulty: "easy", vegetarian: false},
  {id: 6, name: "Pancakes", minutes: 46, calories: 512, cuisine: "asian", difficulty: "hard", vegetarian: false},
  {id: 7, name: "Paella", minutes: 91, calories: 679, cuisine: "asian", difficulty: "easy", vegetarian: false},
  {id: 8, name: "Ramen", minutes: 16, calories: 326, cuisine: "middle-eastern", difficulty: "medium", vegetarian: true}
]
```

Type the parameters and the return value. The interface is already written for you.
