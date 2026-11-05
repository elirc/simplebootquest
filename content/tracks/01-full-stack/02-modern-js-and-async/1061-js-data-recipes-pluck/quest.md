---
slug: "js-data-recipes-pluck"
title: "Data: Pick just the fields the UI needs"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Destructure the parameter: `({ id, name }) => ({ id, name })`.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Pick just the fields the UI needs

Return a new array of objects with only `id`, `name` and `minutes` (in that order). APIs should never send more than the client needs.

The tests call your function with this data (also available as `RECIPES` in the tests):

```js
const RECIPES = [
  {id: 1, name: "Curry", minutes: 72, calories: 381, cuisine: "mexican", difficulty: "medium", vegetarian: true},
  {id: 2, name: "Shakshuka", minutes: 45, calories: 947, cuisine: "middle-eastern", difficulty: "hard", vegetarian: false},
  {id: 3, name: "Falafel", minutes: 70, calories: 657, cuisine: "asian", difficulty: "easy", vegetarian: true},
  {id: 4, name: "Ramen", minutes: 57, calories: 364, cuisine: "middle-eastern", difficulty: "medium", vegetarian: true},
  {id: 5, name: "Pancakes", minutes: 113, calories: 665, cuisine: "mexican", difficulty: "easy", vegetarian: true},
  {id: 6, name: "Gyoza", minutes: 88, calories: 269, cuisine: "mexican", difficulty: "hard", vegetarian: true},
  {id: 7, name: "Lasagne", minutes: 49, calories: 383, cuisine: "mexican", difficulty: "easy", vegetarian: true},
  {id: 8, name: "Pho", minutes: 116, calories: 796, cuisine: "mexican", difficulty: "medium", vegetarian: false}
]
```
