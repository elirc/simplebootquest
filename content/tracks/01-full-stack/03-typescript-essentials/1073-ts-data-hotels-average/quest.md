---
slug: "ts-data-hotels-average"
title: "Data: Average star rating"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Average star rating

Return the average `stars` rounded to **one decimal place** (use `Math.round(x * 10) / 10`). Return `null` for an empty list.

The tests call your function with this data (also available as `HOTELS` in the tests):

```js
const HOTELS = [
  {id: 1, name: "Sea Breeze", nightlyPrice: 243, stars: 3, city: "Kyoto", breakfast: false},
  {id: 2, name: "Harbour View", nightlyPrice: 61, stars: 4, city: "Kyoto", breakfast: false},
  {id: 3, name: "The Grand", nightlyPrice: 373, stars: 5, city: "Toronto", breakfast: true},
  {id: 4, name: "Old Mill", nightlyPrice: 282, stars: 2, city: "Kyoto", breakfast: false},
  {id: 5, name: "Sky Garden", nightlyPrice: 391, stars: 1, city: "Kyoto", breakfast: false},
  {id: 6, name: "Northern Star", nightlyPrice: 86, stars: 1, city: "Kyoto", breakfast: false},
  {id: 7, name: "Olive Court", nightlyPrice: 292, stars: 3, city: "Lisbon", breakfast: false},
  {id: 8, name: "Riverside Inn", nightlyPrice: 116, stars: 3, city: "Kyoto", breakfast: false}
]
```

Type the parameters and the return value. The interface is already written for you.
