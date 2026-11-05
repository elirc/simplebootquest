---
slug: "js-data-hotels-percent"
title: "Data: What share of hotels are breakfast included?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# What share of hotels are breakfast included?

Return the percentage (0–100, rounded to a whole number) of hotels where `breakfast` is true. Return 0 for an empty list.

The tests call your function with this data (also available as `HOTELS` in the tests):

```js
const HOTELS = [
  {id: 1, name: "Old Mill", nightlyPrice: 223, stars: 4, city: "Lisbon", breakfast: true},
  {id: 2, name: "Sky Garden", nightlyPrice: 317, stars: 1, city: "Toronto", breakfast: true},
  {id: 3, name: "Maple House", nightlyPrice: 150, stars: 2, city: "Kyoto", breakfast: true},
  {id: 4, name: "Olive Court", nightlyPrice: 72, stars: 4, city: "Kyoto", breakfast: true},
  {id: 5, name: "Riverside Inn", nightlyPrice: 197, stars: 2, city: "Toronto", breakfast: false},
  {id: 6, name: "Sea Breeze", nightlyPrice: 207, stars: 2, city: "Kyoto", breakfast: false},
  {id: 7, name: "Harbour View", nightlyPrice: 228, stars: 4, city: "Lisbon", breakfast: false},
  {id: 8, name: "Pine Lodge", nightlyPrice: 163, stars: 4, city: "Lisbon", breakfast: true}
]
```
