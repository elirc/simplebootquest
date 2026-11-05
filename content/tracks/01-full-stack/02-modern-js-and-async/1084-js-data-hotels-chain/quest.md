---
slug: "js-data-hotels-chain"
title: "Data: Filter, sort, map: hotels in one city"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Filter, sort, map: hotels in one city

Return the names of hotels whose `city` equals `value`, sorted by `nightlyPrice` **highest first**. One chain of array methods is enough.

The tests call your function with this data (also available as `HOTELS` in the tests):

```js
const HOTELS = [
  {id: 1, name: "Sky Garden", nightlyPrice: 189, stars: 3, city: "Kyoto", breakfast: true},
  {id: 2, name: "Station Hotel", nightlyPrice: 46, stars: 3, city: "Toronto", breakfast: false},
  {id: 3, name: "Pine Lodge", nightlyPrice: 93, stars: 4, city: "Toronto", breakfast: false},
  {id: 4, name: "Old Mill", nightlyPrice: 256, stars: 4, city: "Lisbon", breakfast: false},
  {id: 5, name: "The Grand", nightlyPrice: 331, stars: 4, city: "Kyoto", breakfast: false},
  {id: 6, name: "Northern Star", nightlyPrice: 316, stars: 1, city: "Toronto", breakfast: false},
  {id: 7, name: "Cityloft", nightlyPrice: 122, stars: 4, city: "Lisbon", breakfast: false},
  {id: 8, name: "Harbour View", nightlyPrice: 269, stars: 2, city: "Lisbon", breakfast: false}
]
```
