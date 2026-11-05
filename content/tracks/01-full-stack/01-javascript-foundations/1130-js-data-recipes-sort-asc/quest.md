---
slug: "js-data-recipes-sort-asc"
title: "Data: Sort recipes by calories"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["`[...array].sort(...)` copies first, so the original stays untouched.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Sort recipes by calories

Return the names sorted by `calories` from **lowest to highest**. Ties keep their original order. Don't mutate the input array.

The tests call your function with this data (also available as `RECIPES` in the tests):

```js
const RECIPES = [
  {id: 1, name: "Shakshuka", minutes: 100, calories: 741, cuisine: "asian", difficulty: "medium", vegetarian: false},
  {id: 2, name: "Pancakes", minutes: 16, calories: 602, cuisine: "asian", difficulty: "easy", vegetarian: false},
  {id: 3, name: "Falafel", minutes: 57, calories: 723, cuisine: "middle-eastern", difficulty: "medium", vegetarian: true},
  {id: 4, name: "Lasagne", minutes: 72, calories: 738, cuisine: "asian", difficulty: "easy", vegetarian: false},
  {id: 5, name: "Gyoza", minutes: 27, calories: 191, cuisine: "italian", difficulty: "medium", vegetarian: false},
  {id: 6, name: "Curry", minutes: 107, calories: 765, cuisine: "mexican", difficulty: "easy", vegetarian: true},
  {id: 7, name: "Pho", minutes: 91, calories: 725, cuisine: "asian", difficulty: "medium", vegetarian: true},
  {id: 8, name: "Tacos", minutes: 55, calories: 488, cuisine: "italian", difficulty: "hard", vegetarian: true}
]
```
