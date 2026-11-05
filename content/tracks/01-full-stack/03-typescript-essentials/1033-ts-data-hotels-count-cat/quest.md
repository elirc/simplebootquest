---
slug: "ts-data-hotels-count-cat"
title: "Data: Count hotels by city"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Count hotels by city

Return how many hotels have `city` equal to `value`.

The tests call your function with this data (also available as `HOTELS` in the tests):

```js
const HOTELS = [
  {id: 1, name: "Old Mill", nightlyPrice: 212, stars: 2, city: "Lisbon", breakfast: true},
  {id: 2, name: "Harbour View", nightlyPrice: 48, stars: 1, city: "Lisbon", breakfast: true},
  {id: 3, name: "Maple House", nightlyPrice: 265, stars: 1, city: "Lisbon", breakfast: false},
  {id: 4, name: "Station Hotel", nightlyPrice: 177, stars: 5, city: "Lisbon", breakfast: false},
  {id: 5, name: "Riverside Inn", nightlyPrice: 70, stars: 4, city: "Toronto", breakfast: false},
  {id: 6, name: "Cityloft", nightlyPrice: 216, stars: 2, city: "Toronto", breakfast: true},
  {id: 7, name: "Olive Court", nightlyPrice: 188, stars: 4, city: "Toronto", breakfast: false},
  {id: 8, name: "Sea Breeze", nightlyPrice: 130, stars: 3, city: "Lisbon", breakfast: false}
]
```

Type the parameters and the return value. The interface is already written for you.
