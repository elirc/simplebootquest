---
slug: "js-data-recipes-diff"
title: "Data: What changed between two snapshots?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# What changed between two snapshots?

Given yesterday's and today's recipes (same ids), return the ids whose `minutes` changed, in today's order.

The tests call your function with this data (also available as `BEFORE` / `AFTER` in the tests):

```js
const BEFORE = [
  {id: 1, name: "Falafel", minutes: 56, calories: 836, cuisine: "middle-eastern", difficulty: "medium", vegetarian: false},
  {id: 2, name: "Risotto", minutes: 110, calories: 472, cuisine: "italian", difficulty: "easy", vegetarian: false},
  {id: 3, name: "Pancakes", minutes: 34, calories: 400, cuisine: "middle-eastern", difficulty: "hard", vegetarian: true},
  {id: 4, name: "Shakshuka", minutes: 56, calories: 755, cuisine: "mexican", difficulty: "easy", vegetarian: false},
  {id: 5, name: "Lasagne", minutes: 106, calories: 368, cuisine: "mexican", difficulty: "medium", vegetarian: false},
  {id: 6, name: "Paella", minutes: 79, calories: 835, cuisine: "middle-eastern", difficulty: "medium", vegetarian: true},
  {id: 7, name: "Ramen", minutes: 67, calories: 563, cuisine: "italian", difficulty: "medium", vegetarian: true},
  {id: 8, name: "Curry", minutes: 69, calories: 584, cuisine: "middle-eastern", difficulty: "hard", vegetarian: false}
]
```
