---
slug: "js-data-recipes-sum"
title: "Data: Total cooking time of all recipes"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Total cooking time of all recipes

Return the sum of `minutes` across all recipes. An empty list totals 0.

The tests call your function with this data (also available as `RECIPES` in the tests):

```js
const RECIPES = [
  {id: 1, name: "Risotto", minutes: 19, calories: 568, cuisine: "italian", difficulty: "hard", vegetarian: true},
  {id: 2, name: "Lasagne", minutes: 74, calories: 757, cuisine: "middle-eastern", difficulty: "hard", vegetarian: true},
  {id: 3, name: "Pancakes", minutes: 38, calories: 444, cuisine: "mexican", difficulty: "medium", vegetarian: true},
  {id: 4, name: "Paella", minutes: 64, calories: 503, cuisine: "italian", difficulty: "easy", vegetarian: true},
  {id: 5, name: "Tacos", minutes: 38, calories: 460, cuisine: "italian", difficulty: "easy", vegetarian: true},
  {id: 6, name: "Shakshuka", minutes: 61, calories: 771, cuisine: "middle-eastern", difficulty: "easy", vegetarian: true},
  {id: 7, name: "Gyoza", minutes: 102, calories: 245, cuisine: "mexican", difficulty: "easy", vegetarian: true},
  {id: 8, name: "Falafel", minutes: 83, calories: 948, cuisine: "asian", difficulty: "medium", vegetarian: false}
]
```
