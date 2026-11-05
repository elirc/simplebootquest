---
slug: "js-data-recipes-search"
title: "Data: Search recipes by name"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Search recipes by name

Return the names that **contain** `query`, ignoring case. An empty (or whitespace-only) query returns every name.

The tests call your function with this data (also available as `RECIPES` in the tests):

```js
const RECIPES = [
  {id: 1, name: "Paella", minutes: 107, calories: 881, cuisine: "italian", difficulty: "easy", vegetarian: true},
  {id: 2, name: "Ramen", minutes: 45, calories: 637, cuisine: "italian", difficulty: "hard", vegetarian: true},
  {id: 3, name: "Shakshuka", minutes: 120, calories: 297, cuisine: "mexican", difficulty: "hard", vegetarian: true},
  {id: 4, name: "Falafel", minutes: 48, calories: 534, cuisine: "middle-eastern", difficulty: "easy", vegetarian: true},
  {id: 5, name: "Chili", minutes: 87, calories: 644, cuisine: "italian", difficulty: "medium", vegetarian: false},
  {id: 6, name: "Pho", minutes: 51, calories: 263, cuisine: "mexican", difficulty: "easy", vegetarian: true},
  {id: 7, name: "Risotto", minutes: 69, calories: 640, cuisine: "middle-eastern", difficulty: "medium", vegetarian: true},
  {id: 8, name: "Tacos", minutes: 78, calories: 858, cuisine: "mexican", difficulty: "medium", vegetarian: true}
]
```
