---
slug: "js-data-recipes-percent"
title: "Data: What share of recipes are vegetarian?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# What share of recipes are vegetarian?

Return the percentage (0–100, rounded to a whole number) of recipes where `vegetarian` is true. Return 0 for an empty list.

The tests call your function with this data (also available as `RECIPES` in the tests):

```js
const RECIPES = [
  {id: 1, name: "Gyoza", minutes: 117, calories: 878, cuisine: "middle-eastern", difficulty: "medium", vegetarian: true},
  {id: 2, name: "Shakshuka", minutes: 19, calories: 231, cuisine: "italian", difficulty: "easy", vegetarian: false},
  {id: 3, name: "Paella", minutes: 108, calories: 582, cuisine: "italian", difficulty: "medium", vegetarian: false},
  {id: 4, name: "Curry", minutes: 16, calories: 331, cuisine: "middle-eastern", difficulty: "medium", vegetarian: false},
  {id: 5, name: "Chili", minutes: 44, calories: 891, cuisine: "italian", difficulty: "hard", vegetarian: true},
  {id: 6, name: "Lasagne", minutes: 75, calories: 536, cuisine: "asian", difficulty: "medium", vegetarian: true},
  {id: 7, name: "Falafel", minutes: 48, calories: 547, cuisine: "middle-eastern", difficulty: "hard", vegetarian: true},
  {id: 8, name: "Ramen", minutes: 114, calories: 949, cuisine: "middle-eastern", difficulty: "hard", vegetarian: false}
]
```
