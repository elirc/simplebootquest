---
slug: "js-data-hotels-between"
title: "Data: Hotels in a nightly price range"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Hotels in a nightly price range

Return the names of hotels whose `nightlyPrice` is between `low` and `high` **inclusive**. Use `filter` and `map`.

The tests call your function with this data (also available as `HOTELS` in the tests):

```js
const HOTELS = [
  {id: 1, name: "Station Hotel", nightlyPrice: 207, stars: 1, city: "Kyoto", breakfast: false},
  {id: 2, name: "Cityloft", nightlyPrice: 213, stars: 2, city: "Toronto", breakfast: true},
  {id: 3, name: "Harbour View", nightlyPrice: 135, stars: 5, city: "Lisbon", breakfast: true},
  {id: 4, name: "Sky Garden", nightlyPrice: 186, stars: 4, city: "Toronto", breakfast: true},
  {id: 5, name: "The Grand", nightlyPrice: 54, stars: 2, city: "Toronto", breakfast: true},
  {id: 6, name: "Maple House", nightlyPrice: 96, stars: 5, city: "Lisbon", breakfast: true},
  {id: 7, name: "Sea Breeze", nightlyPrice: 71, stars: 1, city: "Toronto", breakfast: false},
  {id: 8, name: "Old Mill", nightlyPrice: 355, stars: 1, city: "Kyoto", breakfast: false}
]
```
