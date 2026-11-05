---
slug: "ts-data-recipes-percent"
title: "Data: What share of recipes are vegetarian?"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# What share of recipes are vegetarian?

Return the percentage (0–100, rounded to a whole number) of recipes where `vegetarian` is true. Return 0 for an empty list.

The tests call your function with this data (also available as `RECIPES` in the tests):

```js
const RECIPES = [
  {id: 1, name: "Pho", minutes: 79, calories: 707, cuisine: "italian", difficulty: "easy", vegetarian: false},
  {id: 2, name: "Falafel", minutes: 114, calories: 662, cuisine: "middle-eastern", difficulty: "hard", vegetarian: true},
  {id: 3, name: "Shakshuka", minutes: 57, calories: 236, cuisine: "middle-eastern", difficulty: "hard", vegetarian: true},
  {id: 4, name: "Gyoza", minutes: 69, calories: 582, cuisine: "middle-eastern", difficulty: "medium", vegetarian: false},
  {id: 5, name: "Risotto", minutes: 21, calories: 813, cuisine: "mexican", difficulty: "medium", vegetarian: true},
  {id: 6, name: "Tacos", minutes: 26, calories: 449, cuisine: "middle-eastern", difficulty: "hard", vegetarian: false},
  {id: 7, name: "Ramen", minutes: 44, calories: 514, cuisine: "middle-eastern", difficulty: "medium", vegetarian: false},
  {id: 8, name: "Paella", minutes: 58, calories: 372, cuisine: "asian", difficulty: "easy", vegetarian: false}
]
```

Type the parameters and the return value. The interface is already written for you.
