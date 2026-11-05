---
slug: "ts-data-recipes-pluck"
title: "Data: Pick just the fields the UI needs"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Destructure the parameter: `({ id, name }) => ({ id, name })`.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Pick just the fields the UI needs

Return a new array of objects with only `id`, `name` and `minutes` (in that order). APIs should never send more than the client needs.

The tests call your function with this data (also available as `RECIPES` in the tests):

```js
const RECIPES = [
  {id: 1, name: "Shakshuka", minutes: 66, calories: 233, cuisine: "middle-eastern", difficulty: "medium", vegetarian: true},
  {id: 2, name: "Falafel", minutes: 108, calories: 437, cuisine: "mexican", difficulty: "medium", vegetarian: true},
  {id: 3, name: "Risotto", minutes: 23, calories: 256, cuisine: "mexican", difficulty: "easy", vegetarian: false},
  {id: 4, name: "Paella", minutes: 25, calories: 717, cuisine: "middle-eastern", difficulty: "medium", vegetarian: true},
  {id: 5, name: "Pancakes", minutes: 40, calories: 289, cuisine: "middle-eastern", difficulty: "medium", vegetarian: true},
  {id: 6, name: "Lasagne", minutes: 99, calories: 204, cuisine: "mexican", difficulty: "easy", vegetarian: true},
  {id: 7, name: "Chili", minutes: 74, calories: 555, cuisine: "middle-eastern", difficulty: "easy", vegetarian: true},
  {id: 8, name: "Ramen", minutes: 85, calories: 667, cuisine: "italian", difficulty: "medium", vegetarian: true}
]
```

Type the parameters and the return value. The interface is already written for you.
