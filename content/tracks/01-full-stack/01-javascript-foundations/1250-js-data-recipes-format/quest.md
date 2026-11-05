---
slug: "js-data-recipes-format"
title: "Data: Format recipes as labels"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Format recipes as labels

Return one string per recipe: `"<name> (<calories>)"`, e.g. `"Pancakes (684)"`.

The tests call your function with this data (also available as `RECIPES` in the tests):

```js
const RECIPES = [
  {id: 1, name: "Pancakes", minutes: 61, calories: 684, cuisine: "italian", difficulty: "medium", vegetarian: true},
  {id: 2, name: "Paella", minutes: 107, calories: 182, cuisine: "asian", difficulty: "easy", vegetarian: false},
  {id: 3, name: "Pho", minutes: 28, calories: 613, cuisine: "italian", difficulty: "medium", vegetarian: true},
  {id: 4, name: "Ramen", minutes: 118, calories: 356, cuisine: "italian", difficulty: "medium", vegetarian: true},
  {id: 5, name: "Tacos", minutes: 44, calories: 504, cuisine: "italian", difficulty: "easy", vegetarian: false},
  {id: 6, name: "Curry", minutes: 29, calories: 455, cuisine: "asian", difficulty: "medium", vegetarian: true},
  {id: 7, name: "Falafel", minutes: 63, calories: 931, cuisine: "mexican", difficulty: "easy", vegetarian: true},
  {id: 8, name: "Chili", minutes: 77, calories: 853, cuisine: "italian", difficulty: "easy", vegetarian: true}
]
```
