---
slug: "js-data-recipes-average"
title: "Data: Average calories"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Average calories

Return the average `calories` rounded to **one decimal place** (use `Math.round(x * 10) / 10`). Return `null` for an empty list.

The tests call your function with this data (also available as `RECIPES` in the tests):

```js
const RECIPES = [
  {id: 1, name: "Pancakes", minutes: 99, calories: 717, cuisine: "asian", difficulty: "hard", vegetarian: true},
  {id: 2, name: "Lasagne", minutes: 84, calories: 190, cuisine: "middle-eastern", difficulty: "medium", vegetarian: false},
  {id: 3, name: "Shakshuka", minutes: 93, calories: 471, cuisine: "middle-eastern", difficulty: "easy", vegetarian: true},
  {id: 4, name: "Paella", minutes: 39, calories: 212, cuisine: "middle-eastern", difficulty: "medium", vegetarian: true},
  {id: 5, name: "Pho", minutes: 32, calories: 505, cuisine: "italian", difficulty: "easy", vegetarian: false},
  {id: 6, name: "Risotto", minutes: 51, calories: 471, cuisine: "italian", difficulty: "medium", vegetarian: false},
  {id: 7, name: "Curry", minutes: 58, calories: 687, cuisine: "mexican", difficulty: "easy", vegetarian: true},
  {id: 8, name: "Falafel", minutes: 17, calories: 419, cuisine: "mexican", difficulty: "easy", vegetarian: true}
]
```
