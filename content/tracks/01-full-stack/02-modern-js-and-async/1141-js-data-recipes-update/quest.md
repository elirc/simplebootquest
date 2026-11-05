---
slug: "js-data-recipes-update"
title: "Data: Update recipes immutably"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Spread to copy: `{ ...x, field: newValue }`.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Update recipes immutably

Return a **new** array where every recipe with `cuisine` equal to `value` has `calories` increased by `amount`. Other recipes are unchanged. **Don't mutate** the input objects (React state depends on this).

The tests call your function with this data (also available as `RECIPES` in the tests):

```js
const RECIPES = [
  {id: 1, name: "Paella", minutes: 96, calories: 297, cuisine: "middle-eastern", difficulty: "easy", vegetarian: true},
  {id: 2, name: "Lasagne", minutes: 18, calories: 604, cuisine: "italian", difficulty: "medium", vegetarian: true},
  {id: 3, name: "Falafel", minutes: 15, calories: 821, cuisine: "italian", difficulty: "hard", vegetarian: false},
  {id: 4, name: "Curry", minutes: 65, calories: 693, cuisine: "mexican", difficulty: "hard", vegetarian: true},
  {id: 5, name: "Risotto", minutes: 63, calories: 215, cuisine: "italian", difficulty: "hard", vegetarian: false},
  {id: 6, name: "Pancakes", minutes: 55, calories: 341, cuisine: "asian", difficulty: "medium", vegetarian: true},
  {id: 7, name: "Gyoza", minutes: 83, calories: 843, cuisine: "middle-eastern", difficulty: "medium", vegetarian: true},
  {id: 8, name: "Tacos", minutes: 64, calories: 941, cuisine: "italian", difficulty: "hard", vegetarian: false}
]
```
