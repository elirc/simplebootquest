---
slug: "js-data-hotels-nth"
title: "Data: The n-th hotel by star rating"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The n-th hotel by star rating

Return the name of the hotel ranked `n` (1 = highest `stars`), or `null` if `n` is out of range.

The tests call your function with this data (also available as `HOTELS` in the tests):

```js
const HOTELS = [
  {id: 1, name: "Cityloft", nightlyPrice: 227, stars: 2, city: "Lisbon", breakfast: true},
  {id: 2, name: "Station Hotel", nightlyPrice: 342, stars: 4, city: "Kyoto", breakfast: false},
  {id: 3, name: "Riverside Inn", nightlyPrice: 345, stars: 2, city: "Toronto", breakfast: false},
  {id: 4, name: "Sea Breeze", nightlyPrice: 308, stars: 3, city: "Kyoto", breakfast: true},
  {id: 5, name: "Harbour View", nightlyPrice: 299, stars: 2, city: "Lisbon", breakfast: true},
  {id: 6, name: "Old Mill", nightlyPrice: 99, stars: 3, city: "Toronto", breakfast: false},
  {id: 7, name: "Olive Court", nightlyPrice: 196, stars: 3, city: "Lisbon", breakfast: false},
  {id: 8, name: "Pine Lodge", nightlyPrice: 274, stars: 1, city: "Toronto", breakfast: false}
]
```
