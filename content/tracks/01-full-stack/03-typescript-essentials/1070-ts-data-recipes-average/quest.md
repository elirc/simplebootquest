---
slug: "ts-data-recipes-average"
title: "Data: Average calories"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Average calories

Return the average `calories` rounded to **one decimal place** (use `Math.round(x * 10) / 10`). Return `null` for an empty list.

The tests call your function with this data (also available as `RECIPES` in the tests):

```js
const RECIPES = [
  {id: 1, name: "Tacos", minutes: 66, calories: 740, cuisine: "mexican", difficulty: "easy", vegetarian: false},
  {id: 2, name: "Pancakes", minutes: 103, calories: 229, cuisine: "asian", difficulty: "medium", vegetarian: false},
  {id: 3, name: "Pho", minutes: 41, calories: 916, cuisine: "asian", difficulty: "easy", vegetarian: false},
  {id: 4, name: "Ramen", minutes: 35, calories: 210, cuisine: "mexican", difficulty: "hard", vegetarian: false},
  {id: 5, name: "Falafel", minutes: 98, calories: 368, cuisine: "mexican", difficulty: "easy", vegetarian: true},
  {id: 6, name: "Curry", minutes: 84, calories: 946, cuisine: "mexican", difficulty: "easy", vegetarian: true},
  {id: 7, name: "Paella", minutes: 57, calories: 834, cuisine: "mexican", difficulty: "easy", vegetarian: true},
  {id: 8, name: "Gyoza", minutes: 70, calories: 389, cuisine: "italian", difficulty: "hard", vegetarian: true}
]
```

Type the parameters and the return value. The interface is already written for you.
