---
slug: "ts-data-hotels-sum"
title: "Data: Total star rating of all hotels"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Total star rating of all hotels

Return the sum of `stars` across all hotels. An empty list totals 0.

The tests call your function with this data (also available as `HOTELS` in the tests):

```js
const HOTELS = [
  {id: 1, name: "Sea Breeze", nightlyPrice: 205, stars: 2, city: "Kyoto", breakfast: false},
  {id: 2, name: "Riverside Inn", nightlyPrice: 196, stars: 3, city: "Kyoto", breakfast: true},
  {id: 3, name: "Pine Lodge", nightlyPrice: 297, stars: 3, city: "Lisbon", breakfast: true},
  {id: 4, name: "Harbour View", nightlyPrice: 146, stars: 5, city: "Toronto", breakfast: true},
  {id: 5, name: "Maple House", nightlyPrice: 316, stars: 4, city: "Toronto", breakfast: true},
  {id: 6, name: "The Grand", nightlyPrice: 282, stars: 4, city: "Kyoto", breakfast: true},
  {id: 7, name: "Northern Star", nightlyPrice: 180, stars: 4, city: "Kyoto", breakfast: false},
  {id: 8, name: "Sky Garden", nightlyPrice: 169, stars: 2, city: "Kyoto", breakfast: false}
]
```

Type the parameters and the return value. The interface is already written for you.
