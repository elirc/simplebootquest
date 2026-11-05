---
slug: "ts-data-hotels-min"
title: "Data: The hotel with the lowest nightly price"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The hotel with the lowest nightly price

Return the name of the hotel with the **lowest** `nightlyPrice` (first one on ties), or `null` for an empty list.

The tests call your function with this data (also available as `HOTELS` in the tests):

```js
const HOTELS = [
  {id: 1, name: "Pine Lodge", nightlyPrice: 229, stars: 2, city: "Lisbon", breakfast: true},
  {id: 2, name: "Sky Garden", nightlyPrice: 103, stars: 3, city: "Lisbon", breakfast: true},
  {id: 3, name: "Sea Breeze", nightlyPrice: 256, stars: 3, city: "Kyoto", breakfast: false},
  {id: 4, name: "Station Hotel", nightlyPrice: 211, stars: 2, city: "Lisbon", breakfast: false},
  {id: 5, name: "Olive Court", nightlyPrice: 255, stars: 4, city: "Toronto", breakfast: false},
  {id: 6, name: "Old Mill", nightlyPrice: 71, stars: 3, city: "Kyoto", breakfast: false},
  {id: 7, name: "Cityloft", nightlyPrice: 129, stars: 3, city: "Toronto", breakfast: false},
  {id: 8, name: "Maple House", nightlyPrice: 223, stars: 1, city: "Lisbon", breakfast: false}
]
```

Type the parameters and the return value. The interface is already written for you.
