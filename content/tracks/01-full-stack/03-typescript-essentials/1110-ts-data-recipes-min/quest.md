---
slug: "ts-data-recipes-min"
title: "Data: The recipe with the lowest calories"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The recipe with the lowest calories

Return the name of the recipe with the **lowest** `calories` (first one on ties), or `null` for an empty list.

The tests call your function with this data (also available as `RECIPES` in the tests):

```js
const RECIPES = [
  {id: 1, name: "Lasagne", minutes: 23, calories: 396, cuisine: "italian", difficulty: "hard", vegetarian: false},
  {id: 2, name: "Paella", minutes: 36, calories: 338, cuisine: "italian", difficulty: "hard", vegetarian: false},
  {id: 3, name: "Tacos", minutes: 64, calories: 263, cuisine: "middle-eastern", difficulty: "medium", vegetarian: true},
  {id: 4, name: "Chili", minutes: 15, calories: 392, cuisine: "middle-eastern", difficulty: "easy", vegetarian: false},
  {id: 5, name: "Falafel", minutes: 75, calories: 407, cuisine: "asian", difficulty: "easy", vegetarian: true},
  {id: 6, name: "Pho", minutes: 67, calories: 399, cuisine: "asian", difficulty: "medium", vegetarian: true},
  {id: 7, name: "Curry", minutes: 111, calories: 797, cuisine: "mexican", difficulty: "easy", vegetarian: true},
  {id: 8, name: "Shakshuka", minutes: 48, calories: 396, cuisine: "italian", difficulty: "medium", vegetarian: true}
]
```

Type the parameters and the return value. The interface is already written for you.
