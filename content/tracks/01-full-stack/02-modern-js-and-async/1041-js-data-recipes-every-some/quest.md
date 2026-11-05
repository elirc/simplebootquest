---
slug: "js-data-recipes-every-some"
title: "Data: Are all recipes under a calories limit?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Are all recipes under a calories limit?

Return `true` if **every** recipe has `calories` below `limit` (and `true` for an empty list, like `Array.prototype.every`).

The tests call your function with this data (also available as `RECIPES` in the tests):

```js
const RECIPES = [
  {id: 1, name: "Falafel", minutes: 90, calories: 320, cuisine: "asian", difficulty: "medium", vegetarian: true},
  {id: 2, name: "Gyoza", minutes: 18, calories: 181, cuisine: "asian", difficulty: "medium", vegetarian: true},
  {id: 3, name: "Paella", minutes: 21, calories: 676, cuisine: "mexican", difficulty: "easy", vegetarian: true},
  {id: 4, name: "Shakshuka", minutes: 80, calories: 405, cuisine: "asian", difficulty: "hard", vegetarian: true},
  {id: 5, name: "Pho", minutes: 50, calories: 678, cuisine: "mexican", difficulty: "hard", vegetarian: true},
  {id: 6, name: "Ramen", minutes: 45, calories: 805, cuisine: "middle-eastern", difficulty: "easy", vegetarian: false},
  {id: 7, name: "Curry", minutes: 53, calories: 802, cuisine: "middle-eastern", difficulty: "easy", vegetarian: false},
  {id: 8, name: "Tacos", minutes: 63, calories: 487, cuisine: "italian", difficulty: "medium", vegetarian: true}
]
```
