---
slug: "ts-data-recipes-count-cat"
title: "Data: Count recipes by cuisine"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Count recipes by cuisine

Return how many recipes have `cuisine` equal to `value`.

The tests call your function with this data (also available as `RECIPES` in the tests):

```js
const RECIPES = [
  {id: 1, name: "Paella", minutes: 119, calories: 778, cuisine: "asian", difficulty: "hard", vegetarian: true},
  {id: 2, name: "Falafel", minutes: 73, calories: 890, cuisine: "middle-eastern", difficulty: "medium", vegetarian: true},
  {id: 3, name: "Shakshuka", minutes: 82, calories: 471, cuisine: "italian", difficulty: "hard", vegetarian: false},
  {id: 4, name: "Chili", minutes: 106, calories: 934, cuisine: "asian", difficulty: "hard", vegetarian: true},
  {id: 5, name: "Ramen", minutes: 49, calories: 540, cuisine: "italian", difficulty: "easy", vegetarian: true},
  {id: 6, name: "Lasagne", minutes: 97, calories: 622, cuisine: "italian", difficulty: "hard", vegetarian: true},
  {id: 7, name: "Curry", minutes: 35, calories: 310, cuisine: "italian", difficulty: "easy", vegetarian: false},
  {id: 8, name: "Pancakes", minutes: 65, calories: 230, cuisine: "asian", difficulty: "hard", vegetarian: false}
]
```

Type the parameters and the return value. The interface is already written for you.
