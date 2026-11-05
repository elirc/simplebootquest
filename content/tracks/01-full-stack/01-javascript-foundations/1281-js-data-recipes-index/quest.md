---
slug: "js-data-recipes-index"
title: "Data: Index recipes by id"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Index recipes by id

Return an object mapping each `id` to the recipe's name, for fast lookups.

The tests call your function with this data (also available as `RECIPES` in the tests):

```js
const RECIPES = [
  {id: 1, name: "Ramen", minutes: 70, calories: 235, cuisine: "middle-eastern", difficulty: "easy", vegetarian: true},
  {id: 2, name: "Lasagne", minutes: 97, calories: 910, cuisine: "middle-eastern", difficulty: "easy", vegetarian: true},
  {id: 3, name: "Chili", minutes: 26, calories: 463, cuisine: "asian", difficulty: "hard", vegetarian: true},
  {id: 4, name: "Shakshuka", minutes: 117, calories: 306, cuisine: "asian", difficulty: "easy", vegetarian: true},
  {id: 5, name: "Paella", minutes: 71, calories: 233, cuisine: "italian", difficulty: "hard", vegetarian: false},
  {id: 6, name: "Gyoza", minutes: 104, calories: 456, cuisine: "asian", difficulty: "medium", vegetarian: false},
  {id: 7, name: "Tacos", minutes: 38, calories: 591, cuisine: "middle-eastern", difficulty: "hard", vegetarian: false},
  {id: 8, name: "Falafel", minutes: 84, calories: 888, cuisine: "mexican", difficulty: "hard", vegetarian: false}
]
```
