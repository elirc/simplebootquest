---
slug: "js-data-recipes-paginate"
title: "Data: Paginate recipes"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Paginate recipes

Return `{ items, page, totalPages }` where `items` are the names on page `page` (1-based) of size `size`. Out-of-range pages return an empty `items` array.

The tests call your function with this data (also available as `RECIPES` in the tests):

```js
const RECIPES = [
  {id: 1, name: "Shakshuka", minutes: 38, calories: 345, cuisine: "italian", difficulty: "medium", vegetarian: true},
  {id: 2, name: "Tacos", minutes: 83, calories: 791, cuisine: "mexican", difficulty: "easy", vegetarian: false},
  {id: 3, name: "Gyoza", minutes: 13, calories: 451, cuisine: "italian", difficulty: "easy", vegetarian: true},
  {id: 4, name: "Chili", minutes: 94, calories: 630, cuisine: "mexican", difficulty: "medium", vegetarian: true},
  {id: 5, name: "Ramen", minutes: 41, calories: 751, cuisine: "asian", difficulty: "easy", vegetarian: true},
  {id: 6, name: "Curry", minutes: 21, calories: 659, cuisine: "mexican", difficulty: "easy", vegetarian: true},
  {id: 7, name: "Lasagne", minutes: 25, calories: 409, cuisine: "mexican", difficulty: "easy", vegetarian: false},
  {id: 8, name: "Falafel", minutes: 90, calories: 818, cuisine: "middle-eastern", difficulty: "medium", vegetarian: false}
]
```
