---
slug: "ts-data-hotels-max"
title: "Data: The hotel with the highest star rating"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The hotel with the highest star rating

Return the name of the hotel with the **highest** `stars`. If several tie, return the first. Return `null` for an empty list.

The tests call your function with this data (also available as `HOTELS` in the tests):

```js
const HOTELS = [
  {id: 1, name: "Pine Lodge", nightlyPrice: 231, stars: 2, city: "Kyoto", breakfast: false},
  {id: 2, name: "Northern Star", nightlyPrice: 368, stars: 4, city: "Lisbon", breakfast: true},
  {id: 3, name: "Sky Garden", nightlyPrice: 316, stars: 3, city: "Toronto", breakfast: false},
  {id: 4, name: "Cityloft", nightlyPrice: 304, stars: 4, city: "Kyoto", breakfast: true},
  {id: 5, name: "Riverside Inn", nightlyPrice: 128, stars: 4, city: "Kyoto", breakfast: false},
  {id: 6, name: "Olive Court", nightlyPrice: 159, stars: 3, city: "Toronto", breakfast: false},
  {id: 7, name: "Maple House", nightlyPrice: 166, stars: 3, city: "Kyoto", breakfast: true},
  {id: 8, name: "Old Mill", nightlyPrice: 344, stars: 4, city: "Lisbon", breakfast: true}
]
```

Type the parameters and the return value. The interface is already written for you.
