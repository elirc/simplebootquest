---
slug: "js-data-hotels-every-some"
title: "Data: Are all hotels under a nightly price limit?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Are all hotels under a nightly price limit?

Return `true` if **every** hotel has `nightlyPrice` below `limit` (and `true` for an empty list, like `Array.prototype.every`).

The tests call your function with this data (also available as `HOTELS` in the tests):

```js
const HOTELS = [
  {id: 1, name: "Station Hotel", nightlyPrice: 418, stars: 3, city: "Lisbon", breakfast: false},
  {id: 2, name: "Riverside Inn", nightlyPrice: 156, stars: 3, city: "Kyoto", breakfast: true},
  {id: 3, name: "Olive Court", nightlyPrice: 397, stars: 2, city: "Kyoto", breakfast: false},
  {id: 4, name: "Harbour View", nightlyPrice: 62, stars: 1, city: "Kyoto", breakfast: true},
  {id: 5, name: "The Grand", nightlyPrice: 182, stars: 5, city: "Kyoto", breakfast: true},
  {id: 6, name: "Sea Breeze", nightlyPrice: 136, stars: 5, city: "Lisbon", breakfast: false},
  {id: 7, name: "Cityloft", nightlyPrice: 285, stars: 3, city: "Toronto", breakfast: false},
  {id: 8, name: "Sky Garden", nightlyPrice: 250, stars: 4, city: "Lisbon", breakfast: true}
]
```
