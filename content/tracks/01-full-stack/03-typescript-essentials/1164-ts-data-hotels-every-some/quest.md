---
slug: "ts-data-hotels-every-some"
title: "Data: Are all hotels under a star rating limit?"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Are all hotels under a star rating limit?

Return `true` if **every** hotel has `stars` below `limit` (and `true` for an empty list, like `Array.prototype.every`).

The tests call your function with this data (also available as `HOTELS` in the tests):

```js
const HOTELS = [
  {id: 1, name: "The Grand", nightlyPrice: 230, stars: 4, city: "Lisbon", breakfast: false},
  {id: 2, name: "Station Hotel", nightlyPrice: 410, stars: 3, city: "Lisbon", breakfast: true},
  {id: 3, name: "Pine Lodge", nightlyPrice: 226, stars: 2, city: "Lisbon", breakfast: false},
  {id: 4, name: "Northern Star", nightlyPrice: 134, stars: 2, city: "Kyoto", breakfast: false},
  {id: 5, name: "Maple House", nightlyPrice: 396, stars: 4, city: "Kyoto", breakfast: false},
  {id: 6, name: "Cityloft", nightlyPrice: 378, stars: 3, city: "Kyoto", breakfast: false},
  {id: 7, name: "Sea Breeze", nightlyPrice: 296, stars: 5, city: "Kyoto", breakfast: false},
  {id: 8, name: "Olive Court", nightlyPrice: 151, stars: 5, city: "Kyoto", breakfast: false}
]
```

Type the parameters and the return value. The interface is already written for you.
