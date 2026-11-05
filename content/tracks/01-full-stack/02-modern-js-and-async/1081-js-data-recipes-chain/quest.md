---
slug: "js-data-recipes-chain"
title: "Data: Filter, sort, map: recipes in one difficulty"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Filter, sort, map: recipes in one difficulty

Return the names of recipes whose `difficulty` equals `value`, sorted by `calories` **highest first**. One chain of array methods is enough.

The tests call your function with this data (also available as `RECIPES` in the tests):

```js
const RECIPES = [
  {id: 1, name: "Falafel", minutes: 88, calories: 477, cuisine: "middle-eastern", difficulty: "hard", vegetarian: false},
  {id: 2, name: "Tacos", minutes: 103, calories: 410, cuisine: "asian", difficulty: "medium", vegetarian: true},
  {id: 3, name: "Chili", minutes: 113, calories: 808, cuisine: "asian", difficulty: "hard", vegetarian: false},
  {id: 4, name: "Paella", minutes: 88, calories: 765, cuisine: "italian", difficulty: "easy", vegetarian: true},
  {id: 5, name: "Risotto", minutes: 20, calories: 791, cuisine: "italian", difficulty: "hard", vegetarian: true},
  {id: 6, name: "Pancakes", minutes: 95, calories: 246, cuisine: "middle-eastern", difficulty: "hard", vegetarian: false},
  {id: 7, name: "Pho", minutes: 111, calories: 904, cuisine: "asian", difficulty: "hard", vegetarian: true},
  {id: 8, name: "Curry", minutes: 114, calories: 572, cuisine: "mexican", difficulty: "easy", vegetarian: true}
]
```
