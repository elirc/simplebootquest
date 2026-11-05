---
slug: "js-data-recipes-histogram"
title: "Data: Bucket recipes by cooking time"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Bucket recipes by cooking time

Group recipes into buckets of width `width` by `minutes`: the bucket key is `Math.floor(value / width) * width`. Return an object of bucket → count.

The tests call your function with this data (also available as `RECIPES` in the tests):

```js
const RECIPES = [
  {id: 1, name: "Gyoza", minutes: 54, calories: 333, cuisine: "mexican", difficulty: "medium", vegetarian: true},
  {id: 2, name: "Lasagne", minutes: 56, calories: 441, cuisine: "mexican", difficulty: "medium", vegetarian: true},
  {id: 3, name: "Paella", minutes: 40, calories: 816, cuisine: "italian", difficulty: "hard", vegetarian: true},
  {id: 4, name: "Pancakes", minutes: 112, calories: 318, cuisine: "middle-eastern", difficulty: "medium", vegetarian: false},
  {id: 5, name: "Curry", minutes: 31, calories: 328, cuisine: "middle-eastern", difficulty: "medium", vegetarian: true},
  {id: 6, name: "Ramen", minutes: 107, calories: 884, cuisine: "italian", difficulty: "hard", vegetarian: true},
  {id: 7, name: "Tacos", minutes: 110, calories: 333, cuisine: "italian", difficulty: "hard", vegetarian: true},
  {id: 8, name: "Pho", minutes: 78, calories: 302, cuisine: "italian", difficulty: "easy", vegetarian: false}
]
```
