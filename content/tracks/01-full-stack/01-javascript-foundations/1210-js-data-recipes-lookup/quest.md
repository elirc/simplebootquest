---
slug: "js-data-recipes-lookup"
title: "Data: Look up a recipe's cooking time"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Look up a recipe's cooking time

Return the `minutes` of the recipe whose name is `name`, or `null` if there isn't one.

The tests call your function with this data (also available as `RECIPES` in the tests):

```js
const RECIPES = [
  {id: 1, name: "Gyoza", minutes: 22, calories: 436, cuisine: "italian", difficulty: "medium", vegetarian: false},
  {id: 2, name: "Chili", minutes: 75, calories: 657, cuisine: "middle-eastern", difficulty: "hard", vegetarian: false},
  {id: 3, name: "Curry", minutes: 51, calories: 670, cuisine: "italian", difficulty: "hard", vegetarian: false},
  {id: 4, name: "Pho", minutes: 113, calories: 663, cuisine: "mexican", difficulty: "hard", vegetarian: false},
  {id: 5, name: "Lasagne", minutes: 84, calories: 850, cuisine: "middle-eastern", difficulty: "easy", vegetarian: false},
  {id: 6, name: "Risotto", minutes: 89, calories: 712, cuisine: "middle-eastern", difficulty: "easy", vegetarian: false},
  {id: 7, name: "Ramen", minutes: 34, calories: 578, cuisine: "middle-eastern", difficulty: "hard", vegetarian: false},
  {id: 8, name: "Shakshuka", minutes: 21, calories: 356, cuisine: "asian", difficulty: "easy", vegetarian: true}
]
```
