---
slug: "js-data-recipes-avg-per"
title: "Data: Average cooking time per difficulty"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Average cooking time per difficulty

Return an object mapping each `difficulty` to the average `minutes` of its recipes, rounded to a whole number.

The tests call your function with this data (also available as `RECIPES` in the tests):

```js
const RECIPES = [
  {id: 1, name: "Risotto", minutes: 64, calories: 418, cuisine: "asian", difficulty: "hard", vegetarian: true},
  {id: 2, name: "Pho", minutes: 48, calories: 654, cuisine: "middle-eastern", difficulty: "hard", vegetarian: true},
  {id: 3, name: "Chili", minutes: 86, calories: 352, cuisine: "asian", difficulty: "hard", vegetarian: false},
  {id: 4, name: "Shakshuka", minutes: 118, calories: 881, cuisine: "asian", difficulty: "medium", vegetarian: false},
  {id: 5, name: "Curry", minutes: 98, calories: 676, cuisine: "italian", difficulty: "easy", vegetarian: true},
  {id: 6, name: "Lasagne", minutes: 44, calories: 333, cuisine: "mexican", difficulty: "easy", vegetarian: true},
  {id: 7, name: "Gyoza", minutes: 20, calories: 578, cuisine: "middle-eastern", difficulty: "hard", vegetarian: false},
  {id: 8, name: "Pancakes", minutes: 48, calories: 861, cuisine: "asian", difficulty: "medium", vegetarian: true}
]
```
