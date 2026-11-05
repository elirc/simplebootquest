---
slug: "ts-data-hotels-percent"
title: "Data: What share of hotels are breakfast included?"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# What share of hotels are breakfast included?

Return the percentage (0–100, rounded to a whole number) of hotels where `breakfast` is true. Return 0 for an empty list.

The tests call your function with this data (also available as `HOTELS` in the tests):

```js
const HOTELS = [
  {id: 1, name: "Sea Breeze", nightlyPrice: 272, stars: 2, city: "Kyoto", breakfast: true},
  {id: 2, name: "Maple House", nightlyPrice: 86, stars: 2, city: "Kyoto", breakfast: false},
  {id: 3, name: "Station Hotel", nightlyPrice: 96, stars: 4, city: "Kyoto", breakfast: false},
  {id: 4, name: "Northern Star", nightlyPrice: 139, stars: 5, city: "Kyoto", breakfast: true},
  {id: 5, name: "Riverside Inn", nightlyPrice: 386, stars: 1, city: "Kyoto", breakfast: false},
  {id: 6, name: "Old Mill", nightlyPrice: 234, stars: 3, city: "Lisbon", breakfast: false},
  {id: 7, name: "Sky Garden", nightlyPrice: 220, stars: 4, city: "Kyoto", breakfast: true},
  {id: 8, name: "Pine Lodge", nightlyPrice: 391, stars: 2, city: "Toronto", breakfast: true}
]
```

Type the parameters and the return value. The interface is already written for you.
