---
slug: "js-data-recipes-group-sum"
title: "Data: Total cooking time per cuisine"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Total cooking time per cuisine

Return an object mapping each `cuisine` to the **sum** of `minutes` for recipes in it.

The tests call your function with this data (also available as `RECIPES` in the tests):

```js
const RECIPES = [
  {id: 1, name: "Pho", minutes: 68, calories: 631, cuisine: "middle-eastern", difficulty: "medium", vegetarian: true},
  {id: 2, name: "Gyoza", minutes: 29, calories: 411, cuisine: "mexican", difficulty: "medium", vegetarian: true},
  {id: 3, name: "Pancakes", minutes: 105, calories: 505, cuisine: "asian", difficulty: "hard", vegetarian: false},
  {id: 4, name: "Curry", minutes: 12, calories: 897, cuisine: "middle-eastern", difficulty: "easy", vegetarian: false},
  {id: 5, name: "Ramen", minutes: 112, calories: 793, cuisine: "italian", difficulty: "easy", vegetarian: true},
  {id: 6, name: "Paella", minutes: 12, calories: 930, cuisine: "italian", difficulty: "medium", vegetarian: true},
  {id: 7, name: "Lasagne", minutes: 80, calories: 265, cuisine: "mexican", difficulty: "easy", vegetarian: false},
  {id: 8, name: "Risotto", minutes: 60, calories: 426, cuisine: "middle-eastern", difficulty: "hard", vegetarian: false}
]
```
