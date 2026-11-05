---
slug: "js-data-recipes-top-n"
title: "Data: Top recipes by calories"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Top recipes by calories

Return the names of the `n` recipes with the **highest** `calories`, highest first. Don't mutate the input.

The tests call your function with this data (also available as `RECIPES` in the tests):

```js
const RECIPES = [
  {id: 1, name: "Pancakes", minutes: 107, calories: 591, cuisine: "asian", difficulty: "medium", vegetarian: true},
  {id: 2, name: "Pho", minutes: 16, calories: 608, cuisine: "mexican", difficulty: "medium", vegetarian: false},
  {id: 3, name: "Risotto", minutes: 13, calories: 464, cuisine: "mexican", difficulty: "easy", vegetarian: false},
  {id: 4, name: "Chili", minutes: 60, calories: 202, cuisine: "mexican", difficulty: "hard", vegetarian: false},
  {id: 5, name: "Shakshuka", minutes: 22, calories: 432, cuisine: "italian", difficulty: "hard", vegetarian: false},
  {id: 6, name: "Paella", minutes: 95, calories: 264, cuisine: "italian", difficulty: "medium", vegetarian: false},
  {id: 7, name: "Falafel", minutes: 43, calories: 782, cuisine: "mexican", difficulty: "hard", vegetarian: false},
  {id: 8, name: "Curry", minutes: 34, calories: 610, cuisine: "mexican", difficulty: "medium", vegetarian: false}
]
```
