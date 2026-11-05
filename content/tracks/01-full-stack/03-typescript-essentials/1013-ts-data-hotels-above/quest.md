---
slug: "ts-data-hotels-above"
title: "Data: Hotels with a star rating above a limit"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Hotels with a star rating above a limit

Return the name of every hotel whose `stars` is **greater than** `min`, in the original order.

The tests call your function with this data (also available as `HOTELS` in the tests):

```js
const HOTELS = [
  {id: 1, name: "Olive Court", nightlyPrice: 389, stars: 4, city: "Toronto", breakfast: true},
  {id: 2, name: "Sea Breeze", nightlyPrice: 282, stars: 2, city: "Lisbon", breakfast: false},
  {id: 3, name: "Riverside Inn", nightlyPrice: 140, stars: 3, city: "Kyoto", breakfast: false},
  {id: 4, name: "Cityloft", nightlyPrice: 184, stars: 4, city: "Kyoto", breakfast: true},
  {id: 5, name: "Pine Lodge", nightlyPrice: 70, stars: 4, city: "Lisbon", breakfast: false},
  {id: 6, name: "Old Mill", nightlyPrice: 315, stars: 3, city: "Toronto", breakfast: true},
  {id: 7, name: "Station Hotel", nightlyPrice: 288, stars: 4, city: "Kyoto", breakfast: false},
  {id: 8, name: "Harbour View", nightlyPrice: 390, stars: 2, city: "Kyoto", breakfast: false}
]
```

Type the parameters and the return value. The interface is already written for you.
