---
slug: "ts-data-recipes-every-some"
title: "Data: Are all recipes under a calories limit?"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Are all recipes under a calories limit?

Return `true` if **every** recipe has `calories` below `limit` (and `true` for an empty list, like `Array.prototype.every`).

The tests call your function with this data (also available as `RECIPES` in the tests):

```js
const RECIPES = [
  {id: 1, name: "Pho", minutes: 38, calories: 569, cuisine: "italian", difficulty: "easy", vegetarian: false},
  {id: 2, name: "Falafel", minutes: 90, calories: 284, cuisine: "asian", difficulty: "easy", vegetarian: false},
  {id: 3, name: "Lasagne", minutes: 120, calories: 446, cuisine: "italian", difficulty: "medium", vegetarian: true},
  {id: 4, name: "Paella", minutes: 16, calories: 293, cuisine: "asian", difficulty: "easy", vegetarian: false},
  {id: 5, name: "Tacos", minutes: 23, calories: 531, cuisine: "mexican", difficulty: "easy", vegetarian: true},
  {id: 6, name: "Ramen", minutes: 113, calories: 465, cuisine: "middle-eastern", difficulty: "easy", vegetarian: true},
  {id: 7, name: "Curry", minutes: 29, calories: 636, cuisine: "mexican", difficulty: "medium", vegetarian: true},
  {id: 8, name: "Chili", minutes: 71, calories: 377, cuisine: "mexican", difficulty: "easy", vegetarian: true}
]
```

Type the parameters and the return value. The interface is already written for you.
