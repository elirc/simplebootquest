---
slug: "js-data-recipes-max"
title: "Data: The recipe with the highest calories"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The recipe with the highest calories

Return the name of the recipe with the **highest** `calories`. If several tie, return the first. Return `null` for an empty list.

The tests call your function with this data (also available as `RECIPES` in the tests):

```js
const RECIPES = [
  {id: 1, name: "Lasagne", minutes: 24, calories: 851, cuisine: "asian", difficulty: "easy", vegetarian: true},
  {id: 2, name: "Chili", minutes: 57, calories: 202, cuisine: "italian", difficulty: "medium", vegetarian: false},
  {id: 3, name: "Ramen", minutes: 61, calories: 688, cuisine: "middle-eastern", difficulty: "easy", vegetarian: false},
  {id: 4, name: "Curry", minutes: 36, calories: 763, cuisine: "italian", difficulty: "hard", vegetarian: false},
  {id: 5, name: "Falafel", minutes: 67, calories: 607, cuisine: "middle-eastern", difficulty: "medium", vegetarian: true},
  {id: 6, name: "Shakshuka", minutes: 48, calories: 639, cuisine: "italian", difficulty: "hard", vegetarian: true},
  {id: 7, name: "Paella", minutes: 55, calories: 563, cuisine: "asian", difficulty: "easy", vegetarian: false},
  {id: 8, name: "Pancakes", minutes: 116, calories: 185, cuisine: "asian", difficulty: "medium", vegetarian: false}
]
```
