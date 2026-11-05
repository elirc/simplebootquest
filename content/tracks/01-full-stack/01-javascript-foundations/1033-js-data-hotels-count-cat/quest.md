---
slug: "js-data-hotels-count-cat"
title: "Data: Count hotels by city"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Count hotels by city

Return how many hotels have `city` equal to `value`.

The tests call your function with this data (also available as `HOTELS` in the tests):

```js
const HOTELS = [
  {id: 1, name: "Old Mill", nightlyPrice: 272, stars: 2, city: "Lisbon", breakfast: true},
  {id: 2, name: "Olive Court", nightlyPrice: 78, stars: 4, city: "Lisbon", breakfast: false},
  {id: 3, name: "Cityloft", nightlyPrice: 387, stars: 2, city: "Lisbon", breakfast: false},
  {id: 4, name: "Sky Garden", nightlyPrice: 328, stars: 2, city: "Kyoto", breakfast: true},
  {id: 5, name: "Maple House", nightlyPrice: 255, stars: 2, city: "Kyoto", breakfast: false},
  {id: 6, name: "Northern Star", nightlyPrice: 333, stars: 2, city: "Kyoto", breakfast: false},
  {id: 7, name: "Station Hotel", nightlyPrice: 176, stars: 3, city: "Lisbon", breakfast: true},
  {id: 8, name: "Riverside Inn", nightlyPrice: 63, stars: 1, city: "Kyoto", breakfast: true}
]
```
